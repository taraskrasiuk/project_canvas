import AppView from "./scripts/app/AppView";
import RecordView from "./scripts/global/record/RecordView";
import $ from "jquery";

// SET youtube AP
//ref tool

const LINE_WIDTH = "lineWidth";

class Tool {

    constructor({name, handler, options}) {
        this.name = name;
        this.handler = handler;
        this.options = options;
        this.selected = null;
    }
    static getImage () {

    }

    renderOptions () {
        return this.options.map(str => {
            return $("<div></div>")
                .on("click", (e => {
                    e.preventDefault();
                    this.handler({name: this.name, selected: str});
                }))
                .text(str);
        })
    }

    render () {
        const toolElement = $("<div></div>", {
           "class": "tool_update"
        }).on("click", (e => {
            e.preventDefault();
            this.handler({
                name: this.name
            })
        }));
        const img = $("<img/>", {
            src: "tool_" + this.name + ".png"
        }).appendTo(toolElement);

        return toolElement;
    }

}

class ToolFactory {
    constructor() {
        this.tools = {
            [LINE_WIDTH]: {
                name: LINE_WIDTH,
                options: [1,3,5,10,15],
                handler: (opts => {
                   const {name, selected} = opts;
                   console.log(name + " " + selected);
                })
            }
        };

    }


    render () {
        const wrapper = $("<div></div>", {
            "class": "tool_wrapper"
        });

        $("body").prepend(wrapper);

        // return wrapper;
    }
}









exports.MainBoard = AppView;
