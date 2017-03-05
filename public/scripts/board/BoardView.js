import $ from "jquery";
import View from "../global/View";
import BoardController from "./BoardController";
import BoardModel from "./BoardModel";
import Bottom_View from "./Bottom_View";

class BoardView extends View {
    constructor(props ={}) {
        super({
            className: "board-view",
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
            "class": "board-content"
        });
        var currentView = this.controller.getCurrentView();
        if (currentView != null) {
            boardContent.append(currentView.render());
        }
        return boardContent;
    };

    // renderBottomPanel () {
    //
    //     const currentView = this.controller.getCurrentView();
    //     const bottomPanel = $(".bottom-panel");
    //     if (currentView != null) {
    //         if (currentView.bottomItems != null && currentView.bottomItems.length > 0) {
    //             // bottom.items = currentView.bottomItems;
    //         }
    //     }
    //     // return bottom.render();
    // }

    renderAsidePanel () {
        const asidePanel = $("<div></div>", {
            "class": "aside-list"
        });

        const buttons = [
            {
                name: "Canvas",
                onClick: (e) => {
                    e.preventDefault();
                    this.handleSelect("Canvas");
                }
            },
            {
                name: "PDF",
                onClick: (e) => {
                    e.preventDefault();
                    this.handleSelect("PDF");
                }
            },
            {
                name: "Video",
                onClick: (e) => {
                    e.preventDefault();
                    this.handleSelect("Video");
                }
            }
        ];
        buttons.forEach((btn) => {
            const b = $("<div></div>", {
                "class": "tool-element",
            }).on("click", btn.onClick.bind(this))
                .append(Bottom_View.getImage(btn.name.toLowerCase()))
                .appendTo(asidePanel);

        });
        return asidePanel;
    };

    update () {
        $(".board-view").replaceWith(this.render());
    }


    render () {
        const wrapper = this.renderWrapper();
        wrapper.attr("id", this.controller.model._id);
        const div = $("<div></div>").addClass("board-main");
        const content = this.renderContent();
        const asidePanel = this.renderAsidePanel();
        // const bottom = this.renderBottomPanel();
        wrapper.append(div.append(asidePanel, content));
        return wrapper;
    }
}

export default BoardView;