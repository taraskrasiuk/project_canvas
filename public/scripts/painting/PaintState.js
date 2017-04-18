import Canvas_Context from "../board/Canvas_Context";
import ShapesHolder from "./ShapesHolder";
import PDFJS from "pdfjs-dist";
import io from "socket.io-client";
import Rectangle from "./shapes/Rectangle";
import Triangle from "./shapes/Triangle";
import Ellipsis from "./shapes/Ellipsis";
import Pencil from "./shapes/Pencil";
import Brush from "./shapes/Brush";
import Laser from "./shapes/Laser";
import Line from "./shapes/Line";
import Text from "./shapes/Text";

class CanvasRecord {
    constructor(props = {}) {
        this.isRecord = props.record || true;
        const h = "http://localhost:";
        const self = this;
        this.props = props;
            this.socket = io();

    }

    startRecord() {
        const self = this;
        this.isRecord = true;
        this.socket.connect("http://localhost:3000");
        this.socket.emit("draw", self.props.socketEmit());
        this.socket.on("draw", (data) => {
            self.props.socketUpdate(data);
        });
    }
    stopRecord () {
        this.isRecord = false;
        this.socket.disconnect();
    }

    sendData () {
        const self = this;
        this.socket.emit("draw", self.props.socketEmit());
    }

    emitData () {

    }


}

class PaintState {
    constructor(props = {}) {
        //TODO: FPS check
        this.context = new Canvas_Context({context: props.context, width: props.width, height: props.height});
        this.holder = new ShapesHolder();
        this.selected = null;
        this.canvas = props.canvas;
        this.FPS = 40; // 1000 / 40 = 25FPS

        const self = this;

        this.currentItem = null;


        this.socketRecord = new CanvasRecord({
           record: false,
            host: "3000",
            socketUpdate: self.getSnapShot.bind(self),
            socketEmit: self.takeSnapShot.bind(self)
        });

        this.__last = null;

        this.isRecord = false;
        this.stateValid = true;
        this.stateInterval = window.setInterval(() => {
            if (!self.stateValid) {
                self.draw();
                self.stateValid = true;
                console.log("INTERVAL STARS");
            }
        }, self.FPS);


        // PDF

        this.pageRendering = false;
        this.pageRendering = null;
        this.scale = 1;

        this.pdf = null;
        this.pageNum = 1;
    }



    setTemp (t) {
        this.__last = t;
        // if (this.socketRecord.isRecord && this.__last != null) {
        //     this.socketRecord.socketEmit(JSON.stringify(this.__last));
        // }
    }
    getFromTemp (_data) {
        var parse = JSON.parse(_data);
        if (parse != null) {
            if (parse._id != null) {
                console.log(_data);
            } else {
                console.log(_data);
            }
        }
    }

    recStart () {
        this.socketRecord.startRecord();
    }
    recStop () {
        this.socketRecord.stopRecord();
    }

    takeSnapShot () {
        // TODO:
        // return this.canvas.toDataURL("image/png");
        // if (this.socketRecord.isRecord && this.__last != null) {
        //     this.socketRecord.socketEmit(JSON.stringify(this.__last));
        // }
        if (this.__last != null) {
            return JSON.stringify(this.__last);
        }
    }

    getSnapShot (dataUrl) {
        const data = JSON.parse(dataUrl);
        if (data && data._id) {

            const obj = this.holder.getShapeById(data._id);
            data.ctx = this.context.context;

            if (obj[0]) {
                this.holder.merge(data);
            } else {
                let cls;

                switch (data._type) {
                    case "Rectangle":
                        cls = new Rectangle(data);
                        break;
                    case "Triangle":
                        cls = new Triangle(data);
                        break;
                    case "Ellipsis":
                        cls = new Ellipsis(data);
                        break;
                    case "Pencil":
                        cls = new Pencil(data);
                        break;
                    case "Brush":
                        cls = new Brush(data);
                        break;
                    case "Laser":
                        cls = new Laser(data);
                        break;
                    case "Line":
                        cls = new Line(data);
                        break;
                    case "Erase":
                        cls = new Brush(data);
                        break;
                    case "Text":
                        cls = new Text(data);
                        break;

                }
                if (data.isBounded != null) {
                    cls.isBounded = data.isBounded;
                }
                cls._id = data._id;
                cls._type = data._type;
                // cls.ctx = this.getContext();

                this.holder.addShape(cls);

            }

        } else if (data && data.backgroundImage) {
            this.setUpload(data.backgroundImage, false);
        } else if (data && data.backgroundColor) {
            this.setBackgroundColor(data.backgroundColor, false);
        }
        this.draw();


        //
        //
        // const img = new Image();
        // img.src = dataUrl;
        // var context = this.context.getContext();
        // this.context.clearContext();
        // context.drawImage(img, 0, 0);
        // if (this.socketRecord.isRecord && this.__last != null) {
        //     this.socketRecord.socketEmit(JSON.stringify(this.__last));
        // }

    }

