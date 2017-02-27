import BoardView from "../board/BoardView";
class Utils {

    static getId (a,b) {
        return Math.round(Math.random() * ((a * 42) >>2 + ((b + 42) - Math.round(Math.random() * (a - 2))))).toString() + "_&_hash";
    }

    static firstCharTOUpperCase (str) {
        return str.substring(0,1).toUpperCase().concat(str.substring(1));
    }

    static isBoard (board) {
        return board != null && board instanceof BoardView;
    }
}

export default Utils;