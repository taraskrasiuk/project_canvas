import $ from "jquery";
import PaintController from "./PaintController";
import PaintState from "./PaintState";
import Canvas_View from "../board/Canvas_View";

class PaintView extends Canvas_View{
    constructor (props ={}) {
        super({
            controller: PaintController,
            modelConstructor: PaintState,
            className: "paint-view",
            active: props.active,
            showTools: true
        });
        const {elementId, tools} = props;
        this._element = elementId;
        this.currentTool = null;
        const self = this;
        this.bottomItems = [
            {
                type: "link",
                label: "to PNG",
                onClick: (e) => {
                    let dt = this.canvas.toDataURL("image/png");
                    dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
                    dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
                    e.target.href = dt;
                }
            }, {
                type: "button",
                label: "toggleControls",
                onClick: (e) => {
                    e.preventDefault();
                    self.showTools = !self.showTools;
                    self.update();
                }
            }
        ]
    }
    /**
     *
     * @param name
     * @param value
     */
    handleSelectTool (toolName) {
        this.controller.setSelectTool(toolName);
    }

    /**
     *
     * @returns {jQuery|HTMLElement}
     */
    render () {
        return $("<div></div>", {
            "class": "paint"
        }).append(this.renderCanvasView());

    }
}

export default PaintView;