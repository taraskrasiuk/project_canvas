import SelectTool from "./SelectTool";
import CanvasTools from "./CanvasTools";
import $ from "jquery";
import {
  ELEMENT_DIV,
  CSS_TOOLS_SET
} from "../Constants.js";

class ToolsSet {
  constructor(props = {}) {
    this.toolsSetName = props.toolsSetName || "default";
    this.items = props.items.map(itemName => {
      return new SelectTool({name: itemName, callback: this.handleCallback.bind(this), active: false, subTools: CanvasTools.SETS[itemName].subTools});
    });
    this.callback = props.callback;
    this.props = props;
  }

  render () {
      let div = $("<div class=\"tools-set\"></div>");
      this.items.forEach(el => {
        $(div).append(el.render());
      });
      return div;
  }

  handleCallback (tool) {
    this.items = this.items.map(item => {
      if (item != tool) {
        item.setActive(false);
      }
      return item;
    });
    this.update();
    this.callback(tool);
  }

  update () {
    $(".tools-set").replaceWith(this.render());
  }

}
export default ToolsSet;
