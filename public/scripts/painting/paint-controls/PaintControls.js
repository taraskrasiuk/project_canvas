import Utils from "../../utils/Utils";
import Brush from "../shapes/Brush";
import Pencil from "../shapes/Pencil";
import Rectangle from "../shapes/Rectangle";
import Ellipsis from "../shapes/Ellipsis";
import Triangle from "../shapes/Triangle";
import {
    CURSOR_TOP_LEFT,
    CURSOR_TOP_RIGHT,
    CURSOR_BOTTOM_LEFT,
    CURSOR_BOTTOM_RIGHT,
    CURSOR_DEFAULT
} from "../../Constants";

class Control {
    constructor({type, model, tool}) {
        this.type = type;
        this.state = model;
        this.tool = tool;
    }
}

export class BackgroundControl extends Control{
    constructor(props = {}) {
        super(props);
        this.listenersOn = false;
        this.scale = null;
        this.backgroundColor = props.backgroundColor;
        this.upload = props.upload;
    }

    getBackgroundColor () {
        return this.backgroundColor;
    }

    getImage () {
        return this.image;
    }

    setImage (image) {
        this.image = image;
        return this;
    }

    update (data) {
        switch(data.type) {
            case "backgroundColor":
                this.backgroundColor = data.value;
                this.state.setBackgroundColor(this.backgroundColor);
                break;
            case "scale":
                this.scale = data.value;
                this.state.setScale(this.scale);
                break;
            case "upload":
                this.setImage(data.value);
                this.upload = data.value;
                this.state.setUpload(this.upload);
                break;
        }
    }
}

export class ShapeControl extends Control{
    constructor(props ={}) {
        super(props);

        this.listenersOn = true;

        this.temp = null;

        this.isDown = false;
    }

    onMouseDown({x, y}) {
        const type = Utils.firstCharTOUpperCase(this.tool.getSelected());
        var context = this.state.getContext();
        switch (type) {
            case "Rectangle":
                this.temp = new Rectangle({
                    ctx: context,
                    strokeStyle: context.strokeStyle,
                    lineWidth: context.lineWidth,
                    globalAlpha: context.globalAlpha,
                    shadowBlur: context.shadowBlur,
                    shadowColor: context.shadowColor,
                    fillStyle: context.fillStyle,
                    fill: this.state.context.fillShape
                });
                break;
            case "Circle":
                this.temp = new Ellipsis({
                    ctx: context,
                    strokeStyle: context.strokeStyle,
                    lineWidth: context.lineWidth,
                    globalAlpha: context.globalAlpha,
                    shadowBlur: context.shadowBlur,
                    shadowColor: context.shadowColor,
                    fillStyle: context.fillStyle,
                    fill: this.state.context.fillShape
                });
                break;
            case "Triangle":
                this.temp = new Triangle({
                    ctx: context,
                    strokeStyle: context.strokeStyle,
                    lineWidth: context.lineWidth,
                    globalAlpha: context.globalAlpha,
                    shadowBlur: context.shadowBlur,
                    shadowColor: context.shadowColor,
                    fillStyle: context.fillStyle,
                    fill: this.state.context.fillShape
                });
                break;
        }
        this.isDown = true;
        console.log(this.tool);
        this.temp.setX(x).setY(y).setW(0).setH(0);
        this.state.holder.addShape(this.temp);
    }

    onMouseUp({x, y}) {
        this.isDown = false;
        if (this.temp.w <= 1 && this.temp.h <= 1) {
            this.state.holder.pop();
        }
        this.temp.setW(x - this.temp.x).setH(y - this.temp.y);
        this.state.draw();
        this.temp = null;
    }

    onMouseMove({x, y}) {
        if (this.isDown) {
            this.temp.setW(x - this.temp.x).setH(y - this.temp.y);
            this.state.draw();
        }
    }
    update (data) {

        this.state.updateContext(data);
    }

}

export class BrushControl extends Control {
    constructor(props ={}) {
        super(props);
        this.listenersOn = true;

        this.temp = null;

        this.isDown = false;
    }

    onMouseDown({x, y}) {
        const context = this.state.getContext();
        const type = Utils.firstCharTOUpperCase(this.tool.getSelected());
        switch (type) {
            case "Pencil":
                this.temp = new Pencil({
                    ctx: context,
                    strokeStyle: context.strokeStyle,
                    lineWidth: context.lineWidth,
                    globalAlpha: context.globalAlpha,
                    shadowBlur: null,
                    shadowColor: null
                });
                break;
            case "Brush":
                this.temp = new Brush({
                    ctx: context,
                    strokeStyle: context.strokeStyle,
                    lineWidth: context.lineWidth,
                    globalAlpha: context.globalAlpha,
                    shadowBlur: context.shadowBlur,
                    shadowColor: context.shadowColor
                });
                break;
        }
        this.isDown = true;
        console.log(this.tool);
        this.temp.setX(x).setY(y);
        this.state.holder.addShape(this.temp);
    }

