import $ from "jquery";
import InputField from "./InputField";
import {
  ELEMENT_INPUT
} from "../../../Constants";

class ColorInputField extends InputField {
  constructor(props = {}) {
    super(props);
    this._type = "color";

  }

  render (callback) {
    const self = this;
    const color = $(ELEMENT_INPUT, {
			"class": "tool-color",
			"type": this._type,
			"value": this.value,
			"name": this.name,
      "id": this.name
		}).on("change", (e) => {
		    self.value = e.target.value;
            callback(self);
    });
		return this.getLabel(color);
  }
}
export default ColorInputField;
