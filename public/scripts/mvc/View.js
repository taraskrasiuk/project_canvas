import IMvcProps from "./IMvcProps";

class View extends IMvcProps{
    constructor(id, name) {
        super(id, name);
        this._controller = null;
    }

    setController (ctrl) {
        this._controller = ctrl;
    }

    getController () {
        return this._controller;
    }
}

export default View;