import $ from "jquery";
import PaintController from "./PaintController";
import PaintState from "./PaintState";
import Canvas_View from "../board/Canvas_View";
import Bottom_View from "../board/Bottom_View";


const BUTTON_NEXT = "next";
const BUTTON_PREV = "prev";
const BUTTON_LOAD = "load";
const BUTTON_ZOOM_IN = "zoom-in";
const BUTTON_ZOOM_OUT = "zoom-out";
const BUTTON_UPLOAD = "upload";
const BUTTON_DOWNLOAD = "download";
const BUTTON_SAVE = "save";
const BUTTON_TOGGLE = "toggle";
const BUTTON_CLEAR = "clear";
const BUTTON_RECORD = "record";

const START_POINT = {
    buttons: [BUTTON_UPLOAD,BUTTON_TOGGLE, BUTTON_RECORD]
};
const PDF_LOAD = {
    buttons: [BUTTON_DOWNLOAD, BUTTON_NEXT,BUTTON_PREV, BUTTON_ZOOM_IN, BUTTON_ZOOM_OUT, BUTTON_SAVE, BUTTON_CLEAR, BUTTON_TOGGLE]
};

class PaintView extends Canvas_View{
    constructor (props ={}) {
        super({
            controller: PaintController,
            modelConstructor: PaintState,
            className: "paint-view",
            active: props.active,
            showTools: true,
            position: "left",
            tools: props.tools
        });

        // set view to controller
        this.controller.setView(this);
        //
        const {elementId, tools} = props;
        this._element = elementId;
        this.currentTool = null;
        const self = this;

        this._currentBottomView = START_POINT;

        this.bottomItems = [
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
            },
            {
                type: "button",
                label: "clear",
                onClick: (e) => {
                    e.preventDefault();
                    this._currentBottomView = START_POINT;
                    this._bottomControls  = {
                        items: this._getItems(),
                        optionsItems: []
                    };
                    this.controller.clearAll();
                }
            },
            {
                type: "button",
                label: "next",
                onClick: (e) => {
                    e.preventDefault();
                    this.controller.nextPage((num) => {
                        this.currentPage = num;
                        $("#totalaPages").text(this.currentPage + "/" + this.totalPages);
                    });
                },
                className: "bottom-button"
            },
            {
                type: "button",
                label: "prev",
                onClick: (e) => {
                    e.preventDefault();
                    this.controller.prevPage(num => {
                        this.currentPage = num;
                        $("#totalaPages").text(this.currentPage + "/" + this.totalPages);
                    });
                },
                className: "bottom-button"
            },
            {
                type: "button",
                label: "record",
                onClick: (e) => {
                    e.preventDefault();
                    this.controller.startRecordDraw();
                }
            }
        ];
        this._bottomControls  = {
            items: this.bottomItems || [],
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

    _getItems () {
        return this.bottomItems.filter(b => this._currentBottomView.buttons.indexOf(b.label) != -1);
    }

    update ({currentPage, totalPages}) {
        if (totalPages > 0) {
            this._currentBottomView = PDF_LOAD;
            this.items = this._getItems();
            this._bottomControls  = {
                items: this._getItems(),
                optionsItems: [{text: `${currentPage} / ${totalPages}`}]
            };
            this.bottomControl.option = this._bottomControls ;
            this.bottomControl.update();

        }
    }
    initBottomControls () {
        return {
            items: this._getItems(),
            optionsItems: []
        };
    }

    /**
     *
     * @returns {jQuery|HTMLElement}
     */
    render () {
        this.bottomControl.option = this.initBottomControls();
        this.bottomControl.update();
        const div =  $("<div></div>", {
            "class": "paint"
        }).append(this.renderCanvasView());
        this.element = div;
        return div;

    }
}

export default PaintView;