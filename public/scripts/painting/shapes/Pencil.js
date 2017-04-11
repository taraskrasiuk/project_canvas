import Path from "./Path";

class Pencil extends Path {
    constructor(props) {
        super(props);
    }
    draw () {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.globalAlpha = this.globalAlpha;
        this.ctx.shadowBlur = null;
        this.ctx.shadowColor = null;
        this.ctx.moveTo(this.x, this.y);
        this.ctx.globalCompositeOperation = 'source-over';

        for(let i = 0; i < this.paths.length; i+=2) {
            this.ctx.lineTo(this.paths[i], this.paths[i + 1]);
        }
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();

        const self = this;

    }
    contains () {
        return false;
    }
}
export default Pencil;