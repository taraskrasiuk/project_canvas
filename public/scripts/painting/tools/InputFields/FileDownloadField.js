import InputField from "./InputField";
import $ from "jquery";

class FileDownloadField extends InputField {
    constructor(props = {}) {
        super(props);
        this._type = "link";
        this.className = props.className || ("tool-" + this._type);
    }

    handleDownload (e) {
        e.preventDefault();
        $("."+this.className).attr("href", document.getElementById("canvas-element").toDataURL())
            .attr("download", "test.png");
            // PATH callback
    }

    render () {
        const download = $("<a />", {
            "class": this.className,
            "text": "download"
        }).on("click", this.handleDownload.bind(this));
        // return this.getLabel(download);
        return download;
    }
}

export default FileDownloadField;

