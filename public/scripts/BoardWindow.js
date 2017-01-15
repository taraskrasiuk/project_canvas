"use strict";
define("BoardWindow", [], function() {
	var BoardWindow = function(name) {
		this.name = name;
		this._id = BoardWindow.randomId();
		this._currentView = 1;
		this.isActive = false;

		// board element
		this.boardElement = null;
		// views elemenets
		this.videoElement = null;
		this.canvasElement = null;
	};

	BoardWindow.views = {
		0: ["video"],
		1: ["canvas"],
		2: ["video", "canvas"]
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

	BoardWindow.prototype.initBoard = function(element) {
		var board = document.createElement("div");
		board.setAttribute("id", "board_" + this._id);
		board.classList.add("board-window");
		this.boardElement = board;
		var asidePanel = this.renderAsidePanel();
		var header = document.createElement("h3");
		header.classList.add("head");
		header.textContent = this.name;
		// append boardWindow to element
		this.boardElement.appendChild(header);
		this.boardElement.appendChild(asidePanel);

		var main = document.getElementById(element);
		main.appendChild(this.boardElement);

		

	};
	BoardWindow.prototype.getId = function() {
		return this._id;
	};

	BoardWindow.prototype.renderVideo = function() {
		var v = document.createElement("div");
		v.setAttribute("id", this._id + "_" + "video");
		v.setAttribute("class", "board_video");
		this.videoElement = v;
	};
	BoardWindow.prototype.renderCanvas = function() {
		var c = document.createElement("div");
		c.setAttribute("id", this._id + "_" + "canvas");
		c.setAttribute("class", "board_canvas");
		this.canvasElement = c;
	};
	BoardWindow.prototype.renderAll = function() {
		var elems = [this.videoElement, this.canvasElement];
		elems.forEach(function(el) {
			if (el != null) {
				this.boardElement.appendChild(el);
			}
		});
	};
	BoardWindow.prototype.renderAsidePanel = function() {
		var asidePanel = document.createElement("div");
		asidePanel.classList.add("asidePanel");
		// var boardWindow = document.getElementById(this._id);
		return asidePanel;
	};
	return BoardWindow;
});
