import $ from "jquery";
import {
    ELEMENT_CANVAS
} from "../Constants";


let url = "ng-book.pdf";
// url = "https://drive.google.com/file/d/0B650xTmUSUQYM2pWbm9ud3ZCTWc/view?usp=sharing";
class PDFView {

    constructor(props = {}) {
        this._id = "pdf-canvas";
        this.url = props.url || url;

    }

    setUrl (url) {
        this.url = url;
        return this;
    }

    init (elementId) {
        const element = $(elementId);
        element.append(this.render());
        // element.append(this.renderIframe());
        this.loadFile();
        return element
    }

    loadFile () {
        const self = this;
        var xhr = new XMLHttpRequest();

        xhr.open('GET', this.url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function(e) {
            //binary form of ajax response,
            self.prparePDF(e.currentTarget.response);
        };

        xhr.onerror = function  () {
            // body...
            alert("xhr error");
        };

        xhr.send();
    }

    prparePDF (data) {

        PDFJS.getDocument(data)
            .then(pdf => {
                return pdf.getPage(1);
            })
            .then(page => {
                // Set scale (zoom) level
                var scale = 1.5;

                // Get viewport (dimensions)
                var viewport = page.getViewport(scale);

                // Get canvas#the-canvas
                var canvas = document.getElementById(this._id);

                // Fetch canvas' 2d context
                var context = canvas.getContext('2d');

                // Set dimensions to Canvas
                canvas.height = 480;
                canvas.width = 640;

                // Prepare object needed by render method
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };

                // Render PDF page
                page.render(renderContext);
            })
    }

    getPDFCanvas () {
        const pdfCanvas = $(ELEMENT_CANVAS, {
            "id": this._id
        });

        return pdfCanvas;
    }
    render () {
        const wrapper = $("")
        return this.getPDFCanvas();
    }
}

export default PDFView;