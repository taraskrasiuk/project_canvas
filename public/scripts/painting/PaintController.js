import {
    EraseControl,
    BackgroundControl,
    ShapeControl,
    BrushControl,
    SelectControl
} from "./paint-controls/PaintControls"
import Controller from "../global/Controller";

const prepare = (canvas, scaleFactor) => {
    if (!canvas.style.width)
        canvas.style.width = canvas.width + 'px';
    if (!canvas.style.height)
        canvas.style.height = canvas.height + 'px';

    canvas.width = Math.ceil(canvas.width * scaleFactor);
    canvas.height = Math.ceil(canvas.height * scaleFactor);
    var ctx = canvas.getContext('2d');
    ctx.scale(scaleFactor, scaleFactor);
    return ctx;
};

class PaintController extends Controller{
    constructor(props = {}) {
        super({model: new props.modelConstructor({context: props.canvas.getContext("2d"), width: props.canvas.width, height: props.canvas.height})});
        this.props = props;
        this.selectedTool = null;
        this.startPositions = {};
        this.updatedPositions = {};

        this.controls = {};
        this.activeControl = null;
    }

    prepare (canvas, scaleFactor) {
        if (!canvas.style.width)
            canvas.style.width = canvas.width + 'px';
        if (!canvas.style.height)
            canvas.style.height = canvas.height + 'px';

        canvas.width = Math.ceil(canvas.width * scaleFactor);
        canvas.height = Math.ceil(canvas.height * scaleFactor);
        var ctx = canvas.getContext('2d');
        ctx.scale(scaleFactor, scaleFactor);
        return ctx;
    }

    historyNext () {
        this.model.historyNext();
    }

    historyBack () {
        this.model.historyBack();
    }

    getControl() {
        return this.control;
    }

    _checkExistingControl(type) {
        return this.controls[type] != null;
    }

    clearAll () {
        this.model.clearAll();
        // this.activeControl = null;
        // this.selectedTool = null;
    }

    setControl(tool) {
        var type = tool.name;
        if (this._checkExistingControl(type)) {
            this.activeControl = this.controls[type];
            return this.activeControl;
        } else {
            const props = {type: type, model: this.model, tool: tool};
            switch (type) {
                case "shapes" :
                    this.controls[type] = new ShapeControl(props);
                    break;
                case "brush" :
                    this.controls[type] = new BrushControl(props);
                    break;
                case "background" :
                    this.controls[type] = new BackgroundControl(props);
                    break;
                case "erase" :
                    this.controls[type] = new EraseControl(props);
                    break;
                case "select":
                    this.controls[type] = new SelectControl(Object.assign(props, {
                        canvas: this.props.canvas
                    }));
                    break;
                default:
                    break;
            }
            this.activeControl = this.controls[type];
        }
    }

    handleTool(tool) {
        this.selectedTool = tool;
        this.setControl(tool);
        console.log("PAINT CONTROLLER: handleTool: ", tool);
    }

    handleOptionTool(dataOption) {
        console.log(this.activeControl);
        this.activeControl.update(dataOption);
        console.log("PAINT CONTROLLER: handleOptionChange: ", dataOption);

    }

    getSelectedTool() {
        return this.selectedTool;
    }

    setStartPositions({x, y}) {
        this.startPositions.x = x;
        this.startPositions.y = y;
        console.log("PAINT CONTROLLER: startPosition: " + this.startPositions);
        if (this.activeControl != null && this.activeControl.listenersOn) {
            this.activeControl.onMouseDown(this.startPositions);
        }
    }

    setUpdatedPositions({x, y}) {
        this.updatedPositions.x = x;
        this.updatedPositions.y = y;
        console.log("PAINT CONTROLLER: updatedPositions: " + this.updatedPositions);
        if (this.activeControl != null && this.activeControl.listenersOn) {
            this.activeControl.onMouseMove(this.updatedPositions);
        }
    }
    handleMouseUp({x,y}) {
        if (this.activeControl != null && this.activeControl.listenersOn) {
            this.activeControl.onMouseUp(this.updatedPositions);
        }
    }


    setSelectTool(tool) {
        this.selectedTool = tool;
    }
}
export default PaintController;