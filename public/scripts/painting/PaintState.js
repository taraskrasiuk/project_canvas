import Canvas_Context from "../board/Canvas_Context";
import ShapesHolder from "./ShapesHolder";

class PaintState {
    constructor(props = {}) {
        this.context = new Canvas_Context({context: props.context, width: props.width, height: props.height});
        this.holder = new ShapesHolder();
        this.selected = null;
    }

    historyNext () {
            this.holder._history.next();
            this.drawWithHistory();
        // else {
        //     this.holder.shapes = this.holder.getShapes();
        //     this.holder._history.step = 0;
        //     this.draw();
        // }
    }

    historyBack () {
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

    draw() {
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
            this.context.backgroundColor == null;
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