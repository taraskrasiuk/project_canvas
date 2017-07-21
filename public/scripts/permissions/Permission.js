import {
    PERMISSION_CREATE_NEW_BOARD, PERMISSION_CREATE_NEW_STREAM, PERMISSION_EDITING,
    ROLE_ADMIN, ROLE_USER
} from "./PermissionConstants";
import {
    UserPermission
} from "./UserPermission";

class Permission {
    constructor() {

    }

    getPermission(user) {
        if (user != null && user instanceof UserPermission) {
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

export default Permission;