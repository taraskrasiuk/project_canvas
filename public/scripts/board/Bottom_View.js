import $ from "jquery";
import View from "../global/View";
import FileUploadField from "../painting/tools/InputFields/FileUploadField";

class Bottom_View extends View{
    constructor(props = {}) {
        super({className: "bottom-wrapper", active: true});
        const {items} = props;
        this.items = items;

    }

    renderButtons(items = []) {
        return items.map(btn => this.renderItem({
            label: btn.label,
            onClick: btn.onClick,
            onUpload: btn.onUpload,
            className: "bottom-view_button",
            type: btn.type
        }));
    }

    renderItem(props = {}) {
        const {type, label, onClick, className, onUpload} = props;
        if (type == "button") {
            return $("<button></button>", {
                text: label,
                "class": "button"
            }).on("click", onClick);
        } else if (type == "input") {
            return new FileUploadField({name: label, onUpload: onUpload != null ? onUpload : null, value: ""}).render((e) => {
                console.log(e);
            });
        } else if (type == "link") {
            return $("<a donwload='canvas.png' href='#'>download</a>", {
                "class": "button",
                text: label
            }).on("click", onClick).addClass("button");
        }
    }

    update () {
        const bottomWrapper = $(`.${this.className}`);
        return bottomWrapper.replaceWith(this.render());
    }

    render () {
        const bottomWrapper = this.renderWrapper();
        return bottomWrapper.append(this.renderButtons(this.items));
    }
}

export default Bottom_View;