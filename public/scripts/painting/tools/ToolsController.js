import ToolsModel from "./ToolsModel";
import Controller from "../../global/Controller";

class ToolsController extends Controller{
    constructor(props = {}) {
        super({
            model: new ToolsModel({tools: props.tools})
        });
        this.props = props;
        this.currentTool = null;
        this.isOptionsHide = true;
    }

    toggleOptions () {
        this.isOptionsHide = !this.isOptionsHide;
    }

    handleToolOption(option) {
        const data = {
            type: option.name,
            value: option.value
        };
        console.log("ToolsController , handleOption: ", data);
        if (this.props.handleOption != null) {
            this.props.handleOption(data);
        }
    }

    handleSelectTool(tool) {
        this.currentTool = this.model.getTool(tool);
        this.model.setActive(tool);
        console.log("ToolsController , handleTool: ", this.currentTool);
        if (this.props.handleTool != null) {
            this.props.handleTool(this.currentTool);
        }
    }

    getTools() {
        return this.model.getTools();
    }

    getCurrentTool() {
        return this.currentTool;
    }
}

export default ToolsController;