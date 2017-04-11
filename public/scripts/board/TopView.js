import $ from "jquery";
import View from "../global/View";
import {
    ELEMENT_UL,
    ELEMENT_LI,
    ELEMENT_SPAN,
    CLASS_NAME,
    CSS_TOP_PANEL_HEAD,
    CSS_TOP_PANEL,
    CSS_ACTIVE,
    CSS_TOP_PANEL_LIST
} from "../Constants";

class TopView extends View {
    constructor (props = {}) {
        super({className: CSS_TOP_PANEL, active: true});
        const {head, items} = props;
        this.head = head;
        this.items = items;
    }

    renderHeader () {
        return $("<h3></h3>", {
            [CLASS_NAME]: CSS_TOP_PANEL_HEAD,
            text: "Board"
        });
    }

    renderListItem ({className, text, onClick, child, active}) {
        const i =  $(ELEMENT_LI, {
            [CLASS_NAME]: className,
            "text": text
        }).on("click", onClick);
        if (child != null) {
            i.append($(ELEMENT_SPAN, {
                text: child.text,
                [CLASS_NAME]: child.className,
            }).on("click", child.onClick));
        }
        if (active) {
            i.addClass(CSS_ACTIVE);
        }
        return i;
    }

    renderTopList () {
        return $(ELEMENT_UL, {
            [CLASS_NAME]: CSS_TOP_PANEL_LIST
        }).append(this.items.map(it => {
            return this.renderListItem(it);
        }));
    }

    renderBoardControls () {
        const boardControlsWrapper = $(ELEMENT_UL, {
            [CLASS_NAME]: "top-panel_list board_controls"
        });
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

export default TopView;