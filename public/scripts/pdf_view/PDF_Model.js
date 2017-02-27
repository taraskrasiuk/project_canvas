const API_GET = "GET";
const ARRAY_BUFFER = "arraybuffer";
import PaintState from "../painting/PaintState";

class PDF_Model extends PaintState{
    constructor(props = {}) {
        super({context: props.context, width: props.width, height: props.height});

        // this.filesUrl = props.files.length > 0 ? props.files : ["ng-book.pdf"];

        this.currentUrl = "/ng-book.pdf";

        this.pageRendering = false;
        this.pageRendering = null;
        this.scale = 1;

        this.pdf = null;
        this.pageNum = 1;
    }

    getTotalPages () {
        return this.pdf.numPages;
    }

    getCurrentPageNum () {
        return this.pageNum;
    }
    loadFileFromSource () {

    }
    loadFile(cb) {
        const self = this;
        const xhr = new XMLHttpRequest();
        xhr.open(API_GET, "static" + self.currentUrl, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = (e) => {
            self.loadPdf(e.currentTarget.response, cb);
        };

        xhr.onerror = function () {
            console.log("xhr error");
        };
        xhr.send();
    }

    loadPdf(data, cb) {
        const self = this;
        PDFJS.getDocument(data).then(function (pdfDoc_) {
            self.pdf = pdfDoc_;
            self.renderPage(cb);
        });
    }

    queueRenderPage(num, cb) {
        if (this.pageRendering) {
            this.pageNumPending = num;
        } else {
            this.renderPage(cb);
        }
    }

    getNext(cb) {
        if (this.pageNum >= this.pdf.numPages) {
            return;
        }
        this.pageNum++;
        this.queueRenderPage(this.pageNum, cb);
    }
    getPrev (cb) {
        if (this.pageNum <= 1) {
            return;
        }
        this.pageNum--;
        this.queueRenderPage(this.pageNum, cb);
    }

    updatePage(cb) {
        const self = this;
        this.pdf.getPage(this.pageNum).then(cb).then(this._promise.bind(this));
    }
    _promise () {
        this.pageRendering = false;
        const c = this.getContext();
        this.context.backgroundImage = c.canvas.toDataURL(0,0, c.canvas.width, c.canvas.height);
        // c.backgroundImage = c.putImageData(img, 0,0);
        // c.backgroundImage = c.getImageData(0,0, c.)
        this.context.clearContext();
        // this.setUpload(img);
        if (this.pageNumPending !== null) {
            // New page rendering is pending
            this.renderPage(cb);
            this.pageNumPending = null;
        }
    }

    renderPage(cb) {
        const self = this;
        this.pageRendering = true;
        this.pdf.getPage(this.pageNum).then(cb).then(this._promise.bind(this));
    }
}

export default PDF_Model;