import Path from "./Path";

class Brush extends Path {
    constructor(props) {
        super(props);
    }
    draw () {

        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.globalAlpha = this.globalAlpha;
        this.ctx.shadowBlur = this.shadowBlur;
        this.ctx.shadowColor = this.shadowColor;
        this.ctx.lineJoin = this.ctx.lineCap = 'round';
        this.ctx.shadowBlur = this.shadowBlur;
        this.ctx.shadowColor = this.strokeStyle;
        this.ctx.moveTo(this.x, this.y);
        this.ctx.globalCompositeOperation = 'source-over';

        for(let i = 0; i < this.paths.length; i+=2) {
            this.ctx.lineTo(this.paths[i], this.paths[i + 1]);
        }
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
        
    }
    contains () {
        return false;
    }
}
export default Brush;