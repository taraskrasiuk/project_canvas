import Canvas_Context from "../board/Canvas_Context";
import ShapesHolder from "./ShapesHolder";
import io from "socket.io-client";

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
        this.FPS = 60;

        const self = this;


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
    }
    recStart () {
        this.socketRecord.startRecord();
    }
    recStop () {
        this.socketRecord.stopRecord();
    }

    takeSnapShot () {
        // TODO:
        return this.canvas.toDataURL("image/png");
    }

    getSnapShot (dataUrl) {

        const img = new Image();
        img.src = dataUrl;
        var context = this.context.getContext();
        this.context.clearContext();
        context.drawImage(img, 0, 0);
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
        if (this.socketRecord.isRecord) {
            this.socketRecord.sendData(this.takeSnapShot());
        }
    }
    clearAll () {
        this.holder.clearAll();
        this.context.clearAll();
    }
    updateContext(optionData) {
        this.context.update(optionData);
        console.log("PAINSTATE update:", optionData);
    }
    setBackgroundColor(val) {
        if (this.context.backgroundImage != null) {
            this.context.backgroundImage = null;
        }
        this.context.update({type: "fillStyle", value: val});
        this.context.backgroundColor = val;
        const ctx = this.getContext();
        ctx.fillRect(0, 0, this.context.width, this.context.height);
        this.draw();
    }
    setScale(val) {
        this.context.clearContext();
        this.context.update({type: "scale", value: parseFloat(val)});
        this.draw();
    }
    setUpload(img) {
        if (this.context.backgroundColor != null) {
            this.context.backgroundColor = null;
        }
        this.context.backgroundImage = img;
        this.context.clearContext();
        this.draw();
    }
    getContext() {
        return this.context.context;
    }
}

export default PaintState;