    onMouseUp({x, y}) {
        this.isDown = false;
        if (this.temp != null) {
            if (this.temp != null && this.temp.paths.length < 2) {
                this.state.holder.pop();
            }
            this.temp.addPath({x, y});
            this.state.draw();
        }
        this.temp = null;
    }

    onMouseMove({x, y}) {
        if (this.isDown) {
            this.temp.addPath({x, y});
            this.state.draw();
        }
    }
    update (data) {
        this.state.updateContext(data);
    }
}

export class SelectControl extends Control{
    constructor(props ={}) {
        super(props);
        this.listenersOn = true;
        this.canvas = props.canvas;
        this.temp = null;
        this.selectedBoundBox = null;
        this.isDown = false;
        this.isResizing = false;
        this.isDragging = false;
        this.startPositions = {};
    }

    onMouseDown({x, y}) {
        let selected = this.state.holder.getShapeFromPosition({x,y});
        this.startPositions.x = x;
        this.startPositions.y = y;
        this.isDown = true;
        if (selected != null) {
            this.state.selected = selected;
            this.state.draw();
            console.log(selected);
        } else {
            this.state.selected = null;
            this.state.draw();
        }

        var selected2 = this.state.selected;
        var selecedBoundedBox = selected2 != null && selected2.getSelecedBoundedBox({x,y}) != null;
        if (selecedBoundedBox) {
            this.isResizing = true;
        } else if (!selecedBoundedBox) {
            this.isDragging = true;
            this.isResizing = false;
        }

    }

    onMouseUp({x, y}) {
        this.isDown = false;
        this.isDragging = false;
        this.isResizing = false;

    }

    onMouseMove({x, y}) {
        if (this.state.selected != null) {
            this._getCursor({x,y});
            if (this.selectedBoundBox != -1 && this.isResizing) {
                switch (this.selectedBoundBox) {
                    case 0: //topLeft
                        this.state.selected.setW((this.state.selected.x + this.state.selected.w) - x);
                        this.state.selected.setH((this.state.selected.y + this.state.selected.h) - y);
                        this.state.selected.setX(x);
                        this.state.selected.setY(y);

                        break;
                    case 1: //topRight
                        this.state.selected.setW(x - this.state.selected.x);
                        this.state.selected.setH((this.state.selected.y + this.state.selected.h) - y);
                        this.state.selected.setY(y);

                        break;
                    case 2: // bottomLeft
                        this.state.selected.setW((this.state.selected.x + this.state.selected.w) - x);
                        this.state.selected.setH(y - this.state.selected.y);
                        this.state.selected.setX(x);

                        break;
                    case 3: //bottomRight
                        this.state.selected.setW(x - this.state.selected.x);
                        this.state.selected.setH(y - this.state.selected.y);
                        break;
                }
            } else if (this.isDragging) {
                const dx = x - this.startPositions.x;
                const dy = y - this.startPositions.y;
                this.state.selected.setX(this.state.selected.x + dx).setY(this.state.selected.y + dy);
                this.startPositions.x = x;
                this.startPositions.y = y;

            }
            this.state.draw();
        }
    }

    _getCursor(pos) {
        let cursor = null;
        this.state.selected.boundBoxes.forEach((box, i) => {
            const overBox = box.contains(pos);
            if (overBox) {
                switch (i) {
                    case 0: //topLeft
                        cursor = CURSOR_TOP_LEFT;
                        break;
                    case 1: //topRight
                        cursor = CURSOR_TOP_RIGHT;
                        break;
                    case 2: // bottomLeft
                        cursor = CURSOR_BOTTOM_LEFT;
                        break;
                    case 3: //bottomRight
                        cursor = CURSOR_BOTTOM_RIGHT;
                        break;
                }
                if (this.isDown && cursor != null && !this.isDragging) {
                    this.selectedBoundBox = i;
                    console.log(this.selectedBoundBox);
                }
            }
        });

        this.canvas.style.cursor = cursor || CURSOR_DEFAULT;
    }


    update (data) {
        this.state.updateContext(data);
    }
}

export class EraseControl extends Control {
    constructor(props ={}) {
        super(props);
        this.listenersOn = true;

        this.temp = null;

        this.isDown = false;
    }

    onMouseDown({x, y}) {
        const context = this.state.getContext();
        const type = Utils.firstCharTOUpperCase(this.tool.getSelected());
        this.temp = new Brush({
            ctx: context,
            strokeStyle: "#ffffff",
            lineWidth: context.lineWidth,
            globalAlpha: 1,
            shadowBlur: null,
            shadowColor: null
        });
        this.isDown = true;
        console.log(this.tool);
        this.temp.setX(x).setY(y);
        this.state.holder.addShape(this.temp);
    }

    onMouseUp({x, y}) {
        this.isDown = false;
        if (this.temp.paths.length < 2) {
            this.state.holder.pop();
        }
        this.temp.addPath({x, y});
        this.state.draw();
        this.temp = null;
    }

    onMouseMove({x, y}) {
        if (this.isDown) {
            this.temp.addPath({x, y});
            this.state.draw();
        }
    }
    update (data) {
        this.state.updateContext(data);
    }
}