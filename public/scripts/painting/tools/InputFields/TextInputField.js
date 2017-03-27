import $ from "jquery";
import InputField from "./InputField";
import {
    ELEMENT_INPUT
} from "../../../Constants";

class TextInputField extends InputField {
    constructor(props = {}) {
        super(props);
        this._type = "text"
    }

    render (callback) {
        const self = this;
        const input = $(ELEMENT_INPUT, {
            "class": "tool-" + this._type,
            type: this._type,
            value: this.value
        }).on("input", (e) => {
            self.value = e.target.value;
            callback(self);
        });
        return this.getLabel(input);
    }


}

export default TextInputField;