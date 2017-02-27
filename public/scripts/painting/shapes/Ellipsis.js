import Shape from "./Shape";

class Ellipsis extends Shape {
    constructor({x, y, w, h, ctx, strokeStyle, lineWidth, fillStyle, globalAlpha, shadowBlur, shadowColor, fill}) {
        super({x, y, w, h, ctx, strokeStyle, lineWidth, fillStyle, globalAlpha, shadowBlur, shadowColor, fill});
        this.isBounded = false;
    }

    draw () {
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.globalAlpha = this.globalAlpha;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.shadowBlur = this.shadowBlur;
        this.ctx.shadowColor = this.shadowColor;
        this.ctx.beginPath();
        this.ctx.arc(this.x + Math.abs(this.w / 2), this.y + Math.abs(this.h / 2), Math.abs(this.w / 2), 0, 2 * Math.PI, false);
        if (this.fill) {
            this.ctx.fill();
        } else {
            this.ctx.stroke();
        }
        this.ctx.closePath();
        if (this.isBounded) {
            this.boundBoxes = [];
            this.getBoundBox();
            this.drawBoundBox();
        }
    }

    contains (pos) {
        const {x, y} = pos;
        var dx = x - (this.x + Math.abs(this.w / 2)),
            dy = y - (this.y + Math.abs(this.w / 2)),
            dist = Math.abs(Math.sqrt(dx*dx + dy*dy));
        return (
            dist <= (this.w / 2 )
        );
    }
}

export default Ellipsis;