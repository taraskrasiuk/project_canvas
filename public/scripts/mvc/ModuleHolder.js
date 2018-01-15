import MvcUtils from "./MvcUtils";
class ModuleHolder {
    static instance;
    constructor() {
        if (ModuleHolder.instance) {
            return ModuleHolder.instance;
        }
        this._id = 1;
        this._moduleHolder = [];
        ModuleHolder.instance = this;
    }

    size () {
        return this._moduleHolder.length;
    }

    addModule (module = {}) {
        if (!this.contains(module)) {
            this._moduleHolder.push(module);
        }
    }

    removeModule (module = {}) {
        if (this.contains(module)) {
            this._moduleHolder = this._moduleHolder.filter(m => !(m.moduleId === module.moduleId && m === module));
        } else {
            throw new Error(e, "Can not remove module. " + module);
        }
    }

    contains (module) {
        if (MvcUtils.isModule(module)) {
            return !!this.getModule(module.moduleId)[0];
        } else {
            throw new Error(e, "Check module contains() failed. " + module);
        }
    }

    getModule(moduleId) {
        return this._moduleHolder.filter(model => model.moduleId === moduleId);
    }

}
export default ModuleHolder;