import Utils from "../utils/Utils";
import Notifications from "../Notifications";

class AppModel {
    constructor(props = {}) {
        this._id = props.id;
        this._boards = props.boards || [];

        this.MAX_BOARDS = props.MAX_BOARDS || 3;

    }


    getMaxBoards () {
        return this.MAX_BOARDS;
    }

    addBoard(board) {
        this._boards.push(board);
    }

    deleteBoard (b) {
        var idx = this._boards.indexOf(b);
        if (idx != -1) {
            this._boards = this._boards.filter((el, i, arr) => i != idx);
            return true;
        }
        return false;
    };

    getBoards () {
        return this._boards;
    }

    getId () {
        return this._id;
    }
}

export default AppModel;