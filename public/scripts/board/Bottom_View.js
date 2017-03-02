import $ from "jquery";
import View from "../global/View";
import FileUploadField from "../painting/tools/InputFields/FileUploadField";

class Bottom_View extends View{
    constructor(props = {}) {
        super({className: "bottom-panel", active: true});
        const {items, optionsItems} = props;
        this.option = {
            items: items || [],
            optionsItems: optionsItems || []
        };

    }

    renderOptionItems (items = []) {
        return $("<ul></ul>", {
            "class": "bottom-option-list",
        }).append(items.map(i => this.renderOptionItem(i)));
    }

    renderOptionItem (item = {}) {
        const {text, className} = item;
        return $("<span></span>", {
            "class": "bottom-option-item",
            text: text
        });
    }

    renderButtons(items = []) {
        return $("<ul></ul>", {
            "class": "bottom-list"
        }).append(items.map(btn => this.renderItem({
            label: btn.label,
            onClick: btn.onClick,
            onUpload: btn.onUpload,
            className: "bottom-view_button",
            type: btn.type
        })));
    }

    static getImage(name) {
        return $("<img />", {
            src: `static/images/${name}.png`,
            "class": "tool-img"
        });
    }

    renderItem(props = {}) {
        const {type, label, onClick, className, onUpload} = props;
        if (type == "button") {
            return $("<div></div>", {
                "class": "tool-element"
            }).on("click", onClick).append(Bottom_View.getImage(label));
        } else if (type == "input") {
            return  $("<li></li>", {
                "class": "bottom-list_item"
            }).append(new FileUploadField({name: label, onUpload: onUpload != null ? onUpload : null, value: ""}).render((e) => {
                console.log(e);
            }));
        } else if (type == "link") {
            return $("<li></li>", {
                "class": "bottom-list_item"
            }).append($("<a donwload='canvas.png' href='#'>download</a>", {
                "class": "button",
                text: label
            }).on("click", onClick).addClass("button"));
        }
    }

    update () {
        const {items, optionsItems} = this.option;
        const bottomWrapper = $(`.${this.className}`);
        bottomWrapper.empty();
        if (optionsItems.length > 0) {
            bottomWrapper.append(this.renderOptionItems(optionsItems));
        }
        bottomWrapper.append(this.renderButtons(items));
        return bottomWrapper;
    }

    render () {
        const {items, optionsItems} = this.option;
        const bottomWrapper = this.renderWrapper();
        if (optionsItems.length > 0) {
            bottomWrapper.append(this.renderOptionItems(optionsItems));
        }
        return bottomWrapper.append(this.renderButtons(items));
    }
}

export default Bottom_View;