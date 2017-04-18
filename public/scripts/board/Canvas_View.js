import $ from "jquery";
import View from "../global/View";
import ToolsView from "../painting/tools/ToolsView";

const getParentWidthAndHeight = (queryClass) => {
    const parent = $(`.${queryClass}`);
    return {
        w: parent.width(),
        h: parent.height()
    };
};

class Canvas_View extends View {
    constructor(props = {}) {
        super({className: props.className, active: props.active});
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id", "canvas");
        // TODO : width
        this.canvas.style.marginLeft = "59px";
        // TODO find way for dynamic width and height canvas
        const offset = getParentWidthAndHeight("board-content");
        this.canvas.width = offset.w - 59;
        this.canvas.height = offset.h;
        this.controller = new props.controller({canvas: this.canvas, modelConstructor: props.modelConstructor});
        // set view to controller
        this.controller.setView(this);
        //


        this.showTools = props.showTools || false;
        this.tools = new ToolsView({
            tools: props.tools || ["brush", "shapes", "background", "erase", "select"],
            handleTool: (tool) => this.controller.handleTool(tool),
            handleOption: (data) => this.controller.handleOptionTool(data),

            // ref
            handlePDFUpload: (data) => this.controller.handlePDFUpload(data),
            handleImageUpload: (data) => this.controller.handleImageUpload(data),

            handleHistoryNext: (e) => this.controller.historyNext(),
            handleHistoryPrev: (e) => this.controller.historyBack(),

            position: props.position
        });
    }

    getMouse(e) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width,
            y: (e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height
        }
    }

    handleMouseDown (e) {
        console.log("down");
        const pos = this.getMouse(e);
        this.controller.setStartPositions(pos);
    }

    handleMouseMove (e) {
        console.log('move');
        const pos = this.getMouse(e);
        this.controller.setUpdatedPositions(pos);
    }

    handleMouseUp (e) {
        console.log("up");
        const pos = this.getMouse(e);
        this.controller.handleMouseUp(pos);
    }

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


    handleCanvasResize (e) {

        console.log("canvas start resize" , e);
    }

    renderCanvasView () {
        $(this.canvas).on("mousedown", this.handleMouseDown.bind(this));
        $(this.canvas).on("mousemove", this.handleMouseMove.bind(this));
        $(this.canvas).on("mouseup", this.handleMouseUp.bind(this));
        $(this.canvas).on("doubleclick", this.handleDoubleClick.bind(this));

        // $(this.canvas).on("resize", this.handleCanvasResize.bind(this));
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
        return this.canvas;
    }
}

export default Canvas_View;
