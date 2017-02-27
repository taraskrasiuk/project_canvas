import $ from "jquery";

class View {
    constructor(props = {}) {
        this.className = props.className;
        this.active = props.active;
    }

    update (elements = []) {
        const wrapper = $("." + this.className);
        if (wrapper != null) {
            return wrapper.empty().append(elements);
        } else {
            return this.renderWrapper().append(elements);
        }
    }

    renderWrapper () {
        return $("<div></div>", {
            "class": this.className
        });
    }
}

export default View;