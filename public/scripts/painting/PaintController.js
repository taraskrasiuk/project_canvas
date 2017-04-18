import {
    EraseControl,
    BackgroundControl,
    ShapeControl,
    BrushControl,
    SelectControl,
    TextControl,
    LinesControl
} from "./paint-controls/PaintControls"
import Controller from "../global/Controller";

const prepare = (canvas, scaleFactor) => {
    if (!canvas.style.width)
        canvas.style.width = canvas.width + 'px';
    if (!canvas.style.height)
        canvas.style.height = canvas.height + 'px';

    canvas.width = Math.ceil(canvas.width * scaleFactor);
    canvas.height = Math.ceil(canvas.height * scaleFactor);
    var ctx = canvas.getContext('2d');
    ctx.scale(scaleFactor, scaleFactor);
    return ctx;
};

class PaintController extends Controller{
    constructor(props = {}) {
        super({model: new props.modelConstructor({context: props.canvas.getContext("2d"),
            canvas:props.canvas,
            width: props.canvas.width,
            height: props.canvas.height
        }),
            view: props.view
        });
        this.props = props;
        this.selectedTool = null;
        this.startPositions = {};
        this.updatedPositions = {};

        this.controls = {};
        this.activeControl = null;

        // PDF

        this.ctx = props.ctx;
        this.canvas = props.canvas;
        this.scale = 1;
        this.currentPage = 1;
        this.totalPages = 0;
        this.pageRendering = false;
        this.pageNumPending = null;
    }

    handlePDFUpload (data) {
        this.uploadFile(data);
    }

    handleImageUpload (e) {
        const self = this;
        const reader = new FileReader();
        const img = new Image();
        // reader.onload = (e) => {
        //     img.onload = () => {
        //
        //     };
        // };
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = (e) => {
            img.src = e.target.result;
            // cb({name: self.name, value: img});
            this.model.setUpload(img, true);

        }
    }

    startRecordDraw () {
        this.model.recStart();
    }

    stopRecordDraw () {
        this.model.recStop();
    }

    prepare (canvas, scaleFactor) {
        if (!canvas.style.width)
            canvas.style.width = canvas.width + 'px';
        if (!canvas.style.height)
            canvas.style.height = canvas.height + 'px';

        canvas.width = Math.ceil(canvas.width * scaleFactor);
        canvas.height = Math.ceil(canvas.height * scaleFactor);
        var ctx = canvas.getContext('2d');
        ctx.scale(scaleFactor, scaleFactor);
        return ctx;
    }

    historyNext () {
        this.model.historyNext();
    }

    historyBack () {
        this.model.historyBack();
    }

    getControl() {
        return this.control;
    }

    _checkExistingControl(type) {
        return this.controls[type] != null;
    }

    clearAll () {
        this.model.clearAll();
    }

    setControl(tool) {
        var type = tool.name;
        if (this._checkExistingControl(type)) {
            this.activeControl = this.controls[type];
            return this.activeControl;
        } else {
            const props = {type: type, model: this.model, tool: tool};
            switch (type) {
                case "shapes" :
                    this.controls[type] = new ShapeControl(props);
                    break;
                case "brush" :
                    this.controls[type] = new BrushControl(props);
                    break;
                case "laser" :
                    this.controls[type] = new BrushControl(props);
                    break;
                case "background" :
                    this.controls[type] = new BackgroundControl(props);
                    break;
                case "erase" :
                    this.controls[type] = new EraseControl(props);
                    break;
                case "select":
                    this.controls[type] = new SelectControl(Object.assign(props, {
                        canvas: this.props.canvas
                    }));
                    break;
                case "text" :
                    this.controls[type] = new TextControl(props);
                    break;
                case "line" :
                    this.controls[type] = new LinesControl(props);
                    break;

                default:
                    break;
            }
            this.activeControl = this.controls[type];
        }
    }

    handleTool(tool) {
        this.selectedTool = tool;
        this.setControl(tool);
        console.log("PAINT CONTROLLER: handleTool: ", tool);
    }

    handleOptionTool(dataOption) {
        console.log(this.activeControl);
        this.activeControl.update(dataOption);
        console.log("PAINT CONTROLLER: handleOptionChange: ", dataOption);

    }

    getSelectedTool() {
        return this.selectedTool;
    }

    setStartPositions({x, y}) {
        this.startPositions.x = x;
        this.startPositions.y = y;
        console.log("PAINT CONTROLLER: startPosition: " + this.startPositions);
        if (this.activeControl != null && this.activeControl.listenersOn) {
            this.activeControl.onMouseDown(this.startPositions);
        }
    }

    setUpdatedPositions({x, y}) {
        this.updatedPositions.x = x;
        this.updatedPositions.y = y;
        console.log("PAINT CONTROLLER: updatedPositions: " + this.updatedPositions);
        if (this.activeControl != null && this.activeControl.listenersOn) {
            this.model.selectedItem =
            this.activeControl.onMouseMove(this.updatedPositions);
        }
    }
    handleMouseUp({x,y}) {
        if (this.activeControl != null && this.activeControl.listenersOn) {
            this.activeControl.onMouseUp(this.updatedPositions);
        }
    }


    setSelectTool(tool) {
        this.selectedTool = tool;
    }




    // PDF CONTROLLER
    _getPropsFileProps () {
        return {
            totalPages: this.model.pdf.numPages,
            currentPage: this.currentPage,
            fileName: this.model.pdf
        }
    }

    uploadFile (e) {
        this.model.upload(e, this.renderPage.bind(this));
    }

    static _getViewport (page, canvas, scale) {
        // TODO: need to rewrite
        const viewport = page.getViewport(scale);
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
        // this.model.pdf = null;
        this.model.context.clearContext();
    }
    _image (p) {
        const self = this;
        const _p = new Promise((res, rej) => {
            self.pageRendering = false;
            // self.updateViewCallback(self._getPropsFileProps());
            self.view.update(self._getPropsFileProps());
            if (self.pageNumPending !== null) {
                self.renderPage();
                self.pageNumPending = null;
            }
            res({})
        });
        _p.then(p => {
            console.log(p);
            // const c = self.model.getContext();
            self.model.setUpload(self.model.canvas.toDataURL(), true);
        })
    }
    renderPage() {
        this.pageRendering = true;
        const self = this;
        self.model.pdf.getPage(self.currentPage).then(page => {
            const offset = PaintController._calcCanvasOffset();
            self.canvas.width = offset.w;
            self.canvas.height = offset.h;

            const viewport = PaintController._getViewport(page, self.canvas, self.scale);

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
export default PaintController;