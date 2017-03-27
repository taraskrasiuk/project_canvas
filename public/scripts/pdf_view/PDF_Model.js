const API_GET = "GET";
const ARRAY_BUFFER = "arraybuffer";
import PaintState from "../painting/PaintState";
import PDFJS from "pdfjs-dist";

class PDF_Model extends PaintState{
    constructor(props = {}) {
        super({canvas: props.canvas, context: props.context, width: props.width, height: props.height});

        // this.filesUrl = props.files.length > 0 ? props.files : ["ng-book.pdf"];

        this.currentUrl = "/ng-book.pdf";

        this.pageRendering = false;
        this.pageRendering = null;
        this.scale = 1;

        this.pdf = null;
        this.pageNum = 1;
    }

    loadPDF (data, cb) {
        const self = this;
        let c = PDFJS.getDocument(data).then(pdfDoc_ => {
            self.pdf = pdfDoc_;
            // callback(self.pdf).then(this.promise);
            cb();
        });
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