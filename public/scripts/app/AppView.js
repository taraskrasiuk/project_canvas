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
import Top_View from "../board/TopView";
import Bottom_View from "../board/Bottom_View";

const CSS_MAIN_APP = "main-app";


class AppView extends View {
    constructor(props = {}) {
        super({
            className: "main-app",
            active: true
        });
        this.bottomPanel = new Bottom_View({
            items: []
        });

        var boardView = new BoardView({
            name: "Board 1",
        });
        this.controller = new AppController({
            currentBoard: boardView,
            model: new AppModel({
                id: "mainApp",
                boards: [].concat(boardView)
            })
        });
        this._id = "main_board";

        this.topPanel = new Top_View({
            items: this.getTopItems(),
            boardControls: null,
            head: "Board"
        });
    }

    render (id) {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        const main = $(ELEMENT_DIV, {
            id: this._id
        });
        const targetElement = $("#" + id);
        const topPanel = this.topPanel.render();
        const bottomPanel = this.bottomPanel.render();
        const content = this.renderMainContent();
        var currentBoard = this.controller.getCurrentBoard();
        if (currentBoard != null) {
            $(content).append(currentBoard.render());
        }
        if (id != null) {
            $(main).append(topPanel, content, bottomPanel).appendTo(targetElement);
        } else {
            $(main).append(topPanel, content, bottomPanel).appendTo("body");
        }
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
    }

    getBottomItems () {
        var currentBoard = this.controller.getCurrentBoard();
        if (currentBoard != null) {
            return currentBoard.bottomItems;
        } else return null;
    }

    getTopItems () {
        const self = this;
        const boards = this.controller.model.getBoards();
        const items = boards.map(b => {
            return {
                className: "board-item",
                text: b.getName(),
                active: b == self.controller.getCurrentBoard(),
                child: {
                    text: "x",
                    className: "board-item_delete",
                    onClick: (e) => {
                        e.preventDefault();
                        self.controller.deleteBoard(b, self.update.bind(self));
                        e.stopPropagation();
                    }
                },
                onClick: (e) => {
                    e.preventDefault();
                    self.controller.setCurrentBoard(b, self.update.bind(self));
                }
            }
        });
        if (boards.length < this.controller.model.getMaxBoards()) {
            items.push({
                className: "board-item .add",
                text: "+",
                onClick: (e) => {
                    e.preventDefault();
                    self.controller.addBoard(new BoardView({name: "Board " + (boards.length + 1)}), self.update.bind(self));
                },
                child: null
            })
        }
        return items;
    };

    renderMainContent () {
        const board = $(ELEMENT_DIV, {
            "class": "main-board"
        });
        return board;
    };

    update (board) {
        const main = $("#" + this._id);
        // $(main).empty();
        this.topPanel.items = this.getTopItems();
        const currentBoard = this.controller.getCurrentBoard();
        if (currentBoard) {
            this.topPanel.boardControls = currentBoard.boardControls;
        }
        const topPanel = this.topPanel.update();
        const bottomPanel = this.bottomPanel.update();
        let content = null;
        if (board != null) {
            content = board.render();
        }
        $(main).replaceWith($(ELEMENT_DIV, {
            id: this._id
        }).append(topPanel, content, bottomPanel));
    }
}

export default AppView;