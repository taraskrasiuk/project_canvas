import View from "./View";
import Controller from "./Controller";
import Model from "./Model";
import Module from "./Module";

class MvcUtils {
    static isView (view) {
        return view instanceof View;
    }

    static isController (ctrl) {
        return ctrl instanceof Controller;
    }

    static isModel (model) {
        return model instanceof Model;
    }

    static isModule (module) {
        return module instanceof Module;
    }

    static validateMvc (model, view, controller) {
        return MvcUtils.isModel(model) && MvcUtils.isView(view) && MvcUtils.isController(controller);
    }

    static validateMvcRef (model, view, controller) {
        return view.getController() === controller
            && controller.getView() === view
            && controller.getModel() === model;
    }
}

export default MvcUtils;