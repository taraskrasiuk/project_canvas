import PDF_Model from "./PDF_Model";
import PaintController from "../painting/PaintController";

class PDF_Controller extends PaintController{
    constructor(props) {
        super(props);
        this.props = props;
        this.element = null;
        this.ctx = props.ctx;
        this.canvas = props.canvas;

        this.scale = 1;

        this.currentPage = 1;
        this.totalPages = 0;

        this.pageRendering = false;
        this.pageNumPending = null;


    }


    _getPropsFileProps () {
        return {
            totalPages: this.model.pdf.numPages,
            currentPage: this.currentPage,
            fileName: this.model.pdf
        }
    }
    // handleLoadPDF (cb) {
    //
    // }
    //
    // _callback (page) {
    //     let test = document.querySelector(".board-content");
    //     let w = 0, h = 0;
    //     if (test != null) {
    //         w = test.offsetWidth;
    //         h = test.offsetHeight;
    //         this.canvas.width = w;
    //         this.canvas.height = h;
    //     }
    //     // var viewport = page.getViewport(
    //     //     this.canvas.width/page.getViewport(this.scale).width
    //     // );
    //     var viewport = page.getViewport(this.scale);
    //     var scale = this.canvas.width / viewport.width;
    //     var scaledViewport = page.getViewport(scale);
    //     // this.canvas.height = scaledViewport.height;
    //     // this.canvas.height = viewport.height;
    //     // this.canvas.width = viewport.width;
    //
    //     const renderContext = {
    //         canvasContext: this.model.getContext(),
    //         viewport: scaledViewport
    //     };
    //     let b = page.render(renderContext);
    //
    //     return b.promise;
    // }
    //
    // uploadPDFFile (e) {
    //     this.model.uploadPDF(e, this.update())
    // }
    // getFile (fileName, cb) {
    //     this.model.currentUrl = "/"+fileName;
    //     const self = this;
    //     this.model.loadFile(this._callback.bind(this));
    //     cb(() => this.model.getTotalPages());
    // }
    //
    // update () {
    //
    //     this.model.updatePage(this._callback.bind(this));
    // }
    //
    // renderPage (page) {
    //     const pdf = this.model.pdf;
    //     if (pdf != null) {
    //         pdf.getPage(this.currentPage).then
    //     }
    // }

    //
    // nextPage (cb) {
    //     const self = this;
    //     this.model.getNext(this._callback.bind(this));
    //     cb(() => this.model.getCurrentPageNum());
    // }
    // prevPage (cb) {
    //     const self = this;
    //     this.model.getPrev(this._callback.bind(this));
    //     cb(() => this.model.getCurrentPageNum());
    // }
    //
    // getAmounOfPages () {
    //     return this.model.pdf.numPages;
    // }

    uploadFile (e) {
        this.model.upload(e, this.renderPage.bind(this));
    }

    update () {

    }

    static _getViewport (page, canvas, scale) {
        // TODO: need to rewrite
        const viewport = page.getViewport(scale);
        // canvas.width = viewport.width;
        canvas.height = viewport.height;

        const _scale = canvas.width / viewport.width;
        return page.getViewport(_scale);
    }
    static _calcCanvasOffset () {
        const wrapper = document.querySelector(".paint-view");
        if (wrapper != null) {
            return {
                w: wrapper.offsetWidth,
                h: wrapper.offsetHeight
            };
        }
    }

    zoomIn () {
        this.scale-=.5;
        this.renderPage();
        this.model.clearContext();
    }

    zoomOut () {
        this.scale+=.5;
        this.renderPage();
        this.model.context.clearContext();
    }

    clear () {
        this.model.pdf = null;
        this.model.context.clearContext();
    }
    _image (p) {
        const self = this;
        const _p = new Promise((res, rej) => {
            self.pageRendering = false;
            self.updateViewCallback(self._getPropsFileProps());
            if (self.pageNumPending !== null) {
                self.renderPage();
                self.pageNumPending = null;
            }
            res({})
        });
        _p.then(p => {
            console.log(p);
            const c = self.model.getContext();
            self.model.context.backgroundImage = c.getImageData(0, 0, c.canvas.width, c.canvas.height);
            self.model.context.clearContext();
        })
    }
    renderPage() {
        this.pageRendering = true;
        const self = this;
        self.model.pdf.getPage(self.currentPage).then(page => {
            const offset = PDF_Controller._calcCanvasOffset();
            self.canvas.width = offset.w;
            self.canvas.height = offset.h;

            const viewport = PDF_Controller._getViewport(page, self.canvas, self.scale);

            const renderContext = {
                canvasContext: self.model.getContext(),
                viewport: viewport
            };
            let render = page.render(renderContext);

            render.promise.then(self._image.bind(self));
        });

    }

    queueRenderPage(num) {
        if (this.pageRendering) {
            this.pageNumPending = num;
        } else {
            this.renderPage();
        }
    }

    nextPage () {
        if (this.currentPage >= this.model.pdf.numPages) {
            return;
        }
        this.currentPage++;
        this.queueRenderPage(this.currentPage);
    }

    prevPage() {
        if (this.currentPage <= 1) {
            return;
        }
        this.currentPage--;
        this.queueRenderPage(this.currentPage);
    }
}

export default PDF_Controller;