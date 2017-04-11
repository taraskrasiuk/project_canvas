import ColorInputField from "./InputFields/ColorInputField";
import RangeInputField from "./InputFields/RangeInputField";
import CheckBoxField from "./InputFields/CheckBoxFiled";
import DropDownTool from "./InputFields/DropDownTool";
import FileUploadField from "./InputFields/FileUploadField";
import TextInputField from "./InputFields/TextInputField";

const options = {
    "strokeStyle": {
        value: "#a8a8a8"
    },
    "fillStyle": {
      value: "#b2b2b2"
    },
    "scale": {
      min: 1,
        max: 5,
        step: .1,
        value: 1
    },
    "lineWidth": {
        min: 1,
        max: 25,
        step: 1,
        value: 1
    },
    "shadowColor": {
        value: "#000000"
    },
    "shadowBlur": {
        min: 0,
        max: 25,
        step:1,
        value: 0
    },
    "globalAlpha": {
        min: 0,
        max: 1,
        step: .1,
        value: 1
    },
    "backgroundColor": {
        "value": "#ffffff"
    }
};

const dropDownSet = {
    "brush": {
        types: ["pencil", "brush"]
    },
    "laser": {
      types: ["laser"]
    },
    "shapes": {
        types: ["rectangle", "circle","triangle"]
    },
    "line": {
      types: ["line"]
    },
    "background": {
        types: ["fill", "upload"]
    },
    "erase": {
        types: ["deleteShape"]
    },
    "select": {
        types: ["select"]
    },
    "text": {
        types: ["textField"]
    }
};
const toolOptions = {
    "pencil": {
        "color": ["strokeStyle"],
        "range": ["globalAlpha"]
    },
    "brush": {
        "color": ["strokeStyle", "shadowColor"],
        "range": ["lineWidth", "globalAlpha", "shadowBlur"]
    },
    "laser": {
        "range": ["lineWidth"]
    },
    "rectangle": {
        "color": ["strokeStyle", "fillStyle", "shadowColor"],
        "range": ["lineWidth", "globalAlpha", "shadowBlur"],
        "check": ["fillShape"]
    },
    "circle": {
        "color": ["strokeStyle", "fillStyle", "shadowColor"],
        "range": ["lineWidth", "globalAlpha", "shadowBlur"],
        "check": ["fillShape"]
    },
    "triangle": {
        "color": ["strokeStyle", "fillStyle", "shadowColor"],
        "range": ["lineWidth", "globalAlpha", "shadowBlur"],
        "check": ["fillShape"]
    },
    "fill": {
        "color": ["backgroundColor"],
        "range": ["scale"],
    },
    "deleteShape": {
        "range": ["lineWidth"],
        "check": ["fullDelete"],
    },
    "select": {
        "check": ["groupSelect"]
    },
    "upload": {
        "fileUpload": ["upload"]
    },
    "textField": {
        "color": ["fillStyle", "strokeStyle"],
        "text": ["text", "font"],
        "check": ["fillShape"]
    },
    "line": {
        "color": ["strokeStyle", "shadowColor"],
        "range": ["lineWidth", "globalAlpha", "shadowBlur"]
    }
};


class OptionTool {
    constructor ({type, optionName}) {
        this.type = type; // Brush
        this.optionName = optionName; //OptionName
        this.options = this.getOptions(this.optionName);
    }

    static option (field, consClass) {
        let props = {
            name: field
        };
        let mProps = Object.assign(props, options[field]);
        return new consClass(mProps);
    }

    getOptions (optionName) {
        let options = [];
        return Object.keys(toolOptions[optionName]).reduce((acc, n) => {
            acc[optionName] = this.switchOptionTypes(optionName);
            return acc;
        }, {});
    }

    switchOptionTypes (optionName) {
        let options = toolOptions[optionName];
        return Object.keys(options).map(o => {
            switch (o) {
                case "color":
                    return options[o].map(x=>OptionTool.option(x, ColorInputField));
                    break;
                case "range":
                    return options[o].map(x=>OptionTool.option(x, RangeInputField));
                    break;
                case "check":
                    return options[o].map(x=>OptionTool.option(x, CheckBoxField));
                    break;
                case "fileUpload":
                    return options[o].map(x=>OptionTool.option(x, FileUploadField));
                    break;
                case "text":
                    return options[o].map(x=>OptionTool.option(x, TextInputField));
                    break;
            }
        });
    }
}

class Tool {
    constructor(props = {}) {
        const {name, active} = props;
        this.active = active || false;
        this.name = name;
        this.types = dropDownSet[name].types.map(type => {
            return new OptionTool({type: name, optionName: type});
        });
        const toolOptions = this.types.map(t => t.optionName);
        const ddProps = {
            selected: toolOptions[0],
            items: toolOptions,
        };
        this.dropDown = new DropDownTool(ddProps);
    }

    setSelect (val) {
        this.dropDown.selected = val;
        for(let item of this.dropDown.items) {
            item.isSelected = item.value == val;
        }
    }
    getSelected () {
        return this.dropDown.selected;
    }
}

class ToolsModel {
    constructor(props = {}) {
        this.props = props;
        this.tools = this.props.tools.map(t => new Tool({name: t, active: false}));
    }

    setTools (tools) {
        this.tools = tools;
        return this;
    }
    getTools () {
        return this.tools;
    }

    getTool (tool) {
        return this.tools.filter(t => t == tool)[0];
    }

    setActive (tool) {
        for(let t of this.tools) {
            if (t == tool) {
                t.active = true;
            } else {
                t.active = false;
            }
        }
    }
}

export default ToolsModel;