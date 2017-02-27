import $ from "jquery";
import {
  ELEMENT_DIV,
  TOOLS_GROUP_COLORS,
  TOOLS_GROUP_TRANSFORMS
} from "../Constants.js";
import DropDownTool from "../painting/tools/InputFields/DropDownTool";
import ToolsSet from "./ToolsSet";
import ColorInputField from "../painting/tools/InputFields/ColorInputField";
import RangeInputField from "../painting/tools/InputFields/RangeInputField";
import SelectedSets from "./SelectedSets";


class CTools {
  constructor(props = {}) {
    const {toolsSets, selectTool, callback} = props;
    this.toolsSets = toolsSets.map(set => {
      return new ToolsSet({toolsSetName: set.toolsSetName, items: set.items, callback: (tool) => set.callback(tool)});
    });
    this.selectTool = selectTool;
    this.activeSelectedSet = null;
    this.activeSelectedSetName = null;
    this.callback = callback;
  }

  handleSelectTool (tool) {
    const name = tool.name;
    this.selectTool = tool;
    this.activeSelectedSet = new SelectedSets({
      subTool: tool.subTools[Object.keys(tool.subTools)[0]],
      callback: this.handleFieldChange.bind(this)
    });
    this.activeSelectedSetName = Object.keys(tool.subTools)[0];
    this.update(() => this.callback(name));
  }

  handleFieldChange (props = {}) {
    const {name, value} = props;
    this.callback(props);
  }

  handleSubToolChange (val) {
    this.activeSelectedSet = new SelectedSets({
      subTool: this.selectTool.subTools[val],
      callback: this.handleFieldChange.bind(this)
    });
    this.activeSelectedSetName = val;
    console.log(val);
    this.update(() => this.callback(val));
  }

  getSubTools () {
    const div = $(ELEMENT_DIV, {
      "class": "tools-absolute"
    });
    if (this.selectTool != null) {
      const dd = new DropDownTool({items: Object.keys(this.selectTool.subTools), selected: this.activeSelectedSetName, callback: this.handleSubToolChange.bind(this)});
      div.append(dd.render());
      if (this.activeSelectedSet != null) {
        div.append(this.activeSelectedSet.render());
      }
    }
    return div;
  }

  getSelectTools () {
    const div = $(ELEMENT_DIV, {
      "class": "tools-set-wrapper"
    });
    const setsElements = this.toolsSets.map(s => s.render());
    div.append(setsElements);
    return div;
  }

  update (cb) {
    const wrapper = $(".tools-wrapper");
    $(wrapper).replaceWith(this.render());
    cb();
  }
  render () {
    const toolsWrapper = $(ELEMENT_DIV, {
      "class": "tools-wrapper"
    });
    const sets = this.toolsSets.map(set => {
      return set.render();
    });
    const subToolElement = this.getSubTools();
    toolsWrapper.append(sets, subToolElement);
    return toolsWrapper;
  }
}

export default CTools;
