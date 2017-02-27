import $ from "jquery";
import View from "../global/View";
import ToolsView from "../painting/tools/ToolsView";

class Canvas_View extends View {
    constructor(props = {}) {
        super({className: props.className, active: props.active});
        this.canvas = document.createElement("canvas");
        this.canvas.width = 300;
        this.canvas.height = 150;
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.controller = new props.controller({canvas: this.canvas, modelConstructor: props.modelConstructor});
        this.showTools = props.showTools || false;
        this.tools = new ToolsView({
            tools: props.tools || ["brush", "shapes", "background", "erase", "select"],
            handleTool: (tool) => this.controller.handleTool(tool),
            handleOption: (data) => this.controller.handleOptionTool(data)
        });
    }

    /**
     *
     * @param
     * @returns {{x: number, y: number}}
     */
    getMouse(e) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width,
            y: (e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height
        }
    }

    /**
     *
     * @param e
     */
    handleMouseDown (e) {
        console.log("down");
        const pos = this.getMouse(e);
        this.controller.setStartPositions(pos);
    }

    /**
     *
     * @param e
     */
    handleMouseMove (e) {
        console.log('move');
        const pos = this.getMouse(e);
        this.controller.setUpdatedPositions(pos);
    }

    /**
     *
     * @param e
     */
    handleMouseUp (e) {
        console.log("up");
        const pos = this.getMouse(e);
        this.controller.handleMouseUp(pos);
    }

    /**
     *
     * @param e
     */
    handleDoubleClick (e) {
        e.preventDefault();
        return ;
    }

    /**
     *
     * @returns {jQuery|HTMLElement}
     */
    update () {
        let wrapper = $("." + this.className);
        if (wrapper != null) {
            wrapper.replaceWith(this.renderCanvasView());
        } else {
            wrapper = this.renderCanvasView();
        }
        return wrapper;

    }

    /**
     *
     * @returns {jQuery|HTMLElement}
     */
    renderCanvasView () {
        $(this.canvas).on("mousedown", this.handleMouseDown.bind(this));
        $(this.canvas).on("mousemove", this.handleMouseMove.bind(this));
        $(this.canvas).on("mouseup", this.handleMouseUp.bind(this));
        $(this.canvas).on("doubleclick", this.handleDoubleClick.bind(this));
        const wrapper = this.renderWrapper();
        if (this.showTools) {
            wrapper.append(this.tools.render());
        }
        wrapper.append(this.getCanvas());
        return wrapper;
    }

    /**
     *
     * @returns {Element|*}
     */
    getCanvas () {
        let test = document.querySelector(".board-content");
        let w = 0, h = 0;
        if (test != null) {
            w = test.offsetWidth;
            h = test.offsetHeight;
            this.canvas.width = w;
            this.canvas.height = h;
        }
        return this.canvas;
    }
}

export default Canvas_View;
