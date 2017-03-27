import Path from "./Path";

class Line extends Path {
    constructor(props = {}) {
        super(props);
    }

    contains ({x,y}) {
        return false;
    }

    drawArrow(x,y, rot) {
        var w =25, h=25;
        this.ctx.save();
        this.ctx.beginPath();

        var _x = (x * Math.cos(rot)) - (y * Math.sin(rot));
        var _y = (x * Math.sin(rot)) + (y * Math.cos(rot));
        var number = Math.atan2(this.y - y, this.x - x) * 180 / Math.PI;
        this.ctx.translate(x,y);
        this.ctx.rotate(rot*180/Math.PI);
        // this.ctx.moveTo(0,0);
        // this.ctx.lineTo( 0, -h);
        // this.ctx.lineTo( w, 0);
        // this.ctx.lineTo( 0, +h);
        // this.ctx.moveTo(0,0);
        this.ctx.moveTo(0,0);
        this.ctx.lineTo( 0, -h);
        this.ctx.lineTo( w, 0);
        this.ctx.lineTo( 0, h);
        // this.ctx.lineTo(0+w,0+h/2);
        // this.ctx.lineTo(0+w,0);
        // this.ctx.lineTo(0+w/2,0+(h/2));
        // this.ctx.lineTo(0,0);
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

        // let rot = Math.atan((this.paths[1]-this.y)/(this.paths[0]-this.x));
        //
        // var endRadians=Math.atan((this.paths[1]-this.y)/(this.paths[0]-this.x));
        // endRadians+=((this.paths[0]>this.x)?-90:90)*Math.PI/180;
        //
        //
        // var startRadians=Math.atan((this.y2-this.y1)/(this.x2-this.x1));
        // startRadians+=((this.x2>this.x1)?-90:90)*Math.PI/180;
        //

        this.ctx.restore();
        // this.drawArrow(this.paths[0], this.paths[1], endRadians);
    }
}

export default Line;