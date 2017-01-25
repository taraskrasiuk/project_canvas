import UI from './UI';
import CanvasTools from './CanvasTools';
import Block from './Block';
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
} from './Constants';
import {fabric} from 'fabric';


class CanvasPaint {

	constructor(props) {
		this.canvas = null;
		this.currentTool = null;
		this.tools = new CanvasTools();

		// test
		// this.c = this.renderCanvasElement();

		this.isDrawing = false;
		this.isDragging = false;
		this.isMouseDown = false;
		this.currentShape = null;
		this.currentShapeType = null;
		this.startLocations = {};
	}

	renderCanvas () {
		const canvasWrapper = $(".canvas-wrapper");
		canvasWrapper.append(this.renderCanvasElement());
		const canvas = new fabric.Canvas(canvasWrapper, {
			freeDrawingMode: false,
			selection: false
		});
		if (canvasWrapper != null) {
			canvas.setWidth = $(canvasWrapper).outerWidth();
			canvas.setHeight = $(canvasWrapper).outerHeight();
		}
		this.canvas = canvas;
		return this.canvas;

	};

	init (elementId) {
		const c = $("#" + elementId);
		this.canvas = new fabric.Canvas(elementId, {
			isDrawingMode: true
		});
		return this.canvas;
	}

	getShape (type) {
		const strokeColor = "#ddd";
		const fillColor = "#333";
		let shape;
		return new fabirc[type]({
			left: this.startLocations.x,
			top: this.startLocations.y,
			stroke: strokeColor,
			fill: fillColor,
			selectable: true
		});
	};

	initListeners () {
		this.canvas.observe(MOUSE_DOWN, (option) => {
			this.canvas.selection = false;
			this.isMouseDown = true;
			if (option.target != null) {
				return ;
			}
			if (this.isDrawing || this.canvas.isDrawingMode) {
				//
			} else {
				this.startLocations.x = option.e.offsetX;
				this.startLocations.y = option.e.offsetY;
				this.currentShape = this.getShape(this.currentShapeType);
				if (this.currentShape && !this.isDragging) {
				this.canvas.add(this.currentShape);
				


				this.canvas.observe(this.MouseEvents.MOUSE_MOVE, (option) => {
					console.log("MOUSE MOVE");
					if(!this.isDrawing && this.isMouseDown && this.currentShape) {
						const isCircle = this.currentShape instanceof fabric.Circle;
				        const isRect = this.currentShape instanceof fabric.Rect;
				        const isTriangle = this.currentShape instanceof fabric.Triangle;
				        const isEllipse = this.currentShape instanceof fabric.Ellipse;
				        const isLine = this.currentShape instanceof fabric.Line;
				        const origX = option.e.offsetX;
				        const origY = option.e.offsetY;
				          if (isCircle) {
				            this.currentShape.set({ radius: Math.abs(origX - this.startLocations.x) });
				          }
				          if (isRect) {
				            this.currentShape.set({width:  origX - this.startLocations.x});
				            this.currentShape.set({height: origY - this.startLocations.y});
				          }
				          if (isTriangle) {
				            this.currentShape.set({ width: Math.abs(origX - this.startLocations.x),height: Math.abs(origY - this.startLocations.y)});
				          }
				          if (isEllipse) {
				            this.currentShape.set({rx: Math.abs(origX - this.startLocations.x), ry: Math.abs(origY - this.startLocations.y)});
				          }
				          if (isLine) {
				            console.log("LINE");
				            this.currentShape.set({ x2: this.startLocations.x, y2: this.startLocations.y });
				          }
				          canvas.renderAll();
				        }

				}, false);

				}
			}
			// self.isMouseDown = true;
			console.log("MOUSE DOWN");
		});
	

		this.canvas.observe(MOUSE_UP, (option) => {
			this.isMouseDown = false;
			this.canvas.isDrawingMode = false;
		    this.canvas.selection= true;
		    this.currentShape = null;
		   	this.canvas.off('mouse:move');
		    this.canvas.forEachObject((o) => { o.setCoords(); })

		});
	}
};

export default CanvasPaint;
