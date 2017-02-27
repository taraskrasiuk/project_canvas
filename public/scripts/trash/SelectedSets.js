import $ from "jquery";
import {
  ELEMENT_DIV,
  TOOLS_GROUP_COLORS,
  TOOLS_GROUP_TRANSFORMS
} from "../Constants";

import ColorInputField from "../painting/tools/InputFields/ColorInputField";
import RangeInputField from "../painting/tools/InputFields/RangeInputField";
import CheckBoxField from "../painting/tools/InputFields/CheckBoxFiled";
import DropDownTool from "../painting/tools/InputFields/DropDownTool";
import CanvasTools from "./CanvasTools";
import FileUploadField from "../painting/tools/InputFields/FileUploadField";
import FileDownloadField from "../painting/tools/InputFields/FileDownloadField";

class SelectedSets {
  constructor(props = {}) {
    this.subTool = props.subTool;
    this._fields = [];
    this.callback = props.callback;
    this._init();
  }
  _getField (field, consClass) {
    let props = {
      name: field,
      callback: this.handleCallback.bind(this)
    };
    let mProps = Object.assign(props, CanvasTools.SET_OPTIONS[field]);
    return new consClass(mProps);
  }
  _init () {
    let fields = [];
      Object.keys(this.subTool).forEach(s => {
        let _f = this.subTool[s];
        switch (s) {
          case TOOLS_GROUP_COLORS:
            fields = fields.concat(_f.map(field => this._getField(field, ColorInputField)));
            break;
          case TOOLS_GROUP_TRANSFORMS:
            fields = fields.concat(_f.map(field => this._getField(field, RangeInputField)));
            break;
          case "fill":
            fields = fields.concat(_f.map(field => this._getField(field, CheckBoxField)));
            break;
          case "file":
            fields = fields.concat(_f.map(field => this._getField(field, FileUploadField)));
            break;
          case "download":
            fields = fields.concat(_f.map(field => this._getField(field, FileDownloadField)));
            break;
        }
      });
    this._fields =  fields;
  }

  handleCallback (props) {
    console.log(props);
    this.callback(props);
  }

  render () {
    const selectedWrapper = $(ELEMENT_DIV, {
      "class": "tool-selected-wrapper"
    });
    this._fields.forEach(f => {
      selectedWrapper.append(f.render());
    });
    return selectedWrapper;
  }
}
export default SelectedSets;
