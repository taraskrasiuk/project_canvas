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

class CanvasPaint {
	constructor(props) {
		this.canvas = null;
		this.currentTool = null;
		this.tools = new CanvasTools();

		// test
		this.c = this.renderCanvasElement();

		this.isDrawing = false;
		this.isDragging = false;
		this.isMouseDown = false;
		this.currentShape = null;
		this.currentShapeType = null;
		this.startLocations = {};
	}

	renderCanvasElement () {
		const c = $(ELEMENT_CANVAS, {
			id: "canvas-element"
		});
		return c;
	};

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

	render () {
		const canvasElement = $(ELEMENT_CANVAS, {
			"class": "canvas-element",
			id: "canvas-element"
		});
		const boardContent = $(".board-content");
		boardContent.empty().append(canvasElement);
		const _c = document.querySelector(".canvas-element");
		// $(canvasElement).outerWidth(can)
		_c.width = _c.parentElement.offsetWidth;
		_c.height = _c.parentElement.offsetHeight;
		this.canvas = new fabric.Canvas("canvas-element", {
			selection: false,
			freeDrawingMode: true
		});
		// this.canvas.setWidth = $(_c).outerWidth();
		// this.canvas.setHeight = $(_c).outerHeight();
		return _c;
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


class Canvas extends Block{
	constructor() {
		super({key: "canvas", element: $(ELEMENT_CANVAS, {id: "canvas"}), isActive: true, createElement: new CanvasPaint()});
		// this._isActive = false;
		// this.canvasTools = new CanvasTools();
		// this._canvasElement = null;
		// this.canvas = null;
		// this.isInit = false;


		// drawing
		// this.isDrawing = false;
		// this.isDragging = false;
		// this.isMouseDown = false;
		// this.currentShape = null;
		// this.currentShapeType = null;
		// this.startLocations = {};

		// this.MouseEvents = {
			// MOUSE_DOWN : "mouse:down",
			// MOUSE_MOVE: "mouse:move",
			// MOUSE_UP: "mouse:up"
		// };
	}

	// setActive (bool) {
	// 	this._isActive = bool;
	// 	var c = document.querySelector(".canvas-wrapper");
	// 	if (c != null && !bool) {
	// 		c.classList.add("close");
	// 		c.classList.remove("open");
	// 	} else if (c != null && bool){
	// 		c.classList.remove("close");
	// 		c.classList.add("open");

	// 	}
	// 	return this;
	// };
	// getActive () {
	// 	return this._isActive;
	// };
	// render () {
	// 	var self = this;
	// 	if (this.isInit) {
	// 		// this._canvasElement = this.renderCanvas();
	// 		// wrapper.appendChild(self._canvasElement);
	// 		return self._canvasElement;

	// 	} else {
	// 		var wrapper = UI.createElement({
	// 			type: "div",
	// 			className: "canvas-wrapper",

	// 		});
	// 		if (this._isActive) {
	// 			wrapper.classList.add("open");
	// 		} else {
	// 			wrapper.classList.remove("open");
	// 			wrapper.classList.add("close")
	// 		}
	// 		wrapper.classList.add("init");
	// 		self._canvasElement = this.renderCanvas();
	// 		wrapper.appendChild(self._canvasElement);
	// 		// self._canvasElement.classList.add("init");
	// 		var img = UI.createElement({
	// 			type: "img",
	// 			className: "init-img"
	// 		});
	// 		img.setAttribute("src", "static/images/init_paint.png");
	// 		var initButton = UI.createElement({
	// 			type: "div",
	// 			className: "init-btn",
	// 			child: img,
	// 			eventType: "click",
	// 			event: function(e) {
	// 				e.preventDefault();
	// 				self.isInit = true;
	// 				var p = e.target.parentElement;
	// 				if(p.classList.contains("init-btn")) {
	// 					p.remove();
	// 				}
	// 				var c = document.querySelector(".canvas-wrapper");
	// 				if (!self._isActive) {
	// 					c.classList.add("close");
	// 				}
	// 				var tools = UI.createElement({
	// 					type: "div",
	// 					className: "tools"
	// 				});
	// 				/*	Tools groups */
	// 				var canvasShapes = self.canvasTools.toolGroup("shapes", CanvasTools.toolsShapes, function(toolName) {
	// 					console.log("click on " + toolName);
	// 					// self.isDrawingMode = false;
	// 					if (toolName != "brush") {
	// 						self.currentShapeType = toolName;
	// 						self.canvas.isDrawingMode = false;
	// 						self.isDrawing = false;
	// 					} else {

	// 						self.isDrawing = true;
	// 						self.canvas.isDrawingMode = true;
	// 						self.canvas.freeDrawingBrush = new fabric['PencilBrush'](self.canvas);
	// 						self.canvas.freeDrawingBrush.freeDrawingBrush.selectable = false;
	// 						self.canvas.freeDrawingBrush.color = 'Black';
	// 						self.canvas.freeDrawingBrush.width = 4;
	// 						// self.canvas.selection = false;
	// 					}
	// 				});
	// 				var canvasColors = self.canvasTools.toolGroup("Colors", CanvasTools.toolsColors, function(toolName) {
	// 					console.log("click on " + toolName);
	// 				});
	// 				var canvasTransforms = self.canvasTools.toolGroup("Transforms", CanvasTools.toolsTransforms, function(toolName) {
	// 					console.log("click on " + toolName);
	// 				});
	// 				var groups = [canvasShapes, canvasColors, canvasTransforms];
	// 				groups.forEach(function(g) {
	// 					tools.appendChild(g);
	// 				});

	// 				c.appendChild(tools);
	// 				c.appendChild(self._canvasElement);
	// 				var p = self._canvasElement.parentElement;

	// 				self._canvasElement.width = p.offsetWidth - (tools.offsetWidth);
	// 				self._canvasElement.height = p.offsetHeight;
	// 				self.canvas = new fabric.Canvas("canvas-element");
	// 				self.initListeners(self.canvas);

	// 				// save in STATE

	// 				self._canvasElement = c;
	// 			}
	// 		});
	// 		wrapper.appendChild(initButton);
	// 		return wrapper;
	// 	}
	// };
	// renderCanvas () {
	// 	var c = UI.createElement({
	// 		type: "canvas",
	// 		className: "canvas-element"
	// 	});
	// 	// c.width = "100"
	// 	c.setAttribute("id","canvas-element");
		
	// 	return c;
	// };

	// initListeners (canvas) {
	// 	var self = this;
	// // mouse down
	// 	canvas.observe(this.MouseEvents.MOUSE_DOWN, function(option){
	// 		canvas.selection = false;
	// 		self.isMouseDown = true;
	// 		if (option.target != null) {

	// 			return ;
	// 		}
	// 		if (self.isDrawing || canvas.isDrawingMode) {
	// 			//
	// 		} else {
	// 			self.startLocations.x = option.e.offsetX;
	// 			self.startLocations.y = option.e.offsetY;
	// 			self.currentShape = self.getShape(self.currentShapeType);
	// 			if (self.currentShape && !self.isDragging) {
	// 			canvas.add(self.currentShape);
				


	// 			canvas.observe(this.MouseEvents.MOUSE_MOVE, function(option){
	// 				console.log("MOUSE MOVE");
	// 				if(!self.isDrawing && self.isMouseDown && self.currentShape) {
	// 					var isCircle = self.currentShape instanceof fabric.Circle;
	// 			        var isRect = self.currentShape instanceof fabric.Rect;
	// 			        var isTriangle = self.currentShape instanceof fabric.Triangle;
	// 			        var isEllipse = self.currentShape instanceof fabric.Ellipse;
	// 			        var isLine = self.currentShape instanceof fabric.Line;
	// 			        var origX = option.e.offsetX;
	// 			        var origY = option.e.offsetY;
	// 			          if (isCircle) {
	// 			            self.currentShape.set({ radius: Math.abs(origX - self.startLocations.x) });
	// 			          }
	// 			          if (isRect) {
	// 			            self.currentShape.set({width:  origX - self.startLocations.x});
	// 			            self.currentShape.set({height: origY - self.startLocations.y});
	// 			          }
	// 			          if (isTriangle) {
	// 			            self.currentShape.set({ width: Math.abs(origX - self.startLocations.x),height: Math.abs(origY - self.startLocations.y)});
	// 			          }
	// 			          if (isEllipse) {
	// 			            self.currentShape.set({rx: Math.abs(origX - self.startLocations.x), ry: Math.abs(origY - self.startLocations.y)});
	// 			          }
	// 			          if (isLine) {
	// 			            console.log("LINE");
	// 			            self.currentShape.set({ x2: self.startLocations.x, y2: self.startLocations.y });
	// 			          }
	// 			          canvas.renderAll();
	// 			        }

	// 			}.bind(self), false);

	// 			}
	// 		}
	// 		// self.isMouseDown = true;
	// 		console.log("MOUSE DOWN");
	// 	});
	

	// 	canvas.observe(this.MouseEvents.MOUSE_UP, function(option) {
	// 		self.isMouseDown = false;
	// 		canvas.isDrawingMode = false;
	// 	    canvas.selection= true;
	// 	    self.currentShape = null;
	// 	    // canvas.off('mouse:down');
	// 	   	 canvas.off('mouse:move');
	// 	    // canvas.off('mouse:up');
	// 	    canvas.forEachObject(function(o){ o.setCoords() })

	// 	});
	// };

	// getShape  (type) {
	// 	var self = this;
	// 	  var strokeColor = "#ddd";
	// 	  var fillColor = "#333";
	// 		switch(type) {
	// 	  	case "circle":
	// 	    	self.currentShape = new fabric.Circle({
	// 	      left: self.startLocations.x,
	// 	      top: self.startLocations.y,
	// 	      radius: 1,
	// 	      strokeWidth: 1,
	// 	      stroke: strokeColor,
	// 	      fill: fillColor,
	// 	      selectable: true,
	// 	      originX: 'center', originY: 'center'
	// 	    });
	// 	    return self.currentShape;
	// 	    case "rectangle" :
	// 	      self.currentShape = new fabric.Rect({
	// 	        left: self.startLocations.x,
	// 	        top: self.startLocations.y,
	// 	        width: 1,
	// 	        height: 1,
	// 	        strokeWidth: 1,
	// 	        stroke: strokeColor,
	// 	        fill: fillColor,
	// 	        selectable: true,
	// 	        originX: 'center', originY: 'center'
	// 	      });
	// 	      return self.currentShape;
	// 	    case "triangle" :
	// 	      self.currentShape = new fabric.Triangle({
	// 	        left: self.startLocations.x,
	// 	        top: self.startLocations.y,
	// 	        strokeWidth: 1,
	// 	        width:2,
	// 	        height:2,
	// 	        stroke: strokeColor,
	// 	        fill: fillColor,
	// 	        selectable: true,
	// 	        originX: 'center'
	// 	      });
	// 	      return self.currentShape;
	// 	      case "ellipse":
	// 	        self.currentShape = new fabric.Ellipse({
	// 	          left: self.startLocations.x,
	// 	          top: self.startLocations.y,
	// 	          strokeWidth: 1,
	// 	          stroke: strokeColor,
	// 	          fill: fillColor,
	// 	          selectable: true,
	// 	          originX: 'center', originY: 'center',
	// 	           rx: 5,
	// 	          ry: 1
	// 	        });
	// 	        return self.currentShape;
	// 	      case "line":
	// 	        var points = [self.startLocations.x, self.startLocations.y, self.startLocations.x, self.startLocations.y];
	// 	        self.currentShape =  new fabric.Line(points, {
	// 	          left: self.startLocations.x,
	// 	          top: self.startLocations.y,
	// 	          strokeWidth: 1,
	// 	          fill: fillColor,
	// 	          stroke: strokeColor,
	// 	          originX: 'center',
	// 	          originY: 'center',
	// 	          selectable: true
	// 	        });
	// 	        return self.currentShape;
	// 	  }
	// 	};
};

export default Canvas;
