import Shape from "./Shape";

class Rectangle extends Shape{
    constructor({x,y,w,h,ctx, strokeStyle, lineWidth, fillStyle, globalAlpha, shadowBlur, shadowColor, fill, type, _id}) {
        super({x,y,w,h, ctx, strokeStyle, lineWidth, fillStyle, globalAlpha, shadowBlur, shadowColor, fill, type, _id});
        this.isBounded = false;
        if (_id) {
            this._id = _id;
        }
    }

    draw () {
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.globalAlpha = this.globalAlpha;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.shadowBlur = this.shadowBlur;
        this.ctx.shadowColor = this.shadowColor;
        this.ctx.beginPath();
        if (this.fill) {
            this.ctx.fillRect(this.x, this.y, this.w, this.h);
        } else {
            this.ctx.strokeRect(this.x, this.y, this.w, this.h);
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
        return (
            this.x <= x && this.x + this.w >= x &&
            this.y <=y && this.y + this.h >= y

        );
    }

}

export default Rectangle;