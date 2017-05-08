import Path from "./Path";

class Line extends Path {
    constructor(props = {}) {
        super(props);
    }

    contains ({x,y}) {
        return false;
    }

    drawArrow(x,y, rot) {
        var w =10, h=10;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(x,y);
        this.ctx.rotate(rot);
        this.ctx.moveTo(0,0);
        this.ctx.lineTo( 0, -h);
        this.ctx.lineTo( w, 0);
        this.ctx.lineTo( 0, h);
        this.ctx.closePath();
        this.ctx.restore();
        this.ctx.fill();
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
        this.ctx.lineTo(this.paths[0], this.paths[1]);
        this.ctx.stroke();
        this.ctx.closePath();

        let rot = Math.atan((this.paths[0]-this.x)/(this.paths[1]-this.y));
        var endRadians=Math.atan((this.paths[1]-this.y)/(this.paths[0]-this.x));
        // endRadians+=((this.paths[0]>this.x)?-90:-180)*Math.PI/45;
        this.ctx.restore();
        this.drawArrow(this.paths[0], this.paths[1], (Math.atan2(this.x - this.paths[0], this.y - this.paths[1]) * 180/Math.PI));
    }
}

export default Line;