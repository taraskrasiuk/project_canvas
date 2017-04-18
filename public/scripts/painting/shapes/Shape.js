import BoundBox from "./BoundBox";
import PaintObject from "./PaintObject";

class Shape extends PaintObject {
    constructor({x, y, w, h, ctx, strokeStyle, lineWidth, fillStyle, globalAlpha, shadowBlur, shadowColor, fill, type}) {
        super({x,y, ctx, type});
        this.w = w;
        this.h = h;

        this.strokeStyle = strokeStyle;
        this.lineWidth = lineWidth;
        this.fillStyle = fillStyle;
        this.globalAlpha = globalAlpha;
        this.fill = fill; // bool
        this.shadowColor = shadowColor;
        this.shadowBlur = shadowBlur;

        /*
         Bound box ( Rectangle )
         used to resize Shape
         by default size 4
         */
        this.boundWidth = 6;
        this.boundHeight = 6;
        this.boundSize = 4;
        this.boundBoxes = [];
    }



    setW(newW) {
        this.w = Math.abs(newW);
        return this;
    }

    setH(newH) {
        this.h = Math.abs(newH);
        return this;
    }

    log() {
        console.log("SHAPE: \n" + "x: " + this.x, +"\n" + "y: " + this.y);
    }

    getBoundBox(options) {
        const positions = {
            topLeft: [this.x - (this.boundWidth / 2), this.y - (this.boundHeight / 2)],
            topRight: [this.x + this.w - (this.boundWidth / 2), this.y - (this.boundHeight / 2)],
            bottomLeft: [this.x - (this.boundWidth / 2), this.y + this.h - (this.boundHeight / 2)],
            bottomRight: [this.x + this.w - (this.boundWidth / 2), this.y + this.h - (this.boundHeight / 2)]
        };

        Object.keys(positions).forEach(pos => {
            const props = {
                x: positions[pos][0],
                y: positions[pos][1],
                w: this.boundWidth,
                h: this.boundHeight,
                ctx: this.ctx
            };
            this.boundBoxes.push(new BoundBox(props));
        });
        return this.boundBoxes;
    }

    drawBoundBox() {
        if (this.boundBoxes.length === 0) {
            this.getBoundBox();
        }
        this.boundBoxes.forEach(box => box.draw());
    }

    clearBoundBox() {
        this.boundBoxes.forEach(box => box.clear());
        this.boundBoxes = [];
    }

    clear() {
        this.ctx.clearRect(this.x, this.y, this.w, this.h);
        if (this.boundBoxes.length > 0) {
            for (let b of this.boundBoxes) {
                b.clear();
            }
        }
        this.boundBoxes = [];
    }

    getSelecedBoundedBox(pos) {
        if (this.boundBoxes.length > 0) {
            for (let i = 0; i < this.boundBoxes.length; i++) {
                if (this.boundBoxes[i].contains(pos)) {
                    return {
                        box: this.boundBoxes[i],
                        index: i
                    };
                }
            }
        }
    }
}
export default Shape;
