import $ from "jquery";
import View from "../global/View";


class Top_View extends View{
    constructor (props = {}) {
        super({className: "top-panel", active: true});
        const {head, items} = props;
        this.head = head;
        this.items = items;
    }

    renderHeader () {
        return $("<h3></h3>", {
            "class": "top-panel_head",
            text: "Board"
        });
    }

    renderListItem ({className, text, onClick, child, active}) {
        const i =  $("<li></li>", {
            "class": className,
            "text": text
        }).on("click", onClick);
        if (child != null) {
            i.append($("<span></span>", {
                text: child.text,
                "class": child.className,
            }).on("click", child.onClick));
        }
        if (active) {
            i.addClass("active");
        }
        return i;
    }

    renderTopList () {
        return $("<ul></ul>", {
            "class": "top-panel_list"
        }).append(this.items.map(it => {
            return this.renderListItem(it);
        }));
    }

    update () {
        const wrapper = $(`.${this.className}`);
        wrapper.empty();
        return wrapper.append(this.renderHeader(), this.renderTopList());
    }

    render () {
        const wrapper = this.renderWrapper();
        const items = this.renderTopList();
        const header = this.renderHeader();
        return wrapper.append(header, items);
    }
}

export default Top_View;