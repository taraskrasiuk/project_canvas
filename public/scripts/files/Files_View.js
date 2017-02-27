import View from "../global/View";

class Files_View extends View {
    constructor (props= {}) {
        super(props.className, props.active);
        const {path, files = [], onClick} = props;

        this.path = path;
        this.files = files;
        this.props = props;
    }

    renderFileElement (file = {}) {
        return $("<li></li>", {
            text: file.name,
            onClick: file.onClick,
            "class": "file-element"
        });
    };

    renderList (files = []) {
        const ul =  $("<ul></ul>", {
            "class": "file-list"
        });
        if (this.active) {
            ul.addClass("active");
        }
    }

    render () {
        const wrapper = this.renderWrapper();
        return wrapper.append(this.renderList(this.files));
    }
}

export default  Files_View;