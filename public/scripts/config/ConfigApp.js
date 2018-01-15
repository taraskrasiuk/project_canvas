import {defaultConfig} from "./_defaultConfig";

class ConfigApp {
    constructor(props = {}) {
        this.host = props.host;
        this.port = props.port;
        this.user = props.user;
    }
}
export default ConfigApp;