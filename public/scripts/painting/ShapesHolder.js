import PaintObject from "./shapes/PaintObject";

class ShapesHolder {
    constructor(props = {}) {
        const {shapes} = props;
        this.shapes = shapes || [];

        this.MAX_SIZE_HISTORY = 10;
        this._history = [];

    }

    addShape(shape) {
        if (ShapesHolder._check(shape)) {
            this.shapes.push(shape);
            if (this._history.length < this.MAX_SIZE_HISTORY) {
                this._history.push(shape);
            } else {
                this._history.shift();
                this._history.push(shape);
            }
        } else {
            console.log("SHAPE is not instance of PAINT_OBJECT");
        }
    }

    pop() {
        this.shapes.pop();
    }

    historyPop() {
        this._history.pop();
        this.shapes.pop();
    }

    getShape(sh) {
        if (ShapesHolder._check(sh)) {
            const index = this.shapes.indexOf(sh);
            return index != -1 ? index : -1;
        } else {
            return -1;
        }

    }

    getShapeFromPosition({x, y}) {
        if (this.shapes.length > 0) {
            const filtered = this.shapes.filter(sh => {
                return sh.contains({x, y}) || (!sh.contains({x,y}) && (sh.getSelecedBoundedBox != null && sh.getSelecedBoundedBox({x,y}) != null));
            });
            if (filtered.length > 0) {
                // if filtered > 1, get last
                return filtered[filtered.length - 1];
            } else {
                console.log("SOMETHING wrong in getShapeFromPosition !!");
            }
        } else {
            return null;
        }
    }

    static _check(sh) {
        return !!(sh != null && sh instanceof PaintObject);
    }
}

export default ShapesHolder;

