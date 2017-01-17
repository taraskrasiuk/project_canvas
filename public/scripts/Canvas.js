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
		
	};
	Canvas.prototype.setActive = function(bool) {
		this._isActive = bool;
		var c = document.querySelector(".canvas-wrapper");
		if (c != null && !bool) {
			c.classList.add("close");
		} else if (c != null && bool){
			c.classList.remove("close")
		}
		return this;
	};
	Canvas.prototype.getActive = function() {
		return this._isActive;
	};
	Canvas.prototype.render = function() {
		// var cls = "canvas-wrapper " + (this.isActive ? "open" : "close");
		var wrapper = UI.createElement({
			type: "div",
			className: "canvas-wrapper",

		});
		var self = this;
		if (this.isInit) {

		} else {
			wrapper.classList.add("init");
			wrapper.classList.add("close");
			this._canvasElement = this.renderCanvas();
			wrapper.appendChild(this._canvasElement);
			// this.canvas = new fabric.Canvas(this._canvasElement, {
			// 	selection: false,
			// 	isDrawingMode: true
			// });
			this._canvasElement.classList.add("init");
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
					if (!this._isActive) {
						c.classList.add("close");
					}
					var tools = UI.createElement({
						type: "div",
						className: "tools"
					});
					/*	Tools groups */
					var canvasShapes = this.canvasTools.toolGroup("shapes", CanvasTools.toolsShapes, function(toolName) {
						console.log("click on " + toolName);
					});
					var canvasColors = this.canvasTools.toolGroup("Colors", CanvasTools.toolsColors, function(toolName) {
						console.log("click on " + toolName);
					});
					var canvasTransforms = this.canvasTools.toolGroup("Transforms", CanvasTools.toolsTransforms, function(toolName) {
						console.log("click on " + toolName);
					});
					var groups = [canvasShapes, canvasColors, canvasTransforms];
					groups.forEach(function(g) {
						tools.appendChild(g);
					});

					c.appendChild(tools);
					c.appendChild(this._canvasElement);
				}
			});
		}


		// } else {
			// wrapper.classList.add("close");
		

		// this._canvasElement = this.renderCanvas();
		
		
		// var tools = UI.createElement({
		// 	type: "div",
		// 	className: "tools"
		// });
		// /*	Tools groups */
		// var canvasShapes = this.canvasTools.toolGroup("shapes", CanvasTools.toolsShapes, function(toolName) {
		// 	console.log("click on " + toolName);
		// });
		// var canvasColors = this.canvasTools.toolGroup("Colors", CanvasTools.toolsColors, function(toolName) {
		// 	console.log("click on " + toolName);
		// });
		// var canvasTransforms = this.canvasTools.toolGroup("Transforms", CanvasTools.toolsTransforms, function(toolName) {
		// 	console.log("click on " + toolName);
		// });
		// var groups = [canvasShapes, canvasColors, canvasTransforms];
		// groups.forEach(function(g) {
		// 	tools.appendChild(g);
		// });

		// wrapper.appendChild(tools);
		// wrapper.appendChild(this._canvasElement);
		// this.canvas = new fabric.Canvas(this._canvasElement, {
		// 	selection: false,
		// 	isDrawingMode: true
		// });
		// wrapper.appendChild(canvasColors);
		// wrapper.appendChild(canvasTransforms);

		return wrapper;
	}
	Canvas.prototype.renderCanvas = function() {
		var c = UI.createElement({
			type: "canvas",
			className: "canvas-element"
		});
		return c;
	}
	return Canvas;
});