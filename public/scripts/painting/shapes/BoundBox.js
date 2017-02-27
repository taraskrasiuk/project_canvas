

// import Recangle from "./Rectangle";

class BoundBox {

    constructor({x, y, ctx}) {
        this.h = 6;
        this.w = 6;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.strokeStyle = "#5a5a5a";
        this.lineWidth = 6;
    }

    draw () {
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeRect(this.x, this.y, this.w, this.h);
    }

    contains (pos) {
        const {x, y} = pos;
        return (
            this.x <= x && this.x + this.w >= x &&
            this.y <=y && this.y + this.h >= y

        );
    }
}

export default BoundBox;