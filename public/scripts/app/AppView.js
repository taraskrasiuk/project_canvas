import $ from "jquery";
import resizable from 'jquery-ui/ui/widgets/resizable';
import draggable from 'jquery-ui/ui/widgets/draggable';
import View from "../global/View";
import AppController from "./AppController";
import AppModel from "./AppModel";
import {
    ELEMENT_DIV,
    ELEMENT_UL
} from "../Constants";
import BoardView from "../board/BoardView";

class AppView extends View {
    constructor(props = {}) {
        super({
            className: "main-app",
            active: true
        });
        this.controller = new AppController({
            model: new AppModel({
                id: "mainApp",
                boards: [new BoardView({
                    name: "Board 1"
                })]
            })
        });
        this._id = "main_board";
    }

    render (id) {
        const main = $(ELEMENT_DIV, {
            id: this._id
        });
        const targetElement = $("#" + id);
        const topPanel = this.renderTopPanel();
        const content = this.renderMainContent();
        if (this.controller.getCu != null) {
            $(content).append(this._currentBoard.render());
        }
        if (id != null) {
            $(main).append(topPanel, content).appendTo(targetElement);
        } else {
            $(main).append(topPanel, content).appendTo("body");
        }
        resizable({}, $(main));
    };

    topDrag () {
        const top = $(ELEMENT_DIV, {
            "class": "topDrag"
        });
        const self = this;
        draggable({
            appendTo: self._id,
            containment: $('#' + self._id),
            helper: 'clone',
            drag: ( event, ui ) => {
                $("#"+self._id).css({left: ui.position.left, top: ui.position.top});
            }
        }, top);
        return top;
        // return top;
    }

    renderTopPanel () {
        const self = this;
        const topPanel = $(ELEMENT_DIV, {
            "class": "top-panel"
        }).append(this.topDrag());
        const topPanelHead = $("<h3></h3>", {
            "class": "top-panel_head",
            text: "Board"
        }).appendTo(topPanel);
        const ul = $(ELEMENT_UL, {
            "class": "top-panel_list"
        }).appendTo(topPanel);
        const liArray = this.controller.model.getBoards().map((el, idx) => {
            const span = $("<span></span>", {
                "class": "close",
                "text": "x"
            }).on("click", (e) => {
                self.controller.deleteBoard(el, this.update.bind(this));
                this.update()
            });
            const li = $("<li></li>", {
                "class": "list_item",
                text: el.getName()
            }).on("click", (e) => {
                self.controller.setCurrentBoard(el, this.update.bind(this));
            }).append(span).toggleClass("active", self.controller.getCurrentBoard() == el);

            return li;
        });
        if (this.controller.model.getBoards().length < this.controller.model.getMaxBoards()) {
            const addSpan = $("<li></li>", {
                "class": "list_item",
                text: "+"
            }).on("click", (e) => {
                self.controller.addBoard(new BoardView({name: "Board " + (self.controller.model.getBoards().length + 1)}), this.update.bind(this));
            });

            liArray.push(addSpan);
        }
        liArray.forEach(el => {
            el.appendTo(ul);
        });
        return topPanel;
    };

    renderMainContent () {
        const board = $(ELEMENT_DIV, {
            "class": "main-board"
        });
        return board;
    };

    update (board) {
        const main = $("#" + this._id);
        $(main).empty();
        const topPanel = this.renderTopPanel();
        const content = this.renderMainContent();
        if (board != null) {
            const b = board.render();
            content.append(b);
        }
        $(main).append(topPanel, content);
    }
}

export default AppView;