import PaintObject from "./PaintObject";
import Shape from "./Shape";

class Text extends  PaintObject {
    constructor(props = {}) {
        super(props);
        this.text = props.text || "";
        this.font = props.font || 12;
        this.measureText = {};
        this.fill = !!props.fillShape;
        this.strokeStyle = props.strokeStyle;
    }
    setText(t) {
        this.text = t;
    }

    contains ({x,y}) {
        return false;
    }

    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.measureText = this.text;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.font = this.font + "px sans-serif";
        if (this.fill) {
            this.ctx.fillText(this.text, this.x, this.y);
        } else {
            this.ctx.strokeText(this.text, this.x, this.y);
        }
        this.ctx.closePath();
        this.ctx.restore();
    }
}

export default Text;