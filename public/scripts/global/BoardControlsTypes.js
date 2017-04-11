/**
 * Created by taras on 4/10/17.
 */
import {
    BOARD_CONTROL_PDF,
    BOARD_CONTROL_CANVAS,
    BOARD_CONTROL_VIDEO
} from "../Constants";

class BoardType {
    constructor(props = {}) {
        const {type, handler} = props;
        this._type = type;
        this.handler = handler;
    }

    handleSelect (e) {
        e.preventDefault();
        console.log(this._type + "// selected");
    }

    getTypeIcon () {
        const loverType = this._type.toLowerCase();
        return `board-${loverType}.png`;
    }

    getType () {
        return this._type;
    }
}



class BoardTypesControls {
    constructor(props = {}) {
        const {types} = props;
        this._types = types || [];
        this.currentType = null;
    }

    static typeCheck (type) {
        return [BOARD_CONTROL_PDF, BOARD_CONTROL_VIDEO, BOARD_CONTROL_CANVAS].some(_type => _type === type);
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
};