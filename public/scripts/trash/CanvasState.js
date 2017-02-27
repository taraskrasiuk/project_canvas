import Rectangle from "../painting/shapes/Rectangle";
import Ellipsis from "../painting/shapes/Ellipsis";
import Brush from "../painting/shapes/Brush";
import Shape from "../painting/shapes/Shape";
import Triangle from "../painting/shapes/Triangle";


const CURSOR_TOP_LEFT = "nw-resize";
const CURSOR_TOP_RIGHT = "ne-resize";
const CURSOR_BOTTOM_LEFT = "sw-resize";
const CURSOR_BOTTOM_RIGHT = "se-resize";
const CURSOR_DEFAULT = "default";

const SHAPE_MODE = "shapes";
const PAINTING_MODE = "painting";

class CanvasState {
    constructor(props) {
        const {strokeStyle, fillStyle, backgroundColor, lineWidth, currentTool, globalAlpha, mode, fill, canvas} = props;
        this.lineWidth = lineWidth || 2;
        this.strokeStyle = strokeStyle || "#6a6a6a";
        this.fillStyle = fillStyle || "#b8b8b8";
        this.backgroundColor = backgroundColor;
        this.globalAlpha = globalAlpha || 1;
        this.callback = props.callback;
        this.currentTool = currentTool || "Rectangle";
        this.fill = fill;
        this.backgroundImage = null;


        this.canvas = canvas;
        this.shapes = [];
        this.startPositions = {};


        if (this.canvas != null) {
            this.ctx = this.canvas.getContext("2d");
        }

        this.mode = "shapes";

        this.selected = null;
        this.tempShape = null;
        // modes
        this.isDrawing = false;
        this.isDragging = false;
        this.isResizing = false;
        this.selectedBoundBox = null;
        this.isPainting = false;

        this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this), false);
        this.canvas.addEventListener("mousedown", this.onMouseDown.bind(this), false);
        this.canvas.addEventListener("mouseup", this.onMouseUp.bind(this), false);

        this.shapes.push(new Rectangle({
            x: 20,
            y: 30,
            w: 50,
            h: 50,
            ctx: this.ctx,
            fillStyle: this.fillStyle,
            strokeStyle: this.strokeStyle,
            lineWidth: this.lineWidth,
            globalAlpha: this.globalAlpha,
            fill: true
        }));
        this.shapes.push(new Rectangle({
            x: 60,
            y: 100,
            w: 50,
            h: 50,
            ctx: this.ctx,
            fillStyle: this.fillStyle,
            strokeStyle: this.strokeStyle,
            lineWidth: this.lineWidth,
            globalAlpha: this.globalAlpha,
            fill: false
        }));
        this.shapes.push(new Ellipsis({
            x: 30,
            y: 30,
            w: 50,
            h: 50,
            ctx: this.ctx,
            fillStyle: this.fillStyle,
            strokeStyle: this.strokeStyle,
            lineWidth: this.lineWidth,
            globalAlpha: this.globalAlpha,
            fill: true
        }));
        this.update();

    }

    setCurrentTool(nameTool) {
        this.currentTool = nameTool;
        if (this.currentTool.toLowerCase() == "brush" || this.currentTool.toLowerCase() == "pencil") {
            this.mode = "painting";
        } else {
            this.mode = "shapes";
        }
        if (this.currentTool.toLowerCase() == "background") {
            this.mode = "background";
        }
    }

    setFill(bool) {
        this.fill = bool;
    }

    setBackgroundImage({name, value}) {
        this.mode = "";
        this.ctx.save();
        this._clearContext();
        this.backgroundImage = value;
        this.ctx.drawImage(value, 0, 0);
        this.ctx.restore();
        this.update();
    }

    setMode(m) {
        this.mode = m;
    }

    merge(prop = {}) {
        if (prop != null) {
            if (!isNaN(prop.value)) {
                this[prop.name] = parseInt(prop.value);
            } else {
                this[prop.name] = prop.value;
            }
        }
        this._update(prop);
        // this.callback(prop);
    }

    _update() {
        const props = ["strokeWidth", "strokeColor", "fillStyle", "globalAlpha", "lineWidth", "strokeStyle"];
        // this.ctx.save();/
        for (let p of props) {
            this.ctx[p] = this[p];
        }
    }


    updateStyle(props) {
        Object.keys(props).forEach(p => {
            this.ctx[p] = props[p];
        });
    }

    update() {
        this.shapes.forEach(sh => sh.draw());
    }


    pushToShapes(shape) {
        if (shape instanceof Shape) {
            this.shapes.push(shape);
        }
        return this;
    }

    _clearContext() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.backgroundColor != null) {
            this.ctx.fillStyle = this.backgroundColor;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            // this.update();
        }
        if (this.backgroundImage != null) {
            // this.ctx.save();
            // this._clearContext();
            // this.backgroundImage = value;
            this.ctx.drawImage(this.backgroundImage, 0, 0);
            // this.ctx.restore();
        }
        this.update();

    }


    getMouse(e) {
        const {top, left} = this.canvas.getBoundingClientRect();

        return {
            x: e.clientX - left,
            y: e.clientY - top
        }
    }



    _mouseDownOnBackground(pos) {
        this.ctx.save();
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.restore();
        this.update();
    }

    onMouseDown(e) {
        // const {mode} = this.state;
        const pos = this.getMouse(e);
        this.startPositions.x = pos.x;
        this.startPositions.y = pos.y;
        this.isDown = true;
        console.log("MOUSE DOWN");
        switch (this.mode) {
            case "shapes" :
                this._mouseDownShapeMode(pos);
                break;
            case "painting" :
                this._mouseDownPaintingMode(pos);
                break;
            case "background" :
                this._mouseDownOnBackground(pos);
                break;
            default :
                return;
        }
    }

    _mouseDownPaintingMode(pos) {
        this.isPainting = true;
        this.startPositions.x = pos.x;
        this.startPositions.y = pos.y;
        this.tempShape = new Brush({
            x: pos.x,
            y: pos.y,
            ctx: this.ctx,
            strokeStyle: this.strokeStyle,
            globalAlpha: this.globalAlpha,
            lineWidth: this.lineWidth
        });
        this.shapes.push(this.tempShape);
    }

    _getSelectedShape (pos) {
        this.shapes.forEach(sh => {
           const isShape = sh instanceof Shape;
           const contains = sh.contains(pos);

            // check if selected != null
            if (this.selected != null) {
                const boundedBoxes = sh.getSelectedBoundedBox(pos);
                //

            } else {
                if (isShape && contains) {
                    this.selected = sh;
                    this.selected.isBounded = true;
                    this.isDragging = true;
                } else {
                    this.selected = null;
                    if (sh.isBounded) {
                        sh.isBounded = false;
                    }
                }
            }


        });
    }

    _mouseDownShapeMode(pos) {
        const shapeOnOfBoundBoxOver = (shape, pos) => {
            const boxes = shape.getSelecedBoundedBox(pos);
            return !shape.contains(pos) && (boxes != null ? true : false);
        };
        if (this.selected != null && this.selected.contains(pos)) {
            this.selected.isBounded = true;
            this.isDragging = true;
        } else {
            this.shapes.forEach(sh => {
                if (sh instanceof Shape) {
                    if (sh.contains(pos) && this.selected == null) {
                        this.selected = sh;
                        this.selected.isBounded = true;
                        this.isDragging = true;
                    } else {
                        if (sh.isBounded) {
                            sh.isBounded = false;
                        }
                    }
                    if (shapeOnOfBoundBoxOver(sh, pos)) {
                        this.selected = sh;
                        sh.isBounded = true;
                        this.isResizing = true;
                        this.isDragging = false;
                    }
                }
            });
        }
        if (this.selected == null) {
            this.isDrawing = true;
            this.tempShape = this._getTool();
            this.shapes.push(this.tempShape);
        }
        this._clearContext();
        this.update();
    }

    _getTool() {
        let tool = null;
        // const {currentTool} = this.state;
        const defPropsForShape = {
            x: this.startPositions.x,
            y: this.startPositions.y,
            w: 0,
            h: 0,
            ctx: this.ctx,
            strokeStyle: this.strokeStyle,
            lineWidth: this.lineWidth,
            fillStyle: this.fillStyle,
            globalAlpha: this.globalAlpha,
            fill: this.fill

        };
        switch (this.currentTool) {
            case "Rectangle" :
                tool = new Rectangle(defPropsForShape);
                break;
            case "Circle" :
                tool = new Ellipsis(defPropsForShape);
                break;
            case "Triangle" :
                tool = new Triangle(defPropsForShape);
                break;
            default :
                tool = new Rectangle(defPropsForShape);
                break;
        }
        return tool;
    }

    onMouseUp(e) {
        // const {mode} = this.state;
        this.isDrawing = false;
        this.isDragging = false;
        this.isPainting = false;
        this.isResizing = false;
        this.isDown = false;
        this.selected = null;
        this.selectedBoundBox = -1;
        if (this.tempShape != null && ((this.tempShape.w == 0 || this.tempShape.h == 0) || (this.tempShape.paths != null && this.tempShape.paths.length == 0))) {
            this.shapes.pop();
        }
        this.tempShape = null;
    }

    onMouseMove(e) {
        // const {mode} = this.state;
        console.log("MOUSE MOVE");
        const pos = this.getMouse(e);
        switch (this.mode) {
            case "shapes" :
                this._mouseMoveShape(pos);
                break;
            case "painting" :
                this._mouseMovePainting(pos);
                break;

        }

    }

    _mouseMovePainting(pos) {
        if (this.isPainting && this.tempShape instanceof Brush) {
            this.tempShape.addPath({x: pos.x, y: pos.y});
            this._clearContext();
            this.update();
        }

    }

    _mouseMoveShape(pos) {
        this.canvas.style.cursor = CURSOR_DEFAULT;
        if (this.selected != null) {
            this._getCursor(pos);

            if (this.isDragging) {
                console.log("dragging ");
                console.log("START x: " + this.startPositions.x + "\n" + "START y " + this.startPositions.y);
                console.log("pos x " + pos.x + "\n" + "pos y " + pos.y);
                const dx = pos.x - this.startPositions.x;
                const dy = pos.y - this.startPositions.y;
                // this.ctx.c/learRect(0, 0, this.width, this.height);

                this.selected.setX(this.selected.x + dx).setY(this.selected.y + dy);
                this.startPositions.x = pos.x;
                this.startPositions.y = pos.y;
            }
            if (this.isResizing) {
                console.log("resizing");
                switch (this.selectedBoundBox) {
                    case 0: //topLeft
                        this.selected.setW((this.selected.x + this.selected.w) - pos.x);
                        this.selected.setH((this.selected.y + this.selected.h) - pos.y);
                        this.selected.setX(pos.x);
                        this.selected.setY(pos.y);

                        break;
                    case 1: //topRight
                        this.selected.setW(pos.x - this.selected.x);
                        this.selected.setH((this.selected.y + this.selected.h) - pos.y);
                        this.selected.setY(pos.y);

                        break;
                    case 2: // bottomLeft
                        this.selected.setW((this.selected.x + this.selected.w) - pos.x);
                        this.selected.setH(pos.y - this.selected.y);
                        this.selected.setX(pos.x);

                        break;
                    case 3: //bottomRight
                        this.selected.setW(pos.x - this.selected.x);
                        this.selected.setH(pos.y - this.selected.y);
                        break;
                }
            }
        } else {
            if (this.isDrawing && this.tempShape != null) {
                this.tempShape.setW(pos.x - this.tempShape.x).setH(pos.y - this.tempShape.y);
            }
        }

        this._clearContext();
        this.update();
    }

    // DONE
    _getCursor(pos) {
        let cursor = null;
        this.selected.boundBoxes.forEach((box, i) => {
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
                if (this.isDown && cursor != null) {
                    this.selectedBoundBox = i;
                }
            }
        });

        this.canvas.style.cursor = cursor || CURSOR_DEFAULT;
    }

}

export default CanvasState;