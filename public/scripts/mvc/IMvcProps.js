import Utils from "../utils/Utils";

class IMvcProps {
    constructor(id, name) {
        this._id = id || Utils.getId();
        if (!name) {
            throw new Error(e, "Please path argument *NAME* to props" + " " + this);
        }
        this._name = name;
    }

    getId () {
        return this._id;
    }

    getName () {
        return this._name;
    }

    getConstructor () {
        return this.constructor;
    }

    isEqueals(mvcProps) {
        return this._id === mvcProps._id
        && this._name === mvcProps._name
        && this === mvcProps;
    }
}

export default IMvcProps;