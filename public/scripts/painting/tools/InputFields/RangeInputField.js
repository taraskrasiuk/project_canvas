import $ from "jquery";
import InputField from "./InputField";
import {
  ELEMENT_INPUT
} from "../../../Constants";

class RangeInputField extends InputField {
  constructor(props = {}) {
    super(props);
    const {min, max, step} = props;
    this.min = min;
    this.max = max;
    this.step = step;
    this._type = "range";

  }
  render (callback) {
      const self = this;
    const range = $(ELEMENT_INPUT, {
			"class": "tool-" + this._type,
			"type": this._type,
			"min": this.min,
			"max": this.max,
			"step": this.step,
            "value": this.value,
            "id": this.name,
		}).on("change", (e) => {
		    self.value = e.target.value;
            callback(self);
    });
		return this.getLabel(range);
  }
}

export default RangeInputField;