    startUpdateState () {
        const self = this;
       this.stateValid = false;
        if (this.stateInterval == null) {
            this.stateInterval = setInterval(() => {
                if (!self.stateValid) {
                    self.draw();
                    self.stateValid = true;
                    console.log("INTERVAL STARS");
                }
            }, self.FPS);
        }


    }

    stopUpdateState () {
        this.stateValid = true;
        this.stateInterval = clearInterval(this.stateInterval);
        this.stateInterval = null;
    }

    _diff(obj1, obj2) {
        var result = {};
        obj1 = Object.keys(obj1).map(o => JSON.parse(obj1[o]));
        obj2 = Object.keys(obj2).map(o => JSON.parse(obj2[o]));
        for(var key in obj1) {
            if(obj2[key] != obj1[key]) result[key] = obj2[key];
            if(typeof obj2[key] == 'array' && typeof obj1[key] == 'array')
                result[key] = this._diff(obj1[key], obj2[key]);
            if(typeof obj2[key] == 'object' && typeof obj1[key] == 'object')
                result[key] = this._diff(obj1[key], obj2[key]);
        }
        return result;
    }

    stringify () {
        var o = {
            canvasContext: this.context.stringify(),
            shapesHolder: this.holder.stringify()
        };

        return JSON.stringify(o);

    }

    show() {
        var res = this._diff(JSON.parse(o.canvasContext), JSON.parse(o.shapesHolder));
        console.log(res);
    }

    historyNext() {
        this.holder._history.next();
        this.drawWithHistory();
    }

    historyBack() {
        this.holder._history.back();
        this.drawWithHistory();
    }

    drawWithHistory() {
        this.context.clearContext();
        let shapesWithHistory = this.holder.getShapes();
        shapesWithHistory.forEach(sh => {
            if (sh == this.selected) {
                sh.isBounded = true;
            } else {
                sh.isBounded = false;
            }
            sh.draw();
        });
    }

    lastChange () {

    }

    draw() {

        // TODO: need to rebuild MVC. Should be : view -> controller; controller -> view; controller -> model

        const toolsWrapper = document.querySelector(".tools-absolute");
        if (toolsWrapper != null) {
            toolsWrapper.parentNode.removeChild(toolsWrapper);
        }

        this.holder._history.clear();
        // TODO : need to be rebuild; Too hard for every mls update

        if (this.holder._history.step != 0) {
            this.holder.shapes = this.holder.getShapes();
            this.holder._history.step = 0;
        }
        this.context.clearContext();
        this.holder.shapes.forEach(sh => {
            if (sh == this.selected) {
                sh.isBounded = true;
            } else {
                sh.isBounded = false;
            }
            sh.draw();
        });
        if (this.socketRecord.isRecord && this.__last) {
            this.socketRecord.sendData(this.takeSnapShot());
        }
    }
    clearAll () {
        this.pageRendering = false;
        this.pageRendering = null;
        this.scale = 1;

        this.pageNum = 1;
        this.pdf = null;
        this.holder.clearAll();
        this.context.clearAll();
    }
    updateContext(optionData) {
        this.context.update(optionData);
        console.log("PAINSTATE update:", optionData);
    }
    setBackgroundColor(val, bool) {
        // this.context.clearContext();
        if (this.context.backgroundImage != null) {
            this.context.backgroundImage = null;
        }
        this.context.update({type: "fillStyle", value: val});
        this.context.backgroundColor = val;
        const ctx = this.getContext();
        ctx.fillRect(0, 0, this.context.width, this.context.height);
        this.draw();
        // SOCKET EMIT ****
        if (this.socketRecord.isRecord && bool) {
            var value = {
                backgroundColor: val
            };
            this.socketRecord.socket.emit("draw", JSON.stringify(value));
        }
    }
    setScale(val) {
        this.context.clearContext();
        this.context.update({type: "scale", value: parseFloat(val)});
        this.draw();
    }
    setUpload(img, bool) {
        // this.context.clearContext();
        if (this.context.backgroundColor != null) {
            this.context.backgroundColor = null;
        }

        if (typeof img == "string") {
            let i = new Image();
            i.src = img;
            this.context.backgroundImage = i;
        } else {
            this.context.backgroundImage = img.src;
        }
        this.draw();

        if (this.socketRecord.isRecord && bool) {
            var value = {backgroundImage: this.context.backgroundImage};
            this.socketRecord.socket.emit("draw", JSON.stringify(value));
        }
        // SOCKET EMIT ****
        // this.context.clearContext();

    }
    getContext() {
        return this.context.context;
    }

    // PDF MODEL

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
}

export default PaintState;