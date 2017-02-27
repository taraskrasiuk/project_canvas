import CanvasTools from './CanvasTools';
import Block from '../Block';
import $ from "jquery";
import {
	ELEMENT_CANVAS,
	SHAPE_CIRCLE,
	SHAPE_RECTANGLE,
	SHAPE_TRIANGLE,
	SHAPE_ELLIPSE,
	SHAPE_LINE,
	MOUSE_DOWN,
	MOUSE_UP,
	MOUSE_MOVE
} from '../Constants';
import Brush from "../painting/shapes/Brush";
import CTools from "./CTools";
// import ContextState from "./ContextState";
import CanvasState from "./CanvasState";

const cToolsProps = {
	toolsSets: [
		{
			items: ["Brush", "Shapes"],
			toolsSetName: "default",
			callback: (e) => {console.log("from Main " + "default")}
		}
	],
	callback: (toolName) => {
		console.log(toolName);
	}
};

const upperFirstChar = (str) => {
	return str.substring(0, 1).toUpperCase().concat(str.substring(1));
}


class CanvasPaint {

	constructor(props) {
		this.tools = new CTools({
			toolsSets: [
				{
					items: ["Brush", "Shapes", "Background"],
					toolsSetName: "default",
					callback: (e) => {console.log(e + "_ from CanvasPaint")}
				}
			],
			callback: this.handleChangeToolName.bind(this)
		});
		this.canvas = null;
		this.context = null;
		this.snapShow = null;
		this.dragging = false;
		this.isDrawing = false;
		this.startLocations = {};
		this.currentShape = null;

	}
	handleChangeToolName (toolProps) {
		console.log(toolProps.name + " :" + toolProps.value);
		if (typeof toolProps == "string") {
			this.context.setCurrentTool(toolProps);
		} else if (typeof toolProps != "string" && toolProps.name == "fillShape") {
			this.context.setFill(toolProps.value);
		} else if (toolProps.name == "upload") {
			this.context.setBackgroundImage(toolProps);
		}
		else {
			this.context.merge(toolProps);
		}
	}

	getCanvasCoordinates (e) {
		const x = e.clientX - this.canvas.getBoundingClientRect().left;
		const y = e.clientY - this.canvas.getBoundingClientRect().top;
		return {
			x: x,
			y: y
		};
	};


	init (elementId) {
		const c = document.getElementById(elementId);
		this.canvas = c;
		this.canvas.width = c.parentElement.offsetWidth;
		this.canvas.height = c.parentElement.offsetHeight;
		this.canvas.style.cursor = "crosshair";
		this.context = new CanvasState({canvas: this.canvas});
		return this.canvas;
	}
};

export default CanvasPaint;
