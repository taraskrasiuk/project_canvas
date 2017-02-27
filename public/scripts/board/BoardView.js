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

    renderBottomPanel () {
        const currentView = this.controller.getCurrentView();
        const bottom = new Bottom_View();
        if (currentView != null) {
            if (currentView.bottomItems != null && currentView.bottomItems.length > 0) {
                bottom.items = currentView.bottomItems;
            }
        }
        return bottom.render();
    }

    renderAsidePanel () {
        const asidePanel = $("<div></div>", {
            "class": "board-asidePanel"
        });

        const buttons = [
            {
                name: "Paint",
                onClick: (e) => {
                    e.preventDefault();
                    this.handleSelect(e.target.textContent);
                }
            },
            {
                name: "PDF",
                onClick: (e) => {
                    e.preventDefault();
                    this.handleSelect(e.target.textContent);
                }
            },
            {
                name: "Files",
                onClick: (e) => {
                    // console.log("files");
                    e.preventDefault();
                    this.handleSelect(e.target.textContent);
                }
            }
        ];
        buttons.forEach((btn) => {
            const b = $("<button></button>", {
                "class": "button",
                text: btn.name
            }).on("click", btn.onClick.bind(this)).appendTo(asidePanel);

        });
        return asidePanel;
    };

    update () {
        // const main = $("#" + this._id);
        // const boardContent = $(".board-content");
        // const content = this.controller.getCurrentView().render();
        // if (content != null) {
        //     const ch = $(boardContent).children()[0];
        //     if (ch != null) {
        //         $(ch).replaceWith(content);
        //     } else {
        //         $(boardContent).append(content);
        //     }
        // }
        // $(".board-view").append(this.renderBottomPanel());

        $(".board-view").replaceWith(this.render());
    }


    render () {
        const wrapper = this.renderWrapper();
        wrapper.attr("id", this.controller.model._id);
        const div = $("<div></div>").addClass("board-main");
        const content = this.renderContent();
        const asidePanel = this.renderAsidePanel();
        const bottom = this.renderBottomPanel();
        wrapper.append(div.append(asidePanel, content), bottom);
        return wrapper;
    }
}

export default BoardView;