// import $ from "jquery";
import DropDownOption from "./DropDownOption";
// import {
//   ELEMENT_SELECT
// } from "../../../Constants";


class DropDownTool {
  constructor(props = {}) {
    const {selected, callback, className, items} = props;
    this.selected = selected;
    // this.className = className;
    this.items = items.map((op, idx) => {
      return new DropDownOption({label: op, value: op, className: "tool-select_option", isSelected: (op == this.selected ? true : false)});
    });
    // this.callback = callback;
  }
  // handleChange (e) {
  //   const el = e.currentTarget;
  //   this.selected = el.value;
  //   this.callback(el.value);
  // }
  // render () {
  //   const dd = $(ELEMENT_SELECT, {
  //     "class": this.className,
  //     "value": this.selected
  //   }).on("change", this.handleChange.bind(this));
  //   const items = this.items.map(op => {
  //     return op.render();
  //   });
  //   dd.append(items);
  //   return dd;
  // }
}

export default DropDownTool;
