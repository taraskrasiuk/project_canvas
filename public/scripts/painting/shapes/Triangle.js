import Shape from "./Shape";

class Triangle extends Shape {
    constructor({x,y,w,h,ctx, strokeStyle, lineWidth, fillStyle, globalAlpha, shadowBlur, shadowColor, fill}) {
        super({x,y,w,h,ctx, strokeStyle, lineWidth, fillStyle, globalAlpha, shadowBlur, shadowColor, fill});
        this.isBounded = false;
        this.sides = 3;
        this.pathes = this.getPath();
    }

    getPath () {
        const arr = [];
        arr.push([(this.x + this.w), this.y]);
        arr.push([(this.x + this.w/2), (this.y + this.h)]);
        arr.push([this.x, this.y]);
        return arr;
    }

    draw () {
        this.pathes = this.getPath();
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.globalAlpha = this.globalAlpha;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.shadowBlur = this.shadowBlur;
        this.ctx.shadowColor = this.shadowColor;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        for(let i of this.pathes) {
            this.ctx.lineTo(i[0], i[1]);
        }
        this.ctx.closePath();
        if (this.fill) {
            this.ctx.fill();
        } else {
            this.ctx.stroke();
        }



        if(this.isBounded) {
            this.boundBoxes = [];
            this.getBoundBox();
            this.drawBoundBox();
        }
    }

    contains ({x,y}) {
        return pnpoly(3, this.pathes.map(p => p[0]), this.pathes.map(p => p[1]), x, y);
    }
}

function pnpoly( nvert, vertx, verty, testx, testy ) {
    var i, j, c = false;
    for( i = 0, j = nvert-1; i < nvert; j = i++ ) {
        if( ( ( verty[i] > testy ) != ( verty[j] > testy ) ) &&
            ( testx < ( vertx[j] - vertx[i] ) * ( testy - verty[i] ) / ( verty[j] - verty[i] ) + vertx[i] ) ) {
            c = !c;
        }
    }
    return c;
}

export default Triangle;