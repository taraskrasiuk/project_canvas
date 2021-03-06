import $ from "jquery";
import {
    ELEMENT_IMG,
    ELEMENT_DIV,
    CSS_MAIN_TOOL_IMAGE,
    CSS_MAIN_TOOL_ELEMENT,
    TOOL_IMG_PATH,
    CSS_MAIN_TOOL_ACTIVE,
    ELEMENT_SELECT
} from "../../Constants";
import ToolsController from "./ToolsController";
import draggable from 'jquery-ui/ui/widgets/draggable';
import Bottom_View from "../../board/Bottom_View";


class ToolsView{
    constructor(props = {}) {
        const {handleTool, handleOption, position} = props;
        this.props = props;
        this.controller = new ToolsController({
            tools: props.tools || ["brush"],
            handleTool: this.props.handleTool,
            handleOption: this.props.handleOption,
            // ref

        });
        this.handlePDFUpload= this.props.handlePDFUpload;
        this.handleImageUpload= this.props.handleImageUpload;
        //set view to controller
        this.controller.setView(this);
        this.position = position;
        // this.absolutePositions = {};

        this.handleHistoryNext = this.props.handleHistoryNext;
        this.handleHistoryPrev = this.props.handleHistoryPrev;

    }

    handleToggleOptions (e) {
        e.preventDefault();
        this.controller.toggleOptions();
        this.update();
    }

    handleTool(tool) {
        this.controller.handleSelectTool(tool);
        this.update();
    }

    handleDropDownChange(e) {
        const current = this.controller.getCurrentTool();
        current.setSelect(e.target.value);
        this.controller.handleSelectTool(current);
        this.update();
    }

    handleOptionChange(option) {
        this.controller.handleToolOption(option);
    }

    renderTool(tool) {
        const img = $(ELEMENT_IMG, {
            "class": CSS_MAIN_TOOL_IMAGE,
            "src": TOOL_IMG_PATH + "tool_" + tool.name + ".png"
        });
        const toolElement = $(ELEMENT_DIV, {
            "class": CSS_MAIN_TOOL_ELEMENT
        }).on("click", (e) => {
            e.preventDefault();
            this.handleTool(tool);
        }).append(img);
        if (tool.active) {
            toolElement.addClass(CSS_MAIN_TOOL_ACTIVE);
        }
        return toolElement;
    }

    renderToolOptions() {
        const current = this.controller.getCurrentTool();
        var filter = current.types.filter(t => t.optionName == current.getSelected());

        let options = [];
        if (filter.length > 0) {
            options = filter[0].options[current.getSelected()];
        }

        const toolsOptionsWrapper = $(ELEMENT_DIV, {
            "class": "toolsOptionsWrapper"
        });
        options.forEach((arrOptions, i) => {
            let title = "";
            let fields = [];
            if (i == 0) {
                title = "Colors"
            } else if (i == 1) {
                title = "Transforms"
            }
            fields = arrOptions.map(op => op.render(this.handleOptionChange.bind(this)));
            toolsOptionsWrapper.append($("<span></span>", {
                text: title
            }), fields);
        });
        return toolsOptionsWrapper;
    }

    renderToolDropDown() {
        const current = this.controller.getCurrentTool();
        const dd = $(ELEMENT_SELECT, {
            "class": "tools-dropDown",
            "value": current.getSelected(),
            "selected": current.getSelected()
        }).on("change", this.handleDropDownChange.bind(this));
        const items = current.dropDown.items.map(i => i.render());
        dd.append(items);
        return dd;

    }

    update() {
        const wr = $(".tools-wrapper");
        if (wr != null) {
            wr.replaceWith(this.render());
        }
    }

    //TODO replact
    _getActionInput (handler, label) {
        const input = $("<input type=\"file\" />");
        input.on("change", handler);
        input.attr("id", label);
        input.css({display: "none"});
        const img = $("<label></label>", {"for": label}).append(Bottom_View.getImage(label), input);
        // img.on("click", (e) => {
        //     e.preventDefault();
        //     $("#"+label).click();
        // });
        return img;
    }

    render() {
        const wrapper = $("<div></div>", {
            "class": "tools-wrapper"
        });
        const tools = $("<div></div>", {
            "class": "tools"
        });

        if (this.position == "right") {
            wrapper.addClass("right");
        } else {
            wrapper.addClass("left");
        }

        for (let t of this.controller.getTools()) {
            tools.append(this.renderTool(t));
        }

        wrapper.append(tools);
        const $button = $("<div></div>", {
            "class": "tool-element"
        }).on("click", this.handleToggleOptions.bind(this)).append(Bottom_View.getImage("toggle"));
        wrapper.append($button);

        const pdfButton = this._getActionInput((e) => this.handlePDFUpload(e), "pdf");
        wrapper.append(pdfButton);

        const imgButton = this._getActionInput((e) => this.handleImageUpload(e), "canvas");
        wrapper.append(imgButton);

        const backButton = $("<div></div>").append(Bottom_View.getImage("prev").on("click", (e => this.props.handleHistoryPrev(e))));
        const nextButton = $("<div></div>").append(Bottom_View.getImage("next").on("click", (e => this.props.handleHistoryNext(e))));
        wrapper.append(backButton, nextButton);

        if (this.controller.getCurrentTool() != null) {
            $(ELEMENT_DIV, {
                "class": "tools-absolute"
            }).append(this.renderToolDropDown(), this.renderToolOptions())
                .appendTo(wrapper);
        }

        return wrapper;
    }
}

export default ToolsView;