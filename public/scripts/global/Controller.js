
class Controller {
    constructor(props = {}) {
        this.model = null;
        this.view = null;
    }

    setModel(m) {
        this.model = m;
    }

    getView () {
        if (this.view == null) {
            throw new Error("Expected controller has view, but view is null.");
        }
        return this.view;
    }

    setView (v) {
        this.view = v;
    }
}

export default Controller;