import Controller from "../global/Controller";
import Utils from "../utils/Utils";
import Notifications from "../Notifications";

class AppController extends Controller {
    constructor(props = {}) {
        super(props);
        this._currentBoard = props.currentBoard;
    }
    static log(string) {
        console.log("MainBoard: " + string);
    }
    getCurrentBoard () {
        return this._currentBoard;
    }

    setCurrentBoard (board, cb) {
        if (Utils.isBoard(board) && this._currentBoard != board) {
            var notify = Notifications.currentBoard(board);
            AppController.log(notify);
            this._currentBoard = board;
        } else if(board == null) {
            this._currentBoard = board;
        }
        cb(this._currentBoard);
    }

    addBoard (board, cb) {
        if (Utils.isBoard(board)){
            const boards = this.model.getBoards();
            const max = this.model.getMaxBoards();
            if (boards.length < max) {
                this.model.addBoard(board);
                this.setCurrentBoard(board, cb);
                AppController.log(Notifications.boardAdded(board));
                return true;
            }
        }
        return false;
    }
    deleteBoard(board, cb) {
        if (Utils.isBoard(board)) {
            const del = this.model.deleteBoard(board);
            const boards = this.model.getBoards();
            if (del) {
                if (boards.length > 0) {
                    if (board === this._currentBoard) {
                        this.setCurrentBoard(boards[boards.length - 1], cb);
                    }
                } else {
                    this.setCurrentBoard(null, cb);
                }
                var notify = Notifications.boardDeleted(board);
                AppController.log(notify);
            }
        }
    }
}

export default AppController;