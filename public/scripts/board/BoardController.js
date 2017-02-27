import Controller from "../global/Controller";

class BoardController extends Controller{
    constructor(props = {}) {
        super (props);
        this.currentView = null;
    }

    getCurrentView () {
        return this.currentView;
    }

    setCurrentView (type) {
        const t = this.model.getView(type);
        if (t != null) {
            this.currentView = t;
        }
        return this;
    }
}

export default BoardController;