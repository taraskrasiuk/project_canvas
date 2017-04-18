import PaintObject from "./shapes/PaintObject";

class PaintHistory {
    constructor({max}) {
        this._shapes = [];
        this.MAX_SIZE_HISORY = max || 10;
        this.step = 0;
        this.pristine = true;
    }
    add (shape) {
        if (this._shapes.length < this.MAX_SIZE_HISORY) {
            this._shapes.push(shape);
        } else {
            this._shapes.shift();
            this._shapes.push(shape);
        }
    }
    clear () {
        for(let sh of this._shapes) {
            sh = null;
        }
        this._shapes = [];
    }
    next () {
        if (this.step > 0) {
            this.step--;
        }
    }

    back () {
        if (this.step < this.MAX_SIZE_HISORY) {
            this.step++;
        }
    }

    getLast () {
        return this._shapes[this._shapes.length - 1];
    }

    setPristine (bool) {
        this.pristine = bool;
        if (!this.pristine) {
            this._shapes = [];
        }
    }


}

class ShapesHolder {
    constructor(props = {}) {
        const {shapes} = props;
        this.shapes = shapes || [];

        this._history = new PaintHistory({
            max: 10
        });

    }

    stringify () {
        return JSON.stringify(this.shapes);
    }

    getShapes() {
        if (this.shapes.length == 1) {
            return this.shapes;
        } else {
            return this.shapes.slice(0, Math.abs(this._history.step - this.shapes.length));
        }
    }

    clearAll () {
        for(let sh of this.shapes) {
            sh = null;
        }
        this.shapes = [];
        this._history.clear();
    }

    addShape(shape) {
        if (ShapesHolder._check(shape)) {
            this.shapes.push(shape);
            this._history.add(shape);
        } else {
            console.log("SHAPE is not instance of PAINT_OBJECT");
        }
    }

    getShapeById (id) {
        return this.shapes.filter(sh => sh._id == id);
    }

    merge (newObj) {
        for(let i = 0; i < this.shapes.length; i++) {
            if (this.shapes[i]._id && this.shapes[i]._id == newObj._id) {
                let n = Object.assign(this.shapes[i], newObj);
                n.ctx = this.shapes[i].ctx;
                this.shapes[i] = n;
            }
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

