
class Controller {
    constructor(props = {}) {
        this.model = props.model;
    }


    getModel() {
        return this.model;
    }
}

export default Controller;