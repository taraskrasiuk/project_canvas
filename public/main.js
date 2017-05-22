import AppView from "./scripts/app/AppView";
import $ from "jquery";
// import Utils from "./scripts/utils/Utils";
import NewTool from "./scripts/painting/tools/NewTools";


// SET youtube AP


// UTILS



//roles
const ROLE_USER = "user";
const ROLE_ADMIN = "admin";

//permission
const PERMISSION_CREATE_NEW_BOARD = "createNewBoard";
const PERMISSION_CREATE_NEW_STREAM = "createNewStream";
const PERMISSION_EDITING = "editing";

class Permission {
    constructor() {

    }

    getPermission(user) {
        if (user != null && user instanceof User) {
            return Permission._ROLES[user.getRole()];
        } else {
            throw new Error("CHECK permission failed");
        }
    }

}

Permission._ROLES = {
    [ROLE_USER]: {
        [PERMISSION_CREATE_NEW_BOARD]: false,
        [PERMISSION_CREATE_NEW_STREAM]: false,
        [PERMISSION_EDITING]: true
    },
    [ROLE_ADMIN]: {
        [PERMISSION_CREATE_NEW_BOARD]: true,
        [PERMISSION_CREATE_NEW_STREAM]: true,
        [PERMISSION_EDITING]: true
    }
};

class User {
    constructor(props = {}) {
        this.name = props.name || "unknown";
        this.role = props.role || ROLE_USER;

    }

    getRole() {
        return this.role;
    }

    getName() {
        return this.name;
    }
}

// config

const defaultConfig = {
  host: "localhost",
    port: 8080,
    user: new User("Taras", ROLE_ADMIN)
};

class ConfigApp {
    constructor(props = {}) {
        this.host = props.host;
        this.port = props.port;
        this.user = props.user;
    }
}

class ToolOption {
    constructor(props = {}) {
        this.toolOptionName = props.toolOptionName;
        this.toolOptionHandler = props.toolOptionHanlder;
        // TODO: for time i call it addon. Option that will fire event, to show option details
        this.ADDON = props.ADDON;
    }
}


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




exports.MainBoard = NewTool;
