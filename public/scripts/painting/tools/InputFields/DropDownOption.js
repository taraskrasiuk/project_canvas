import $ from "jquery";
import {
  ELEMENT_OPTION
} from "../../../Constants";

class DropDownOption {
  constructor(props = {}) {
    const {label, value, className, isSelected} = props;
    this.value = value;
    this.label = label;
    this.className = className;
    this.isSelected = isSelected;
  }
  render () {
    const option = $(ELEMENT_OPTION, {
      value: this.value,
      "class": this.className,
      text: this.label
    });
    if (this.isSelected) {
      option.attr("selected", true);
    }
    return option;
  }
}
export default DropDownOption;
