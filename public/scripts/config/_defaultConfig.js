import {ROLE_ADMIN} from "../permissions/PermissionConstants";
import {UserPermission} from "../permissions/UserPermission";

export const defaultConfig = {
    host: "localhost",
    port: 8080,
    user: new UserPermission("Taras", ROLE_ADMIN)
};