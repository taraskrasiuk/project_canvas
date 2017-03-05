import ToolsModel from "./ToolsModel";

class ToolsController {
    constructor(props = {}) {
        const {tools, handleTool, handleOption} = props;
        this.props = props;
        this.currentTool = null;
        this.model = new ToolsModel({tools: this.props.tools});
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