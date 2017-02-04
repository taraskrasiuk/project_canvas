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
import io from "socket.io-client";

// Pencil
class Pencil {
	constructor(x, y, ctx) {
		this.x = x;
		this.y = y;
		this.ctx = ctx;
	}
	draw (pos) {
		this.ctx.moveTo(pos.x, pos.y);
		pos.x = this.x;
		pos.y = this.y;
		this.ctx.lineTo(this.x, this.y);
		this.ctx.stroke();
	}

}


class CanvasPaint {

	constructor(props) {
		// this.canvas = null;
		// this.currentTool = null;
		// this.tools = new CanvasTools({
		// 	handleBackgroundColorChange: (bgVak) => {
		// 		if (this.canvas != null) {
		// 			this.canvas.setBackgroundColor(bgVak);
		// 			this.canvas.renderAll();
		// 			this.socketSend();
		// 		}
		// 	},
		// 	handleDrawing: (val) => {
		// 		if (val != null && val == "Brush") {
		// 			this.isDrawing = true;
		// 			this.drawing();
		// 		}
		// 	},
		// 	handleShape: (val) => {
		// 		this.isDrawing = false;
		// 		this.initListeners();
		// 	},
		// 	handleText: (val) => {
		// 		this.drawText(val);
		// 	}
		// });
		// this.socket = io(); 


		// this.isDrawing = false;
		// this.isDragging = false;
		// this.isMouseDown = false;
		// this.currentShape = null;
		// this.currentShapeType = null;
		

		// refactor
		this.tools = new CanvasTools();
		this.canvas = null;
		this.context = null;
		this.snapShow = null;
		this.dragging = false;
		this.dragStartLocation = {};

	}


	getCanvasCoordinates (e) {
		const x = e.clientX - this.canvas.getBoundingClientRect().left;
		const y = e.clientY - this.canvas.getBoundingClientRect().top;
		return {
			x: x,
			y: y
		};
	};
	takeSnapshot () {
		this.snapShot = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
	};
	restoreSnapshot () {
		this.context.putImageData(this.snapShot, 0, 0);
	};
	mouseDown (e) {
		this.dragging = true;
		this.dragStartLocation = this.getCanvasCoordinates(e);
		this.takeSnapshot();
	};
	mouseMove (e) {
		let pos;
		if (this.dragging) {
			this.restoreSnapshot();
			pos = this.getCanvasCoordinates(e);
			this.draw(pos);
		}
	};
	mouseUp (e) {
		this.dragging = false;
		this.restoreSnapshot();
		const pos = this.getCanvasCoordinates(e);
		this.draw(pos);
	};

	draw(pos) {
		const fillColor = this.tools.fillColor;
		const shape = this.currentShape;

		// this.context.lineCap = lineCap;
		// this.context.globalCompositeOperation = composition;
		switch(this.tools.activeTool) {
			default:
				this.context.globalAlpha = .5;
				this.drawPencil(pos);
		}
	};

	drawPencil(position) {
		const pen = new Pencil(position.x, position.y, this.context);
		pen.draw(this.dragStartLocation);
	}



	// socketSend () {
	// 	// this.socket.emit("draw", JSON.stringify(this.canvas));
	// 	this.socket.emit("draw", this.canvas.toSVG());
	// }

	// renderCanvas () {
	// 	const canvasWrapper = $(".canvas-wrapper");
	// 	canvasWrapper.append(this.renderCanvasElement());
	// 	const canvas = new fabric.Canvas(canvasWrapper, {
	// 		freeDrawingMode: false,
	// 		selection: false
	// 	});
	// 	if (canvasWrapper != null) {
	// 		canvas.setWidth = $(canvasWrapper).outerWidth();
	// 		canvas.setHeight = $(canvasWrapper).outerHeight();
	// 	}
	// 	this.canvas = canvas;
	// 	return this.canvas;

	// };

	init (elementId) {
		// const c = $("#" + elementId);
		const c = document.getElementById(elementId);
		this.canvas = c;
		this.canvas.width = c.parentElement.offsetWidth;
		this.canvas.height = c.parentElement.offsetHeight;
		this.canvas.style.cursor = "crosshair";
		this.context = this.canvas.getContext("2d");
		$(this.canvas).on("mousedown", this.mouseDown.bind(this))
		.on("mousemove", this.mouseMove.bind(this))
		.on("mouseup", this.mouseUp.bind(this));

		// fabric.Object.prototype.selectable = false;
		// this.canvas = new fabric.StaticCanvas(elementId, {
		// 	selection: false,
		// 	width: c.width(),
		// 	height: c.height()
		// });

		// SOCKET
		
		// this.socket.on("draw", (data) => {
		// 		this.canvas.loadFromJSON(data);
		// 		this.canvas.renderAll();
		// });
		// this.initListeners();
		// const tools = this.tools.render();
		// const _div = $("<div></div>").css({display: "flex"})
		// .append(tools, c);
		return this.canvas;
	}

	// getShape (type) {
	// 	const strokeColor = this.tools.strokeColor;
	// 	const fillColor = this.tools.fillColor;
	// 	let shape;
	// 	if (type == "IText") {
	// 		return new fabric.Textbox("type", {
	// 			left: this.startLocations.x,
	// 			top: this.startLocations.y,
	// 			selectable: true
	// 		});
	// 	}
	// 	return new fabric[type]({
	// 		left: this.startLocations.x,
	// 		top: this.startLocations.y,
	// 		stroke: strokeColor,
	// 		fill: fillColor,
	// 		selectable: true,
	// 		strokeWidth: this.tools.strokeWidth
	// 		});
	// };

	// initListeners () {
	// 	this.canvas.observe(MOUSE_DOWN, (option) => {
	// 		// this.canvas.selection = false;
	// 		this.isMouseDown = true;
	// 		this.isDrawing = false;
	// 		this.canvas.isDrawingMode = false;

