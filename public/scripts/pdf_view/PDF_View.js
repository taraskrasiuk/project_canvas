import $ from "jquery";
import {
    ELEMENT_CANVAS,
    ELEMENT_DIV
} from "../Constants";
import PDF_Controller from "./PDF_Contoller";
import PDF_Model from "./PDF_Model";
import Bottom_View from "../board/Bottom_View";
import Canvas_View from "../board/Canvas_View";

const BUTTON_NEXT = "next";
const BUTTON_PREV = "prev";
const BUTTON_LOAD = "load";
const BUTTON_ZOOM_IN = "zoom-in";
const BUTTON_ZOOM_OUT = "zoom-out";
const BUTTON_UPLOAD = "upload";
const BUTTON_SAVE = "save";
const BUTTON_TOGGLE = "toggle";
const BUTTON_CLEAR = "clear";
const PDF_BUTTONS_TYPE = [BUTTON_NEXT, BUTTON_PREV, BUTTON_LOAD, BUTTON_ZOOM_IN, BUTTON_ZOOM_OUT, BUTTON_UPLOAD, BUTTON_SAVE, BUTTON_TOGGLE, BUTTON_CLEAR];

const START_POINT = {
  buttons: [BUTTON_UPLOAD, BUTTON_TOGGLE]
};
const PDF_LOAD = {
    buttons: [BUTTON_NEXT, BUTTON_PREV, BUTTON_ZOOM_IN, BUTTON_ZOOM_OUT, BUTTON_SAVE, BUTTON_CLEAR, BUTTON_TOGGLE]
};

class PDF_Vew extends Canvas_View {
    constructor(props = {}) {
        super({
            controller: PDF_Controller,
            modelConstructor: PDF_Model,
            className: "paint-view",
            active: props.active,
            showTools: false,
            tools: props.tools,
            position: "right"
        });
        this.controller.updateViewCallback = this.update.bind(this);
        this.totalPages = 0;
        this.currentPage = 0;
        const self = this;

        this._currentBottomView = START_POINT;

        this.bottomItems =
            [{
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
                    label: "load",
                    // onClick: this.handleLoadPDFFile.bind(this),
                    className: "bottom-button"
                }, {
                    type: "button",
                    label: "zoom-in",
                    onClick: (e) => {
                        e.preventDefault();
                        // this.controller.scale =/ this.controller.scale - .2;
                        this.controller.zoomIn();
                    }
                }, {
                    type: "button",
                    label: "zoom-out",
                    onClick: (e) => {
                        e.preventDefault();
                        // this.controller.scale = this.controller.scale + .2;
                        this.controller.zoomOut();
                    }
                },
                {
                  type: "button",
                    label: "clear",
                    onClick: (e) => {
                        e.preventDefault();
                        this.handleClear();
                    }
                },
                {
                    type: "input",
                    label: "upload",
                    onUpload: (event) => this.controller.uploadFile(event)
                }, {
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
                        super.update();
                    }
                }];
        this._bottomControls = {
            items: this._getItems(),
            optionsItems: []
        };
        this.bottomControl = new Bottom_View(this._bottomControls);


    }

    handleClear() {
        this.controller.clear();
        this._currentBottomView = START_POINT;
        this.bottomControl.option = {
            items: [],
            optionsItems: []
        };
        this.bottomControl.update();
    }

    _getItems () {
        return this.bottomItems.filter(b => this._currentBottomView.buttons.indexOf(b.label) != -1);
    }

    // updateBottomControls () {
    //     this.controls.update();
    // }
    //
    // /**
    //  *
    //  * @param props
    //  * @private
    //  */
    // _handlePDFUpdate(props = {}) {
    //
    //
    // }
    //
    // /**
    //  * update pdf view
    //  */
    // update () {
    //
    //
    //     this.controls.update();
    // }
    //
    // handleLoadPDFFile (e) {
    //     this.controller.uploadPDFFile(e);
    // }

    /**
     * upload file
     * @param e
     */
    handleUploadFile (e) {
        this.controller.uploadFile(e);
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
            // this.controls.items = this._getItems();
            // this.controls.optionItems = [].concat({
            //     text: `${currentPage} / ${totalPages}`
            // });
            this.bottomControl.update();

        }
    }

    renderTopPages () {
        return $("<span></span>", {
            text: `${this.controller.currentPage} / ${this.controller.model.pdf.numPages}`
        });
    }


    initBottomControls () {
        return {
            items: this._getItems(),
            optionsItems: []
        };
    }
    render () {
        this.bottomControl.option = this.initBottomControls();
        this.bottomControl.update();
        if (this.element != null) {
            return this.element;
        }
        const wrapper = $(ELEMENT_DIV, {
            "class": "pdf-wrapper"
        }).append(this.renderCanvasView());
        this.element = wrapper;
        return wrapper;
    }

}

export default PDF_Vew;