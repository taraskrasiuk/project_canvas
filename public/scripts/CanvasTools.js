"use strict";

define("CanvasTools", ["UI"], function(UI) {
	var TOOL_IMG_PATH = "static/images/";
	var sameSet = {
		colors: {
				fillColor: true,
				strokeColor: true	
			},
			transforms: {
				strokeWidth: true			 
			}
		};

	var CanvasTools = function() {
		this.activeShape = null;

		this.set = "default";
	};
	CanvasTools.set = {
		default: {
			colors: {
				fillColor: true,
				strokeColor: true,
				backgroundColor: true
			},
			transforms: {
				strokeWidth: true			 
			}
		},
		brush: {
			colors: {
				strokeColor: true	
			},
			transforms: {
				strokeWidth: true
			}
		},
		rectangle: sameSet,
		triangle: sameSet,
		circle: sameSet,
		ellipse: sameSet
	};
	CanvasTools.toolsShapes = [
		"brush", "rectangle", "triangle", "circle", "ellipse"
	];
	CanvasTools.toolsColors = [
		"background", "fillColor", "strokeColor"
	];
	CanvasTools.toolsTransforms = [
		"strokeWidth"
	];
	CanvasTools.prototype.toolGroup = function(groupName, array, cb) {
		// var header = UI.createElement({
		// 	type: "h5",
		// 	className: "header"
		// });
		// header.textContent = groupName;
		var wrapper = UI.createElement({
			type: "div",
			className: "tool-group",
			child: document.createElement("br")
		});
		var self = this;
		array.forEach(function(el) {
			wrapper.appendChild(self.renderTool(el, cb));
		});
		return wrapper;

	};
	CanvasTools.prototype.toolsShapes = function() {
		var self = this;
		return CanvasTools.toolsShapes.map(function(el, idx) {
			console.log(this);
			return self.renderTool(el);
		});
	};
	CanvasTools.prototype.toolsColors = function() {
		var self = this;
		return CanvasTools.toolsColors.map(function(el, idx) {
			return self.renderTool(el);
		});
	};
	CanvasTools.prototype.toolsTransforms = function() {
		var self = this;
		return CanvasTools.toolsTransforms.map(function(el, idx) {
			return self.renderTool(el);
		});
	};


	CanvasTools.prototype.renderTool = function(name, cb) {
		var img = UI.createElement({
			type: "img",
			className: "tool-img"
		});
		img.setAttribute("src", TOOL_IMG_PATH + "tool_" + name + ".png");
		var self = this;
		var button = UI.createElement({
			type: "button",
			className: "tool-button",
			child: img,
			eventType: "click",
			event: function(e) {
				e.preventDefault();
				self.activeShape = name;
				this.classList.toggle("active");
				cb(name);
			}
		});
		return button;
	};
	CanvasTools.prototype.setActiveTool = function(tool) {
		this.activeTool = tool;
		return this;
	}
	return CanvasTools;
});