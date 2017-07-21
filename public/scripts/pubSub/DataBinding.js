

class DataBinding {
    static instance;
    constructor() {
        if (DataBinding.instance) {
            return DataBinding.instance;
        }

        this._callbacks = {};
        DataBinding.instance = this;
    }

    on (msg, cb) {
        if (!this._callbacks[msg]) {
            this._callbacks.[msg] = [];
        }
        if (!this._callbacks[msg].indexOf(cb) >= 0) {
            this._callbacks[msg].push(cb);
        }
    }

    publish (msg) {
        let callbacks = this._callbacks[msg] || [];
        for(let i = 0, len = callbacks.length; i < len; i++) {
            callbacks[i].apply(this, msg);
        }
    }

    getDataAttribute (id) {
        return "data-bind-" + id;
    }

    getMessage (id) {
        return id + ":change";
    }

    changeHandler (e, id, value) {
        const target = e.target;
        const propName = target.getAttribute(this.getDataAttribute(id));
        if (propName != null && props != "") {
            const val = value != null ? value : target.value;
            this.publish(this.getMessage(id), propName, val);
        }
    }

    attachEvent (type) {
        if (document.addEventListener) {
            document.addEventListener(type || "change", this.changeHandler.bind(this), false);
        }
    }




}