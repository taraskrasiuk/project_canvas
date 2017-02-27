import Utils from "../utils/Utils";
import Notifications from "../Notifications";

class AppModel {
    constructor(props = {}) {
        this._id = props.id;
        this._boards = props.boards || [];

        // this._currentBoard = null;
        // if (this._boards.length > 0) {
        //     this._currentBoard = this._boards[0];
        // }

        this.MAX_BOARDS = props.MAX_BOARDS || 3;

    }


    getMaxBoards () {
        return this.MAX_BOARDS;
    }

    // getCurrentBoard (){
    //     return this._currentBoard;
    // };

    // setCurrentBoard (b) {
    //     if (Utils.isBoard(b) && this._currentBoard != b) {
    //         var notify = Notifications.currentBoard(b);
    //         AppModel.log(notify);
    //         this._currentBoard = b;
    //     } else if(b == null) {
    //         this._currentBoard = b;
    //     }
    //     // this.update(b);
    //     return this;
    // };

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