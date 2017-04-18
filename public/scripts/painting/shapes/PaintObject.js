import Utils from "../../utils/Utils";

class PaintObject {
    constructor (props = {}) {
        const {x, y, ctx, type} = props;
        this._id = Utils.getId(x, y);
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this._type = type;

    }

    setX (newX) {
        this.x = newX;
        return this;
    }

    setY (newY) {
        this.y = newY;
        return this;
    }

    updatePosition ({x, y}) {
        this.x = x;
        this.y = y;
        return this;
    }
}

export default PaintObject;