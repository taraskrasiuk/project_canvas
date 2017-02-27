import $ from "jquery";
import {
  STATIC_PATH,
  IMAGES_PATH,
  TOOL_IMG_PATH,
  ELEMENT_IMG,
  ELEMENT_DIV,
  CSS_MAIN_TOOL_IMAGE,
  CSS_MAIN_TOOL_ELEMENT,
  MOUSE_CLICK,
  CSS_MAIN_TOOL_ACTIVE
} from "../Constants";
import Tool from "./Tool";

class SelectTool extends Tool {
  constructor(props = {}) {
    super(props);
    const {active, subTools, activeSubTool} = props;
    this.active = active || false;
    this.subTools = subTools;
    this.activeSubTool = activeSubTool;
  }

  getImage () {
    const img = $(ELEMENT_IMG, {
      "class": CSS_MAIN_TOOL_IMAGE,
      "src": TOOL_IMG_PATH + "tool_" + this.name + ".png"
    });
    return img;
  }

  getWrapper () {
    const tool = $(ELEMENT_DIV, {
      "class": CSS_MAIN_TOOL_ELEMENT
    }).on(MOUSE_CLICK, this.handleClick.bind(this)).append(this.getImage());
    if (this.active) {
      tool.addClass(CSS_MAIN_TOOL_ACTIVE);
    }
    return tool;
  }

  handleClick (e) {
    e.preventDefault();
    if (!this.active) {
      this.active = true;
      this.callback(this); // also return rendered
    }
  }
  render () {
    return this.getWrapper();
  }

  setActive (bool) {
    this.active = bool;
  }

  getSubTools () {
    return this.subTools;
  }
}

export default SelectTool;
