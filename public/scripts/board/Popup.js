import $ from "jquery";

const defaultPropsForPopup = {
    title: "testTitle",
    content: "test content",
    size: "small", // small, medium, big,
    fields: ["user", "host"], // array that will be map in input with label
    actions: [{
        actionName: "start",
        actionHandler: (e => {
            console.log("start");
        })
    }, {
        actionName: "cancel",
        actionHandler: (e => {
            console.log("cancel");
        })
    }]
};

class Popup {
    constructor(props = {}) {
        this.title = props.title || null;
        this.content = props.content || null;
        this.size = props.size || "small";
        this.fields = props.fields || [];
        this.actions = props.actions || [];
    }
    getField (field = {}) {
        const label = $("<label></label>", {
            "class": "popup-label",
            "for": field.name
        }).text(field.name);
        const input = $("<input />", {
            type: "text",
            id: field.name,
            value: "",
            "class": "popup-input"
        });
        const line = $("<div></div>", {
            "class": "popup-line"
        }).append(label.append(input));
        return line;
    }
    getTitle () {
        return $("<h4></h4>").text(this.title);
    }
    getContent () {
        return $("<p></p>").text(this.content);
    }
    _getAction (action = {}) {
        return $("<button></button>", {
            "class": "popup-action"
        }).on("click", e => {
            e.preventDefault();
            action.actionHandler(action.actionName);
        });
    }

    getAllActions (actions = []) {
        return $("<div></div>", {
            "class": "popup-actions"
        }).append(actions.map(ac => this._getAction(ac)));
    }

    render () {
        const wrapper = $("<div></div>", {
            "class": "popup"
        });
        if (this.title != null) {
            wrapper.append(this.getTitle());
        }
        if (this.content != null) {
            wrapper.append(this.getContent());
        }
        if (this.fields != null && this.fields.length > 0) {
            this.fields.forEach(f => {
                wrapper.append(this.getField(f));
            });
        }
        if (this.actions != null && this.actions.length > 0) {
            wrapper.append(this.getAllActions(this.actions));
        }
        return wrapper;
    }
}

export default Popup;