	// 		if (option.target != null) {
	// 			return ;
	// 		}
	// 		else if (!this.isDrawing) {
	// 			this.currentShape = this.getShape(this.tools.activeShape);
	// 			this.isDrawing = false;
	// 			// this.canvas.isDrawingMode = false;
	// 			this.startLocations.x = option.e.offsetX;
	// 			this.startLocations.y = option.e.offsetY;
	// 			this.currentShape = this.getShape(this.tools.activeShape);
	// 			if (this.currentShape && !this.isDragging) {
	// 			this.canvas.add(this.currentShape);
				


	// 			this.canvas.observe(MOUSE_MOVE, (option) => {
	// 				console.log("MOUSE MOVE");
	// 				if(this.isMouseDown && this.currentShape) {
	// 					const isCircle = this.currentShape instanceof fabric.Circle;
	// 			        const isRect = this.currentShape instanceof fabric.Rect;
	// 			        const isTriangle = this.currentShape instanceof fabric.Triangle;
	// 			        const isEllipse = this.currentShape instanceof fabric.Ellipse;
	// 			        const isLine = this.currentShape instanceof fabric.Line;
	// 			        const origX = option.e.offsetX;
	// 			        const origY = option.e.offsetY;
	// 			          if (isCircle) {
	// 			            this.currentShape.set({ radius: Math.abs(origX - this.startLocations.x) });
	// 			          }
	// 			          if (isRect) {
	// 			            this.currentShape.set({width:  origX - this.startLocations.x});
	// 			            this.currentShape.set({height: origY - this.startLocations.y});
	// 			          }
	// 			          if (isTriangle) {
	// 			            this.currentShape.set({ width: Math.abs(origX - this.startLocations.x),height: Math.abs(origY - this.startLocations.y)});
	// 			          }
	// 			          if (isEllipse) {
	// 			            this.currentShape.set({rx: Math.abs(origX - this.startLocations.x), ry: Math.abs(origY - this.startLocations.y)});
	// 			          }
	// 			          if (isLine) {
	// 			            console.log("LINE");
	// 			            this.currentShape.set({ x2: this.startLocations.x, y2: this.startLocations.y });
	// 			          }
	// 			          // this.canvas.bringToFront(this.currentShape);
	// 			          this.canvas.renderAll();
	// 			          // this.socketSend();


	// 			        }

	// 			}, false);

	// 			}
	// 		}
	// 		// self.isMouseDown = true;
	// 		console.log("MOUSE DOWN");
	// 	});
	

	// 	this.canvas.observe(MOUSE_UP, (option) => {
	// 		this.isMouseDown = false;
	// 		if (this.isDrawing) {
	// 			this.isDrawing = false;
	// 			this.canvas.isDrawingMode = false;
	// 		}
	// 	    // this.canvas.selection= true;
	// 	    this.currentShape = null;
	// 	   	this.canvas.off(MOUSE_MOVE);
	// 	   	this.canvas.off(MOUSE_DOWN);
	// 	    // this.canvas.forEachObject((o) => { o.setCoords(); });
	// 	});
	// }

	// drawText(val) {
	// 	this.canvas.observe(MOUSE_DOWN, (option) => {
	// 		this.startLocations.x = option.e.offsetX;
	// 		this.startLocations.y = option.e.offsetY;
	// 		const iText = this.getShape(val);

	// 		this.canvas.observe(MOUSE_UP, (o) => {
	// 			this.canvas.add(iText);
	// 			iText.enterEditing();
	// 			this.canvas.off(MOUSE_DOWN);
	// 			// this.socketSend();
	// 		});
	// 	});
		
	// }

	// drawing() {
	// 	this.isDrawing = true;
	// 	this.canvas.isDrawingMode  = true;
	// 	// this.canvas.freeDrawingBrush = this.brush();
	// 	this.canvas.freeDrawingBrush.color = this.tools.strokeColor;
 //      	this.canvas.freeDrawingBrush.width = this.tools.strokeWidth;
 //      	// this.canvas.observe(MOUSE_MOVE, (option) => {

 //      	// 	// console.log(this.canvas.toSVG());
 //      	// 	// this.canvas.freeDrawingBrush.sendToBack();
 //      	// 	// this.canvas.renderAll();
 //      	// 	// this.socketSend();
 //      	// 	this.canvas.observe(MOUSE_UP, (option) => {
 //      	// 		this.canvas.off(MOUSE_MOVE);
 //      	// 	});
 //      	// });

	// }

	// vLine () {
	// 	 var vLinePatternBrush = new fabric.PatternBrush(this.canvas);
	//     vLinePatternBrush.getPatternSrc = () => {

	//       var patternCanvas = fabric.document.createElement('canvas');
	//       patternCanvas.width = patternCanvas.height = 10;
	//       var ctx = patternCanvas.getContext('2d');

	//       ctx.strokeStyle = this.tools.strokeColor;
	//       ctx.lineWidth = this.tools.strokeWidth;
	//       ctx.beginPath();
	//       ctx.moveTo(0, 5);
	//       ctx.lineTo(10, 5);
	//       ctx.closePath();
	//       ctx.stroke();

	//       return patternCanvas;
	//     };
	//     return vLinePatternBrush;
	// }

	// brush () {
	// 	var d = new fabric.PencilBrush(this.canvas);
	// 	// d.selectable = false;
	// 	// d.sendToBack();
	// 	// this.canvas.sendBackwards(d);
	// 	this.canvas.freeDrawingBrush.color = this.tools.strokeColor;
	// 	this.canvas.freeDrawingBrush.width = this.tools.strokeWidth;
	// 	return d;
	// }
};

export default CanvasPaint;
