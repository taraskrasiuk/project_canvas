import $ from "jquery";
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