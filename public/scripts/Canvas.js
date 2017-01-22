"use strict";

define("Canvas", ["UI", "CanvasTools"], function(UI, CanvasTools){
	var Canvas = function() {
		this._isActive = true;
		this.canvasTools = new CanvasTools();
		// this.c = document.createElement("canvas");
		// this.c.classList.add("canvas-element");
		this._canvasElement = null;
		this.canvas = null;
		// this.canvas.on("mouse:move", function(option){
		// 	this.canvas.renderAll();
		// }, false);
		this.isInit = false;


		// drawing
		this.isDrawing = false;
		this.isDragging = false;
		this.isMouseDown = false;
		this.currentShape = null;
		this.currentShapeType = null;
		this.startLocations = {};

	};
	Canvas.prototype.setActive = function(bool) {
		this._isActive = bool;
		var c = document.querySelector(".canvas-wrapper");
		if (c != null && !bool) {
			c.classList.add("close");
			c.classList.remove("open");
		} else if (c != null && bool){
			c.classList.remove("close");
			c.classList.add("open");

		}
		return this;
	};
	Canvas.prototype.getActive = function() {
		return this._isActive;
	};
	Canvas.prototype.render = function() {
		// var cls = "canvas-wrapper " + (this.isActive ? "open" : "close");
		// var wrapper = UI.createElement({
		// 	type: "div",
		// 	className: "canvas-wrapper",

		// });
		// if (this._isActive) {
		// 	wrapper.classList.add("open");
		// } else {
		// 	wrapper.classList.remove("open");
		// 	wrapper.classList.add("close")
		// }
		// if (this._isActive) {
		// 	wrapper.classList.add("open");	
		// } else {
		// 	wrapper.classList.add("remove");
		// }
		var self = this;
		if (this.isInit) {
			// this._canvasElement = this.renderCanvas();
			// wrapper.appendChild(self._canvasElement);
			return self._canvasElement;

		} else {
			var wrapper = UI.createElement({
				type: "div",
				className: "canvas-wrapper",

			});
			if (this._isActive) {
				wrapper.classList.add("open");
			} else {
				wrapper.classList.remove("open");
				wrapper.classList.add("close")
			}
			wrapper.classList.add("init");
			// wrapper.classList.add("close");
			// wrapper.appendChild(this._canvasElement);
			// this.canvas = new fabric.Canvas(this._canvasElement, {
			// 	selection: false,
			// 	isDrawingMode: true
			// });
			self._canvasElement = this.renderCanvas();
			wrapper.appendChild(self._canvasElement);
			// self._canvasElement.classList.add("init");
			var img = UI.createElement({
				type: "img",
				className: "init-img"
			});
			img.setAttribute("src", "static/images/init_paint.png");
			var initButton = UI.createElement({
				type: "div",
				className: "init-btn",
				child: img,
				eventType: "click",
				event: function(e) {
					e.preventDefault();
					self.isInit = true;
					var p = e.target.parentElement;
					if(p.classList.contains("init-btn")) {
						p.remove();
					}
					var c = document.querySelector(".canvas-wrapper");
					if (!self._isActive) {
						c.classList.add("close");
					
}					var tools = UI.createElement({
						type: "div",
						className: "tools"
					});
					/*	Tools groups */
					var canvasShapes = self.canvasTools.toolGroup("shapes", CanvasTools.toolsShapes, function(toolName) {
						console.log("click on " + toolName);
						// self.isDrawingMode = false;
						if (toolName != "brush") {
							self.currentShapeType = toolName;
							self.canvas.isDrawingMode = false;
							self.isDrawing = false;
						} else {

							self.isDrawing = true;
							self.canvas.isDrawingMode = true;
							self.canvas.freeDrawingBrush = new fabric['PencilBrush'](self.canvas);
							self.canvas.freeDrawingBrush.freeDrawingBrush.selectable = false;
							self.canvas.freeDrawingBrush.color = 'Black';
							self.canvas.freeDrawingBrush.width = 4;
							// self.canvas.selection = false;
						}
					});
					var canvasColors = self.canvasTools.toolGroup("Colors", CanvasTools.toolsColors, function(toolName) {
						console.log("click on " + toolName);
					});
					var canvasTransforms = self.canvasTools.toolGroup("Transforms", CanvasTools.toolsTransforms, function(toolName) {
						console.log("click on " + toolName);
					});
					var groups = [canvasShapes, canvasColors, canvasTransforms];
					groups.forEach(function(g) {
						tools.appendChild(g);
					});

					c.appendChild(tools);
					c.appendChild(self._canvasElement);
					var p = self._canvasElement.parentElement;

					self._canvasElement.width = p.offsetWidth - (tools.offsetWidth);
					self._canvasElement.height = p.offsetHeight;
					self.canvas = new fabric.Canvas("canvas-element");
					self.initListeners(self.canvas);

					// save in STATE

					self._canvasElement = c;
				}
			});
			wrapper.appendChild(initButton);
			return wrapper;

		}

		// self._canvasElement = wrapper;
		// return wrapper;
	}
	Canvas.prototype.renderCanvas = function() {
		var c = UI.createElement({
			type: "canvas",
			className: "canvas-element"
		});
		// c.width = "100"
		c.setAttribute("id","canvas-element");
		
		return c;
	}


	// Canvas.startLocations = {};	
	Canvas.MouseEvents = {
		MOUSE_DOWN : "mouse:down",
		MOUSE_MOVE: "mouse:move",
		MOUSE_UP: "mouse:up"
	};
	Canvas.prototype.initListeners = function(canvas) {
		var self = this;
	// mouse down
		canvas.observe(Canvas.MouseEvents.MOUSE_DOWN, function(option){
			canvas.selection = false;
			self.isMouseDown = true;
			if (option.target != null) {

				return ;
			}
			if (self.isDrawing || canvas.isDrawingMode) {
				// canvas.isDrawingMode = true;
				// canvas.freeDrawingBrush = new fabric['PencilBrush'](canvas);
				// canvas.freeDrawingBrush.color = 'Black';
				// canvas.freeDrawingBrush.width = 4;
				  // canvas.renderAll();
			} else {
				self.startLocations.x = option.e.offsetX;
				self.startLocations.y = option.e.offsetY;
				self.currentShape = self.getShape(self.currentShapeType);
				if (self.currentShape && !self.isDragging) {
				canvas.add(self.currentShape);
				


				canvas.observe(Canvas.MouseEvents.MOUSE_MOVE, function(option){
					console.log("MOUSE MOVE");
					if(!self.isDrawing && self.isMouseDown && self.currentShape) {
						var isCircle = self.currentShape instanceof fabric.Circle;
				        var isRect = self.currentShape instanceof fabric.Rect;
				        var isTriangle = self.currentShape instanceof fabric.Triangle;
				        var isEllipse = self.currentShape instanceof fabric.Ellipse;
				        var isLine = self.currentShape instanceof fabric.Line;
				        var origX = option.e.offsetX;
				        var origY = option.e.offsetY;
				          if (isCircle) {
				            self.currentShape.set({ radius: Math.abs(origX - self.startLocations.x) });
				          }
				          if (isRect) {
				            self.currentShape.set({width:  origX - self.startLocations.x});
				            self.currentShape.set({height: origY - self.startLocations.y});
				          }
				          if (isTriangle) {
				            self.currentShape.set({ width: Math.abs(origX - self.startLocations.x),height: Math.abs(origY - self.startLocations.y)});
				          }
				          if (isEllipse) {
				            self.currentShape.set({rx: Math.abs(origX - self.startLocations.x), ry: Math.abs(origY - self.startLocations.y)});
				          }
				          if (isLine) {
				            console.log("LINE");
				            self.currentShape.set({ x2: self.startLocations.x, y2: self.startLocations.y });
				          }
				          canvas.renderAll();
				        }

				}.bind(self), false);

				}
			}
			// self.isMouseDown = true;
			console.log("MOUSE DOWN");
		});
	

		canvas.observe(Canvas.MouseEvents.MOUSE_UP, function(option) {
			// console.log("MOUSE UP");
			// if (self.isDrawing) {
			// 	self.isDrawing = false;
			// 	self.isDragging = true;
			// 	canvas.selection = true;
			// 	canvas.isDrawingMode = false;
			// 	self.isMouseDown = false;
			// 	self.currentShape = null;
			// }
			// canvas.off(Canvas.MouseEvents.MOUSE_MOVE);
			self.isMouseDown = false;
			canvas.isDrawingMode = false;
		    canvas.selection= true;
		    self.currentShape = null;
		    // canvas.off('mouse:down');
		   	 canvas.off('mouse:move');
		    // canvas.off('mouse:up');
		    canvas.forEachObject(function(o){ o.setCoords() })

		});
	}

	Canvas.prototype.getShape = function (type) {
		var self = this;
		  // var fillColor = document.getElementById("fillColor").value;
		  // var strokeColor = document.getElementById("strokeColor").value;
		  var strokeColor = "#ddd";
		  var fillColor = "#333";
			switch(type) {
		  	case "circle":
		    	self.currentShape = new fabric.Circle({
		      left: self.startLocations.x,
		      top: self.startLocations.y,
		      radius: 1,
		      strokeWidth: 1,
		      stroke: strokeColor,
		      fill: fillColor,
		      selectable: true,
		      originX: 'center', originY: 'center'
		    });
		    return self.currentShape;
		    case "rectangle" :
		      self.currentShape = new fabric.Rect({
		        left: self.startLocations.x,
		        top: self.startLocations.y,
		        width: 1,
		        height: 1,
		        strokeWidth: 1,
		        stroke: strokeColor,
		        fill: fillColor,
		        selectable: true,
		        originX: 'center', originY: 'center'
		      });
		      return self.currentShape;
		    case "triangle" :
		      self.currentShape = new fabric.Triangle({
		        left: self.startLocations.x,
		        top: self.startLocations.y,
		        strokeWidth: 1,
		        width:2,
		        height:2,
		        stroke: strokeColor,
		        fill: fillColor,
		        selectable: true,
		        originX: 'center'
		      });
		      return self.currentShape;
		      case "ellipse":
		        self.currentShape = new fabric.Ellipse({
		          left: self.startLocations.x,
		          top: self.startLocations.y,
		          strokeWidth: 1,
		          stroke: strokeColor,
		          fill: fillColor,
		          selectable: true,
		          originX: 'center', originY: 'center',
		           rx: 5,
		          ry: 1
		        });
		        return self.currentShape;
		      case "line":
		        var points = [self.startLocations.x, self.startLocations.y, self.startLocations.x, self.startLocations.y];
		        self.currentShape =  new fabric.Line(points, {
		          left: self.startLocations.x,
		          top: self.startLocations.y,
		          strokeWidth: 1,
		          fill: fillColor,
		          stroke: strokeColor,
		          originX: 'center',
		          originY: 'center',
		          selectable: true
		        });
		        return self.currentShape;
		        // self.startLocations.x "brush" :
		      	// self.currentShape = null;
		      	// self.isDrawingMode = true;
		        // return "brush";
		    // default:
		    // return "brush";
		  }
		  // return self.currentShape;
		}


		return Canvas;
	});
	