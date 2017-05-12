import $ from "jquery";
import Utils from "./Utils";
const STATIC_SRC = "static/images/";

const UiUtils = {
    iconsSRC: STATIC_SRC,
    renderIcon: (prefix, iconName, upperFirstLetter) => {
        let _name = iconName;
        if (upperFirstLetter) {
            _name = Utils.firstCharTOUpperCase(iconName);
        }

        const _iconName = `${prefix}${_name}.png`;
        return $("<img />", {
            src: STATIC_SRC + _iconName,
            className: "icon"
        });
    }

};
export default UiUtils;