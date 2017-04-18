import $ from "jquery";
import View from "../global/View";
import BoardController from "./BoardController";
import BoardModel from "./BoardModel";
import Bottom_View from "./Bottom_View";
import BoardControlsTypes from "../global/BoardControlsTypes";
import {
    MOUSE_CLICK,
    CLASS_NAME,
    ELEMENT_DIV,
    CSS_BOARD_VIEW,
    CSS_BOARD_CONTENT,
    CSS_BOARD_ELEMENT,
    CSS_TOOL_ELEMENT,
    CSS_ASIDE_LIST,
    BOARD_CONTROL_CANVAS,
    BOARD_CONTROL_PDF,
    BOARD_CONTROL_VIDEO
} from "../Constants";


class BoardView extends View {
    constructor(props ={}) {
        super({
            className: CSS_BOARD_VIEW,
            active: true
        });
        this.controller = new BoardController({
            model: new BoardModel({
                name: props.name,
                id: props.name + "_id"
            })
        });
        this.boardControls = new BoardControlsTypes({
            types: [BOARD_CONTROL_CANVAS, BOARD_CONTROL_VIDEO],
            handler: (bType => {
                this.handleSelect(bType);
            })
        });
    }

    setName (newName) {
        this.controller.getModel().setName(newName);
    }

    getName () {
        return this.controller.getModel().getName();
    }
    getId () {
        return this.controller.getModel().getId();
    }

    handleSelect(type) {
        console.log(type);
        this.controller.setCurrentView(type);
        this.update();
    }

    renderContent () {
        const boardContent = $(ELEMENT_DIV, {
            [CLASS_NAME]: CSS_BOARD_CONTENT
        });
        var currentView = this.controller.getCurrentView();
        if (currentView != null) {
            boardContent.append(currentView.render());
        }
        return boardContent;
    };

    update () {
        $(`.${CSS_BOARD_VIEW}`).replaceWith(this.render());
    }

    render () {
        const wrapper = this.renderWrapper();
        wrapper.attr("id", this.controller.model._id);
        const div = $(ELEMENT_DIV).addClass(CSS_BOARD_ELEMENT);
        const content = this.renderContent();
        wrapper.append(div.append(content));
        return wrapper;
    }
}

export default BoardView;