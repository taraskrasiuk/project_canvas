import $ from "jquery";
import {
    BOARD_CONTROL_PDF,
    BOARD_CONTROL_CANVAS,
    BOARD_CONTROL_VIDEO
} from "../Constants";
import Bottom_View from "../board/Bottom_View";

class BoardType {
    constructor(props = {}) {
        const {type, handler} = props;
        this._type = type;
        this.handler = handler;
    }

    handleSelect (e) {
        e.preventDefault();
        this.handler(this._type);
    }

    getTypeIcon () {
        // const loverType = this._type.toLowerCase();
        // return `board-${loverType}.png`;
        return Bottom_View.getImage(this._type.toLowerCase());
    }

    getType () {
        return this._type;
    }

    isActive (type) {
        return this._type === type;
    }

    render () {

    }
}



class BoardTypesControls {
    constructor(props = {}) {
        const {types, handler} = props;
        this._types = types || [];
        this.currentType = null;
        this._types = this._types.map(type => {
            return new BoardType({type, handler});
        });
    }

    getTypes () {
        return this._types;
    }

    getCurrentType () {
        return this.currentType;
    }

    setCurrentType (type) {
        if (type instanceof BoardType) {
            this.currentType = type;
        }
    }
}

export default BoardTypesControls;