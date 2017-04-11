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
    CSS_TOOL_ELEMENT,
    CSS_TOP_PANEL_LIST,
    MOUSE_CLICK
} from "../Constants";

class TopView extends View {
    constructor (props = {}) {
        super({className: CSS_TOP_PANEL, active: true});
        const {head, items, boardControls} = props;
        this.head = head;
        this.items = items;
        this.boardControls = boardControls;
    }

    renderHeader () {
        return $("<h3></h3>", {
            [CLASS_NAME]: CSS_TOP_PANEL_HEAD,
            text: "Board"
        });
    }

    renderBoardControls (bControls = []) {
        return $(ELEMENT_UL, {
            [CLASS_NAME]: CSS_TOP_PANEL_LIST
        }).append(bControls.map(type => this.renderBoardControl(type)));
    }

    renderBoardControl (bControl = {}) {
        return $(ELEMENT_LI, {
            [CLASS_NAME]: CSS_TOOL_ELEMENT
        }).on(MOUSE_CLICK, bControl.handleSelect.bind(bControl))
            .append(bControl.getTypeIcon());
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

    update () {
        const wrapper = $(`.${this.className}`);
        wrapper.empty();
        wrapper.append(this.renderHeader(), this.renderTopList());
        if (this.boardControls != null) {
            wrapper.append(this.renderBoardControls(this.boardControls.getTypes()));
        }
        return wrapper;
    }

    render () {
        const wrapper = this.renderWrapper();
        const items = this.renderTopList();
        const header = this.renderHeader();
        wrapper.append(header, items);
        if (this.boardControls != null) {
            wrapper.append(this.renderBoardControls(this.boardControls));
        }
        return wrapper;
    }
}

export default TopView;