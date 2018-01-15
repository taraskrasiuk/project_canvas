import MvcUtils from "./MvcUtils";
import IMvcProps from "./IMvcProps";

class Module extends IMvcProps{
    constructor(id, name) {
        super(id, name);
        this.controller = null;
        this.model = null;
        this.view = null;
    }

    setView (view = {}) {
        if (MvcUtils.isView(view)) {
            this.view = view;
        }
    }

    setModel (model = {}) {
        if (MvcUtils.isModel(model)) {
            this.model = model;
        }
    }

    setController (ctrl = {}) {
        if (MvcUtils.isController(ctrl)) {
            this.controller = ctrl;
        }
    }

    init (model, view, controller) {
        let check = false;
        if (MvcUtils.validateMvc(this.model, this.view, this.controller)) {
            check = true;
        }
        if (!check && MvcUtils.validateMvc(model, view, controller)) {
            this.model = model;
            this.view = view;
            this.controller = controller;
            check = true;
        }
        if (check) {
            this._setViewRef();
            this._setControllerRef();
            this._logAllOk();
            this.validateModule();

        }
    }
    _logAllOk () {
        const _str = "Module " + this.getName() + " " + " and with id: " + this.getId();
        console.log(_str + ". Initialization success. All checks paths. ");
        console.log(_str + ". Added model " + this.model.getName() + " with id: " + this.model.getId());
        console.log(_str + ". Added view " + this.view.getName() + " with id: " + this.view.getId());
        console.log(_str + ". Added controller " + this.controller.getName() + " with id: " + this.controller.getId());
    }
    _setControllerRef () {
        this.controller.setModel(this.model);
        this.controller.setView(this.view);
    }

    _setViewRef () {
        this.view.setController(this.controller);
    }

    validateModule () {
        let check = false;
        try {
            check = MvcUtils.validateMvc(this.model, this.view, this.controller)
                && MvcUtils.validateMvcRef(this.model, this.view, this.controller);
        } catch (e) {
            check = false;
            throw new Error(e, + " module validation failed. " + this.getName());
        }
        if (check) {
            console.log("Module was successfully build. " + this.getName());
        }
        return check;
    }
}

export default Module;