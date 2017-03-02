const API_GET = "GET";
const ARRAY_BUFFER = "arraybuffer";
import PaintState from "../painting/PaintState";
import PDFJS from "pdfjs-dist";

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

    upload (event, callback) {
        const file = event.target.files[0];
        let reader = null;
        const self = this;
        if (file != null) {
            reader = new FileReader();
            reader.onload = () => {
                let typedArray = new Uint8Array(reader.result);
                self.loadPdfFile(typedArray, callback);
            };
            reader.readAsArrayBuffer(file);
        }
    }

    loadPdfFile (data, callback) {
        const self = this;
        let c = PDFJS.getDocument(data).then(pdfDoc_ => {
            self.pdf = pdfDoc_;
            // callback(self.pdf).then(this.promise);
            callback();
        });
    }
    // //REFACTOR
    // loadPDF (data, cb) {
    //     const self = this;
    //     PDFJS.getDocument(data).then((pdfDoc_) => {
    //         self.pdf = pdfDoc_;
    //         self.renderPage(cb);
    //     });
    // }
    // uploadPDF (event, callback) {
    //     const file = event.target.files[0];
    //     const fileReader = new FileReader();
    //     fileReader.onload = () => {
    //         const typedarray = new Uint8Array(this.result);
    //         self.loadPdf(typedarray, callback);
    //     };
    //     fileReader.readAsArrayBuffer(file);
    // }
    //
    // getPDF () {
    //     return this.pdf;
    // }
    // // END
    //
    // getTotalPages () {
    //     return this.pdf.numPages;
    // }
    //
    // getCurrentPageNum () {
    //     return this.pageNum;
    // }
    // loadFileFromSource () {
    //
    // }
    // loadFile(cb) {
    //     const self = this;
    //     const xhr = new XMLHttpRequest();
    //     xhr.open(API_GET, "static" + self.currentUrl, true);
    //     xhr.responseType = 'arraybuffer';
    //     xhr.onload = (e) => {
    //         self.loadPdf(e.currentTarget.response, cb);
    //     };
    //
    //     xhr.onerror = function () {
    //         console.log("xhr error");
    //     };
    //     xhr.send();
    // }
    //
    // loadPdf(data, cb) {
    //     const self = this;
    //     PDFJS.getDocument(data).then(function (pdfDoc_) {
    //         self.pdf = pdfDoc_;
    //         self.renderPage(cb);
    //     });
    // }
    //
    // queueRenderPage(num, cb) {
    //     if (this.pageRendering) {
    //         this.pageNumPending = num;
    //     } else {
    //         this.renderPage(cb);
    //     }
    // }
    //
    // getNext(cb) {
    //     if (this.pageNum >= this.pdf.numPages) {
    //         return;
    //     }
    //     this.pageNum++;
    //     this.queueRenderPage(this.pageNum, cb);
    // }
    // getPrev (cb) {
    //     if (this.pageNum <= 1) {
    //         return;
    //     }
    //     this.pageNum--;
    //     this.queueRenderPage(this.pageNum, cb);
    // }
    //
    // updatePage(cb) {
    //     const self = this;
    //     this.pdf.getPage(this.pageNum).then(cb).then(this._promise.bind(this));
    // }
    // _promise () {
    //     this.pageRendering = false;
    //     const c = this.getContext();
    //     this.context.backgroundImage = c.canvas.toDataURL(0,0, c.canvas.width, c.canvas.height);
    //     // c.backgroundImage = c.putImageData(img, 0,0);
    //     // c.backgroundImage = c.getImageData(0,0, c.)
    //     this.context.clearContext();
    //     // this.setUpload(img);
    //     if (this.pageNumPending !== null) {
    //         // New page rendering is pending
    //         this.renderPage(cb);
    //         this.pageNumPending = null;
    //     }
    // }
    //
    // renderPage(cb) {
    //     const self = this;
    //     this.pageRendering = true;
    //     this.pdf.getPage(this.pageNum).then(cb).then(this._promise.bind(this));
    // }
    promise(cb) {
        this.pageRendering = false;
        const c = this.getContext();
        this.context.backgroundImage = c.canvas.toDataURL(0, 0, c.canvas.width, c.canvas.height);
        this.context.clearContext();
        if (this.pageNumPending !== null) {
            // this.renderPage(cb);
            this.pageNumPending = null;
        }
    }
}

export default PDF_Model;