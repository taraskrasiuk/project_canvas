import $ from "jquery";
import View from "../global/View";
import BoardController from "./BoardController";
import BoardModel from "./BoardModel";
import Bottom_View from "./Bottom_View";
import {
    MOUSE_CLICK,
    CLASS_NAME,
    ELEMENT_DIV,
    CSS_BOARD_VIEW,
    CSS_BOARD_CONTENT,
    CSS_BOARD_ELEMENT,
    CSS_TOOL_ELEMENT,
    CSS_ASIDE_LIST
} from "../Constants";

const BOARD_CONTROL_CANVAS = "Canvas";
const BOARD_CONTROL_PDF = "PDF";
const BOARD_CONTROL_VIDEO = "Video";

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
        const boardContent = $("<div></div>", {
            [CLASS_NAME]: CSS_BOARD_CONTENT
        });
        var currentView = this.controller.getCurrentView();
        if (currentView != null) {
            boardContent.append(currentView.render());
        }
        return boardContent;
    };

    renderAsidePanel () {
        const asidePanel = $("<div></div>", {
            [CLASS_NAME]: CSS_ASIDE_LIST
        });

        const _onClick = (e, boardControlType) => {
          e.preventDefault();
          this.handleSelect(boardControlType);
        };

        const buttons = [
            {
                name: BOARD_CONTROL_CANVAS,
                onClick: (e) => _onClick(e, BOARD_CONTROL_CANVAS)
            },
            {
                name: BOARD_CONTROL_PDF,
                onClick: (e) => _onClick(e, BOARD_CONTROL_PDF)
            },
            {
                name: BOARD_CONTROL_VIDEO,
                onClick: (e) => _onClick(e, BOARD_CONTROL_VIDEO)
            }
        ];
        buttons.forEach((btn) => {
            $(ELEMENT_DIV, {
                [CLASS_NAME]: CSS_TOOL_ELEMENT,
            }).on(MOUSE_CLICK, btn.onClick.bind(this))
                .append(Bottom_View.getImage(btn.name.toLowerCase()))
                .appendTo(asidePanel);

        });
        return asidePanel;
    };

    update () {
        $(`.${CSS_BOARD_VIEW}`).replaceWith(this.render());
    }

    render () {
        const wrapper = this.renderWrapper();
        wrapper.attr("id", this.controller.model._id);
        const div = $(ELEMENT_DIV).addClass(CSS_BOARD_ELEMENT);
        const content = this.renderContent();
        const asidePanel = this.renderAsidePanel();
        wrapper.append(div.append(asidePanel, content));
        return wrapper;
    }
}

export default BoardView;