import $ from "jquery";
import InputField from "./InputField";
import {
    ELEMENT_INPUT
} from "../../../Constants";

class CheckBoxFiled extends InputField {
    constructor(props = {}) {
        super(props);
        const {min, max, step} = props;
        this.isChecked = props.false;
        this._type = "checkbox";

    }
    render (callback) {
        const self = this;
        const check = $(ELEMENT_INPUT, {
            "class": this.className,
            "type": this._type,
            "checked": this.isChecked
        }).on("change", (e) => {
            self.value = e.target.checked;
            callback(self);
        });
        return this.getLabel(check);
    }
}

export default CheckBoxFiled;
