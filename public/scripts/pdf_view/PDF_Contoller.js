import PDF_Model from "./PDF_Model";
import PaintController from "../painting/PaintController";

class PDF_Controller extends PaintController{
    constructor(props) {
        super(props);

        this.element = null;
        this.ctx = props.ctx;
        this.canvas = props.canvas;

        this.scale = 1;
    }

    _callback (page) {
        let test = document.querySelector(".board-content");
        let w = 0, h = 0;
        if (test != null) {
            w = test.offsetWidth;
            h = test.offsetHeight;
            this.canvas.width = w;
            this.canvas.height = h;
        }
        // var viewport = page.getViewport(
        //     this.canvas.width/page.getViewport(this.scale).width
        // );
        var viewport = page.getViewport(this.scale);
        var scale = this.canvas.width / viewport.width;
        var scaledViewport = page.getViewport(scale);
        // this.canvas.height = scaledViewport.height;
        // this.canvas.height = viewport.height;
        // this.canvas.width = viewport.width;

        const renderContext = {
            canvasContext: this.model.getContext(),
            viewport: scaledViewport
        };
        let b = page.render(renderContext);

        return b.promise;
    }
    getFile (fileName, cb) {
        this.model.currentUrl = "/"+fileName;
        const self = this;
        this.model.loadFile(this._callback.bind(this));
        cb(() => this.model.getTotalPages());
    }

    update () {
        this.model.updatePage(this._callback.bind(this));
    }

    nextPage (cb) {
        const self = this;
        this.model.getNext(this._callback.bind(this));
        cb(() => this.model.getCurrentPageNum());
    }
    prevPage (cb) {
        const self = this;
        this.model.getPrev(this._callback.bind(this));
        cb(() => this.model.getCurrentPageNum());
    }

    getAmounOfPages () {
        return this.model.pdf.numPages;
    }
}

export default PDF_Controller;