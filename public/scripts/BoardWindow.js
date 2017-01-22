"use strict";
define("BoardWindow", ["UI", "Video", "Canvas", "ViewFiles"], function(UI, Video, Canvas, ViewFiles) {
	var TEST_VIDEO_URL = "http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv";
	// var TEST_VIDEO_URL = "static/SampleVideo_1280x720.mp4";
	var BoardWindow = function(name) {
		this.name = name;
		this._id = BoardWindow.randomId();
		this._currentView = 0;
		this.isActive = false;

		// board element
		this.boardElement = null;
		// views elemenets
		// this.videoElement = null;
		// this.canvasElement = null;
		var v = new Video(TEST_VIDEO_URL);
		var c = new Canvas();
		this.files = new ViewFiles();
		this._elements = [v, c];
	};
// 
	BoardWindow.views = {
		0: ["video"],
		1: ["canvas"],
		// 2: ["video", "canvas"]
	};


	BoardWindow.randomId = function() {
		var str = "BoardWindow";
		var res = "";
		for(var i = 0; i < str.length; i++) {
			if (i % 3 == 0) {
				res+= "$+";
			} else {
				res+= str[Math.ceil(Math.random() * i)];
			}
		}
		return res;
	};

	
	BoardWindow.prototype.getId = function() {
		return this._id;
	};
	BoardWindow.prototype.setCurrentView = function() {
		var views = BoardWindow.views;
		var c, v;
		v = this._elements[0],
		c = this._elements[1];
		for(var k in views) {
			switch(this._currentView) {
				case 0:
					v.setActive(true);
					c.setActive(false);
					return 1;
				break;
				case 1:
					v.setActive(false);
					c.setActive(true);
					return 0;
				break;
			}
		};
	}

	BoardWindow.prototype.renderVideo = function() {
		
	};
	BoardWindow.prototype.renderCanvas = function() {
		
	};
	BoardWindow.prototype.render = function() {
		var main = UI.createElement({
			type: "div",
			className: "board-window",
			id: this._id
		});
		var content = this.renderContent();
		var asidePanel = this.renderAsidePanel();
		// this.canvasElement;
		main.appendChild(asidePanel);
		main.appendChild(content);
				// this.setCurrentView();
		return main;
		
	};
	BoardWindow.prototype.renderContent = function() {
		
		var wrapper = UI.createElement({
			type: "div",
			className: "board-content"
			// child: head
		});
		this._elements.forEach(function(el) {
			var block = el.render();
			wrapper.appendChild(block);
		});


		return wrapper;
	};
	BoardWindow.prototype.update = function() {
		var main = document.getElementById(this._id);
		main.innerHTML = "";
		var blocks = this.renderContent();
		var asidePanel = this.renderAsidePanel();
		main.appendChild(asidePanel);
		main.appendChild(blocks);

	};
	BoardWindow.prototype.switchBlocks = function() {
		this._elements = this._elements.reverse();
		// this.update();
		var b = document.querySelector(".board-content");
		if (b != null) {
			b.classList.toggle("reverse");
		}
		return this;
	};
	BoardWindow.prototype.toggleViews = function() {
		this._currentView = this.setCurrentView();
		// this.update();
	};

	BoardWindow.prototype.renderAsidePanel = function() {
		var asidePanel = UI.createElement({
			type: "div",
			className: "board-asidePanel"
		});
		var self = this;
		// if (this._currentView == 2) {
			var switchButton = UI.createElement({
				type: "button",
				className: "asidePanel-switchButton",
				eventType: "click",
				name: "switch",
				event: function(e) {
					e.preventDefault();
					self.switchBlocks();
				}
			});
			// switchButton.setAttribute("disabled", true);
			asidePanel.appendChild(switchButton);

		// } 
		var toggleButton = UI.createElement({
			type: "button",
			className: "asidePanel-toggleButton",
			eventType: "click",
			name: "toggle",
			event: function(e) {
				e.preventDefault();
				self.toggleViews();
			}
		});
		var files = this.files.render();
		asidePanel.appendChild(toggleButton);
		asidePanel.appendChild(files);
		// if (this.files.listIsOpen) {
		// 	var l = this.file.renderList();
		// 	asidePanel.appendChild(l);
		// }
		return asidePanel;
	};
	return BoardWindow;
});
