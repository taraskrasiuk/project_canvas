import Path from "./Path";

class Laser extends Path {
    constructor(props) {
        super(props);
    }
    draw () {
        // this.ctx.save();
        // this.ctx.beginPath();
        // this.ctx.strokeStyle = this.strokeStyle;
        // this.ctx.lineWidth = this.lineWidth;
        // this.ctx.globalAlpha = this.globalAlpha;
        // this.ctx.shadowBlur = null;
        // this.ctx.shadowColor = null;
        // this.ctx.moveTo(this.x, this.y);
        // this.ctx.globalCompositeOperation = 'source-over';
        //
        // for(let i = 0; i < this.paths.length; i+=2) {
        //     this.ctx.lineTo(this.paths[i], this.paths[i + 1]);
        // }
        // this.ctx.stroke();
        // this.ctx.closePath();
        // this.ctx.restore();
        //
        drawCurve(this.ctx, this.paths);

        // const self = this;

    }
    contains () {
        return false;
    }
}


function drawCurve(ctx, pts) {
    ctx.beginPath();

    drawLines(ctx, pts);

    ctx.restore();
}

function scale(unit, max, current) {
    return unit * current / max;
}

function drawLines(ctx, ppts) {
    ctx.moveTo(ppts[0], ppts[1]);

    var length = ppts.length - 3;
    for (var i = 0; i < length; i += 2) {
        var c = (ppts[i] + ppts[i+2]) / 2;
        var d = (ppts[i+1] + ppts[i+3]) / 2;

        // var red = Math.floor(maxCologGB - scale(minColorGB, length, i));
        ctx.strokeStyle = "#ff0000";
        // var width = Math.floor(scale(maxWidth, length, i + 1));
        // if (i === 0) {
        //     width = 1;
        // } else if (i === 2) {
        //     width = 2;
        // }
        // if (i === length - 1) {
        //     width -= 1;
        // }

        ctx.lineWidth = 5;
        ctx.quadraticCurveTo(ppts[i], ppts[i+1], c, d);
        // console.log("length: " + length + ", i: " + i + ", width: " + width);
    }
    ctx.stroke();
}
export default Laser;