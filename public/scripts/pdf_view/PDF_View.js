import $ from "jquery";
import {
    ELEMENT_CANVAS,
    ELEMENT_DIV
} from "../Constants";
import PDF_Controller from "./PDF_Contoller";
import PDF_Model from "./PDF_Model";
import Bottom_View from "../board/Bottom_View";
import Canvas_View from "../board/Canvas_View";

class PDF_Vew extends Canvas_View {
    constructor(props = {}) {
        super({
            controller: PDF_Controller,
            modelConstructor: PDF_Model,
            className: "paint-view",
            active: props.active,
            showTools: false,
            tools: props.tools
        });
        this.totalPages = 0;
        this.currentPage = 0;
        const self = this;
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
                    label: "load pdf",
                    onClick: (e) => {
                        e.preventDefault();
                        this.controller.getFile("ng-book.pdf", (pages) => {
                            this.totalPages = pages;
                            const total = $("<span></span>", {
                                text: this.totalPages,
                                id: "totalPages"
                            });
                            $(".pdf-wrapper").prepend(total);
                        });
                    },
                    className: "bottom-button"
                }, {
                    type: "button",
                    label: "zoom-in",
                    onClick: (e) => {
                        e.preventDefault();
                        this.controller.scale = this.controller.scale - .2;
                        this.controller.update();
                    }
                }, {
                    type: "button",
                    label: "zoom-out",
                    onClick: (e) => {
                        e.preventDefault();
                        this.controller.scale = this.controller.scale + .2;
                        this.controller.update();
                    }
                }, {
                    type: "input",
                    label: "upload pdf",
                    onUpload: (event) => {
                        var file = event.target.files[0];
                        var fileReader = new FileReader();
                        fileReader.onload = function() {
                            var typedarray = new Uint8Array(this.result);
                            self.controller.model.loadPdf(typedarray, self.controller._callback.bind(self.controller));
                        };
                        fileReader.readAsArrayBuffer(file);
                    }
                }, {
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
                }];
    }


    render () {
        const wrapper = $(ELEMENT_DIV, {
            "class": "pdf-wrapper"
        }).append(this.renderCanvasView());
        return wrapper;
    }

}

export default PDF_Vew;