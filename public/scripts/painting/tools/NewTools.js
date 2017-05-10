import $ from "jquery";
import Utils from "../../utils/Utils";
class NewTools {
    constructor(props = {}) {


        this.widthSelected = 5;
        this.zoomSelected = null;

        this.colorSelected = "#ff00ff";
        this.shapeSelected = "brush";

        this.toggle = {
            widthSelected: true,
            colorSelected: true,
            shapeSelected: true
        }
        this.props = props;
    }

    handleToggle (data) {
        // const data = e.target.getAttribute("data");
        Object.keys(this.toggle).forEach(key => {
            if (key == data) {
                this.toggle[key] = !this.toggle[key];
            } else {
                this.toggle[key] = true;
            }
        });
        // this.toggle[data] = !this.toggle[data];
        this.update();
    }

    handleSelect (type, data) {
        if (this[type] !== undefined) {

            this[type] = data;
            this.toggle[type] = !this.toggle[type];
            if (this.props.handleSelect != null) {
                this.props.handleSelect(data);
            }
            this.update();
        }

    }

    // update () {
    //     console.log("should update");
    // }

    getWidth () {
        const options = [3,5,10,15,25];
        const mappedOptions = options.map(op => {
            let cssClass = "";
            if (op == this.widthSelected) {
                cssClass+= " selected";
            }
            return ($("<div></div>", {"class": "tool" + cssClass})).append($("<div></div>", {
                "class": "tool-option width",
                "data": "width"
            }).css({width: `${op}px`, height: `${op}px`}))
                .on("click", (e) => {
                    // e.stopPropagation();
                    this.handleSelect("widthSelected", op);
                });
        });
        const divOptions = $("<div></div>", {
            "class": "tool-options"
        }).append(mappedOptions);
        const selected = $("<div></div>", {
            "class": "tool tool-main"
        })
            .on("click", (e) => {
                e.preventDefault();
                this.handleToggle("widthSelected");
            })
            .append($("<div></div>", {
                "class": "tool-option width",
                "data": "width"
            }).css({width: `${this.widthSelected}px`, height: `${this.widthSelected}px`}))

        return $("<div></div>", {
            "class": "tool tool-extend"
        }).append(selected, this.toggle["widthSelected"] ? null : divOptions);
    }

    getColor () {
        const options = ["#ffffff", "#000000", "#ff00ff", "#00ff00", "#9922ff"];
        const mappedOptions = options.map(op => {
            let cssClass = "";
            if (op == this.colorSelected) {
                cssClass+= " selected";
            }
            return ($("<div></div>", {"class": "tool" + cssClass}))
                .on("click", (e) => {
                    e.preventDefault();
                    this.handleSelect("colorSelected", op);
                })
                .append($("<div></div>", {
                    "class": "tool-option color",
                    "data": "color"
                }).css({background: op}));


        });
        const divOptions = $("<div></div>", {
            "class": "tool-options"
        }).append(mappedOptions);
        const selected = $("<div></div>", {
            "class": "tool tool-main"
        }).append($("<div></div>", {
            "class": "tool-option color",
            "data": "color"
        }).css({background: this.colorSelected}))
            .on("click", (e) => {
                e.preventDefault();
                this.handleToggle("colorSelected");
            });
        return $("<div></div>", {
            "class": "tool tool-extend"
        }).append(selected, this.toggle["colorSelected"] ? null : divOptions);
    }

    getTools () {
        const options = ["brush", "triangle", "ellipse", "rectangle", "line"];
        const mappedOptions = options.map(op => {
            let cssClass = "";
            if (op == this.shapeSelected) {
                cssClass += " selected";
            }
            return ($("<div></div>", {"class": "tool" + cssClass}))
                .on("click", (e) => {
                    e.preventDefault();
                    this.handleSelect("shapeSelected", op);
                })
                .append($("<div></div>", {
                    "class": "tool-option shape",
                    "data": "shape"
                }).append(UiUtils.renderIcon("tool_", op, true)));
        });

        const divOptions = $("<div></div>", {
            "class": "tool-options"
        }).append(mappedOptions);
        const selected = $("<div></div>", {
            "class": "tool tool-main"
        }).append($("<div></div>", {
            "class": "tool-option shape",
            "data": "shape"
        }).append(UiUtils.renderIcon("tool_", this.shapeSelected, true)))
            .on("click", (e) => {
                e.preventDefault();
                this.handleToggle("shapeSelected");
            });
        return $("<div></div>", {
            "class": "tool tool-extend"
        }).append(selected, this.toggle["shapeSelected"] ? null : divOptions);

    }

    getZoom () {

    }

    update () {
        $(".tools").empty().append(this.getWidth(), this.getColor(), this.getTools());
    }
    render () {

        const div = $("<div></div>", {
            "class": "tools"
        }).append(this.getWidth(), this.getColor(), this.getTools());

        // $("body").append(div);
        return div;


    }
}

export default NewTools;