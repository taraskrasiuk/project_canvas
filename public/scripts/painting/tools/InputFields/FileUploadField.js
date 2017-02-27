import $ from "jquery";
import InputField from "./InputField";
import {
    ELEMENT_INPUT
} from "../../../Constants";

class FileUpload extends InputField {
    constructor(props = {}) {
        super(props);
        this._type = "file";
        this.onUpload = props.onUpload;

    }

    upload (e, cb) {
        const self = this;
        const reader = new FileReader();
        const img = new Image();
        reader.onload = (ev) => {
            img.onload = () => {

            };
        };
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = (e) => {
            img.src = e.target.result;
            cb({name: self.name, value: img});
        }
    }
    render (handler) {
        const self = this;
        const file = $(ELEMENT_INPUT, {
            "class": this.className,
            "type": this._type,
        }).on("change", (e) =>{
            if (self.onUpload != null) {
                self.onUpload(e);
            } else {
                this.upload(e, handler);
            }
        });
        return this.getLabel(file);
    }
}

export default FileUpload;
