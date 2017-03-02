import $ from "jquery";
import PaintController from "./PaintController";
import PaintState from "./PaintState";
import Canvas_View from "../board/Canvas_View";
import Bottom_View from "../board/Bottom_View";

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
        this.controlsItems = [
            {
                type: "link",
                label: "download",
                onClick: (e) => {
                    let dt = this.canvas.toDataURL("image/png");
                    dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
                    dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
                    e.target.href = dt;
                }
            }, {
                type: "button",
                label: "toggle",
                onClick: (e) => {
                    e.preventDefault();
                    self.showTools = !self.showTools;
                    self.update();
                }
            }
        ];
        this._bottomControls  = {
            items: this.controlsItems || [],
            optionItems: []
        };
        this.bottomControl = new Bottom_View(this._bottomControls);

        // this.controls = new Bottom_View({
        //     items: this.controlsItems
        // });
    }
    /**
     *
     * @param name
     * @param value
     */
    handleSelectTool (toolName) {
        this.controller.setSelectTool(toolName);
    }

    updateBottomControls () {
        this.bottomControl.update();
    }


    /**
     *
     * @returns {jQuery|HTMLElement}
     */
    render () {
        this.bottomControl.update();
        if (this.element != null) {
            return this.element;
        }
        const div =  $("<div></div>", {
            "class": "paint"
        }).append(this.renderCanvasView());
        this.element = div;
        return div;

    }
}

export default PaintView;