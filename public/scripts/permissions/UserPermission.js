import {ROLE_USER} from "./PermissionConstants";

class UserPermission {
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

export default UserPermission;
