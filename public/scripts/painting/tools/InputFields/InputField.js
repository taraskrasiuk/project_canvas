import $ from "jquery";
import {
  ELEMENT_LABEL,
  CSS_TOOL_LABEL
} from "../../../Constants";

class InputField {
  constructor(props = {}) {
    const {name, value, className, callback} = props;
    this.name = name;
    this.callback = callback;
    this.value = value;
    this.className = className;
  }

  getLabel (inputElement) {
    const label =  $(ELEMENT_LABEL, {
			"text": this.name,
			"class": CSS_TOOL_LABEL,
      "for": this.name
		}).append(inputElement);
    return label;
  }
}

export default InputField;
