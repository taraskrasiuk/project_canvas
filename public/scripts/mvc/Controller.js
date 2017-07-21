import MvcUtils from "./MvcUtils";
import IMvcProps from "./IMvcProps";

class Controller extends IMvcProps{
    constructor(id, name) {
        super(id, name);
        this._view = null;
        this._model = null;
    }

    setView (view) {
        this._view = view;
    }

    getView () {
        return this._view;
    }

    getModel () {
        return this._model;
    }

    setModel (model) {
        this._model = model;
    }
}
export default Controller;