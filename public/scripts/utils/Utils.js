import BoardView from "../board/BoardView";
class Utils {

    static getId (a,b) {
        return Math.random().toString(16).substr(2,10);
    }

    static firstCharTOUpperCase (str) {
        return str.substring(0,1).toUpperCase().concat(str.substring(1));
    }

    static isBoard (board) {
        return board != null && board instanceof BoardView;
    }
}

export default Utils;