/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _MainBoard = __webpack_require__(1);

	var _MainBoard2 = _interopRequireDefault(_MainBoard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var main = new _MainBoard2.default(); // 'use strict';

	// requirejs.config({
	//   paths: {
	//     "MainBoard": "scripts/MainBoard",
	//     "Canvas": "scripts/Canvas",
	//     "Video": "scripts/Video",
	//     "BoardWindow": "scripts/BoardWindow",
	//     "Utils": "scripts/Utils",
	//     "Notifications": "scripts/Notifications",
	//     "UI": "scripts/UI",
	//     "Video": "scripts/Video",
	//     "Canvas": "scripts/Canvas",
	//     "CanvasTools": "scripts/CanvasTools",
	//     "ViewFiles": "scripts/ViewFiles"
	//   }

	// });

	// require(["MainBoard"], function(MainBoard){
	//   console.log("RUN...");
	//   var Main = new MainBoard();
	//   var btn = document.getElementById("initButton");
	//   btn.addEventListener("click", function(e) {
	//     var d = document.getElementById("content");
	//     if (d.children.length == 0) {
	//       Main.init("content");
	//     }
	//   }, false);


	// });

	var some = 1;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Utils = __webpack_require__(2);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _Notifications = __webpack_require__(3);

	var _Notifications2 = _interopRequireDefault(_Notifications);

	var _BoardWindow = __webpack_require__(4);

	var _BoardWindow2 = _interopRequireDefault(_BoardWindow);

	var _UI = __webpack_require__(5);

	var _UI2 = _interopRequireDefault(_UI);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// define("MainBoard", ["Utils", "Notifications", "BoardWindow", "UI"], function(Utils, Notifications, BoardWindow, UI) {
	var MainBoard = function MainBoard(options) {
		this.boards = [];
		this._currentBoard = null;

		this._id = "main_board";

		// for test
		//  var b = new BoardWindow("test");
		// this.boards = this.boards.concat(b)
		// this._currentBoard = b;
	};
	/*Static*/
	MainBoard.MAX_BOARDS = 10;

	MainBoard.log = function (string) {
		console.log("MainBoard: " + string);
	};
	/*Initialize*/
	MainBoard.prototype.init = function (id) {
		var mainBoard = document.createElement("div");
		mainBoard.setAttribute("id", this._id);
		var targetElement = document.getElementById(id);
		var topPanel = this.renderTopPanel();
		var bottomPanel = this.renderBottomPanel();
		var content = this.renderMainContent();
		if (this._currentBoard != null) {
			var b = this._currentBoard.render();
			content.appendChild(b);
		}

		mainBoard.appendChild(topPanel);
		mainBoard.appendChild(content);
		mainBoard.appendChild(bottomPanel);

		targetElement.appendChild(mainBoard);

		resize();
	};

	// END
	/*Top-panel*/
	MainBoard.prototype.renderTopPanel = function () {

		var topPanel = _UI2.default.createElement({
			type: "div",
			className: "top-panel"
		});

		var topPanelHead = _UI2.default.createElement({
			type: "h3",
			className: "top-panel_head",
			name: "Board"
		});

		var ul = _UI2.default.createElement({
			type: "ul",
			className: "top-panel_list"
		});
		var self = this;
		var liArray = this.boards.map(function (el, idx) {
			var span = _UI2.default.createElement({
				type: "span",
				className: "close",
				eventType: "click",
				event: function event(e) {
					self.deleteBoard(el);
				},
				name: "x"
			});
			var li = _UI2.default.renderListItem({
				type: "li",
				name: el.name,
				className: "list_item",
				eventType: "click",
				event: function event(e) {
					self.setCurrentBoard(el);
				},
				child: span
			}, idx, self._currentBoard === el);
			return li;
		});
		var add = _UI2.default.createElement({
			type: "li",
			name: "+",
			className: "list_item",
			eventType: "click",
			event: function event(e) {
				var bName = "Board " + self.boards.length;
				var b = new _BoardWindow2.default(bName);
				self.addBoard(b);
			}
		});
		liArray.push(add);

		liArray.forEach(function (li) {
			ul.appendChild(li);
		});
		// topPanel.appendChild(resize);
		// var dragDiv = document.createElement("div");
		// dragDiv.classList.add("drag_div");


		// topPanel.appendChild(dragDiv);

		topPanel.appendChild(topPanelHead);
		topPanel.appendChild(ul);
		// var dm = document.querySelector('main-board'); 
		topPanel.addEventListener('dragstart', drag_start, false);
		// dragDiv.addEventListener('dragstart',function(e){
		// 	console.log(e);
		// },false);
		document.body.addEventListener('dragover', drag_over, false);
		document.body.addEventListener('drop', drop, false);
		return topPanel;
	};
	/*Bottom-panel*/
	MainBoard.prototype.renderBottomPanel = function () {
		var bottomPanel = document.createElement("div");
		bottomPanel.classList.add("bottom-panel");
		// var bottomHeader = document.createElement("h3");
		// bottomHeader.textContent = "BOTTOM";
		// bottomPanel.appendChild(bottomHeader);
		var resize = _UI2.default.createElement({
			type: "span",
			className: "resize_span"

		});
		bottomPanel.appendChild(resize);
		return bottomPanel;
	};
	/*Main-content*/
	MainBoard.prototype.renderMainContent = function () {
		// var drag = document.createElement("div");
		// drag.classList.add("drag");
		var board = document.createElement("div");
		board.classList.add("main-board");
		// drag.appendChild(board);
		return board;
	};

	MainBoard.prototype.addBoard = function (board) {
		if (_Utils2.default.isBoard(board)) {
			if (this.boards.length < MainBoard.MAX_BOARDS) {
				this.boards.push(board);
				this.setCurrentBoard(board);
				var notify = _Notifications2.default.boardAdded(board);
				MainBoard.log(notify);
				return true;
			}
		}
		return false;
	};

	MainBoard.prototype.getCurrentBoard = function () {
		return this._currentBoard;
	};

	MainBoard.prototype.setCurrentBoard = function (b) {
		if (_Utils2.default.isBoard(b) && this._currentBoard != b) {
			var notify = _Notifications2.default.currentBoard(b);
			MainBoard.log(notify);
			this._currentBoard = b;
		} else if (b == null) {
			this._currentBoard = b;
		}
		this.update(b);

		return this;
	};

	MainBoard.prototype.deleteBoard = function (b) {
		if (_Utils2.default.isBoard(b)) {
			var idx = this.boards.indexOf(b);
			if (idx != -1) {
				this.boards = this.boards.filter(function (el, i, arr) {
					return i != idx;
				});
				if (this.boards.length > 0) {
					if (b === this.getCurrentBoard()) {
						this.setCurrentBoard(this.boards[this.boards.length - 1]);
					}
				} else {
					this.setCurrentBoard(null);
				}
				var notify = _Notifications2.default.boardDeleted(b);
				MainBoard.log(notify);
				return true;
			}
		}
		return false;
	};

	// MAIN update
	MainBoard.prototype.update = function (board) {
		var main = document.getElementById(this._id);
		main.innerHTML = "";
		var topPanel = this.renderTopPanel();
		var content = this.renderMainContent();
		var bottomPanel = this.renderBottomPanel();
		main.appendChild(topPanel);
		main.appendChild(content);
		main.appendChild(bottomPanel);
		var b;
		if (_Utils2.default.isBoard(board)) {
			b = board.render();
			content.appendChild(b);
		}
		resize();
	};
	// return MainBoard;
	// });
	exports.default = MainBoard;

	// DRAG

	function drag_start(event) {
		var main = document.getElementById("main_board");
		var style = window.getComputedStyle(main, null);
		event.dataTransfer.setData("text/plain", parseInt(style.getPropertyValue("left"), 10) - event.clientX + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY));
	}
	function drag_over(event) {
		event.preventDefault();
		return false;
	}
	function drop(event) {
		var offset = event.dataTransfer.getData("text/plain").split(',');
		var dm = document.getElementById('main_board');
		dm.style.left = event.clientX + parseInt(offset[0], 10) + 'px';
		dm.style.top = event.clientY + parseInt(offset[1], 10) + 'px';
		event.preventDefault();
		return false;
	}

	// RESIZE LISTENERS
	// RESIZE
	function resize() {
		var startX, startY, startWidth, startHeight;

		// init RESIZE
		var p = document.getElementById("main_board");

		function initDrag(e) {
			startX = e.clientX;
			startY = e.clientY;
			startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
			startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
			document.documentElement.addEventListener('mousemove', doDrag, false);
			document.documentElement.addEventListener('mouseup', stopDrag, false);
		}

		function doDrag(e) {
			p.style.width = startWidth + e.clientX - startX + 'px';
			p.style.height = startHeight + e.clientY - startY + 'px';
		}

		function stopDrag(e) {
			document.documentElement.removeEventListener('mousemove', doDrag, false);
			document.documentElement.removeEventListener('mouseup', stopDrag, false);
		}
		var resizeSpan = document.querySelector(".resize_span");
		resizeSpan.addEventListener("mousemove", initDrag, false);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	"use strict";

	// define("Utils", ["BoardWindow"], function(BoardWindow) {

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Utils = {
		isBoard: function isBoard(board) {
			return board != null && board instanceof BoardWindow;
		}
	};
	exports.default = Utils;
	// });

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	// define("Notifications", [], function() {

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var not = {
		boardAdded: function boardAdded(board) {
			var _id = board.getId(); // init in cls
			return "board with id " + _id + " successfully added";
		},
		currentBoard: function currentBoard(board) {
			var _id = board.getId();
			return "currentBoard with id is " + _id + " .";
		},
		boardDeleted: function boardDeleted(board) {
			var _id = board.getId();
			return "board with id " + _id + " successfully deleted";
		}
	};
	exports.default = not;
	// });

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _UI = __webpack_require__(5);

	var _UI2 = _interopRequireDefault(_UI);

	var _Video = __webpack_require__(6);

	var _Video2 = _interopRequireDefault(_Video);

	var _Canvas = __webpack_require__(7);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	var _ViewFiles = __webpack_require__(9);

	var _ViewFiles2 = _interopRequireDefault(_ViewFiles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// define("BoardWindow", ["UI", "Video", "Canvas", "ViewFiles"], function(UI, Video, Canvas, ViewFiles) {
	var TEST_VIDEO_URL = "http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv";
	// var TEST_VIDEO_URL = "static/SampleVideo_1280x720.mp4";
	var BoardWindow = function BoardWindow(name) {
		this.name = name;
		this._id = BoardWindow.randomId();
		this._currentView = 0;
		this.isActive = false;

		// board element
		this.boardElement = null;
		// views elemenets
		// this.videoElement = null;
		// this.canvasElement = null;
		var v = new _Video2.default(TEST_VIDEO_URL);
		var c = new _Canvas2.default();
		this.files = new _ViewFiles2.default();
		this._elements = [v, c];
	};
	// 
	BoardWindow.views = {
		0: ["video"],
		1: ["canvas"]
	};

	BoardWindow.randomId = function () {
		var str = "BoardWindow";
		var res = "";
		for (var i = 0; i < str.length; i++) {
			if (i % 3 == 0) {
				res += "$+";
			} else {
				res += str[Math.ceil(Math.random() * i)];
			}
		}
		return res;
	};

	BoardWindow.prototype.getId = function () {
		return this._id;
	};
	BoardWindow.prototype.setCurrentView = function () {
		var views = BoardWindow.views;
		var c, v;
		v = this._elements[0], c = this._elements[1];
		for (var k in views) {
			switch (this._currentView) {
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
	};

	BoardWindow.prototype.renderVideo = function () {};
	BoardWindow.prototype.renderCanvas = function () {};
	BoardWindow.prototype.render = function () {
		var main = _UI2.default.createElement({
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
	BoardWindow.prototype.renderContent = function () {

		var wrapper = _UI2.default.createElement({
			type: "div",
			className: "board-content"
			// child: head
		});
		this._elements.forEach(function (el) {
			var block = el.render();
			wrapper.appendChild(block);
		});

		return wrapper;
	};
	BoardWindow.prototype.update = function () {
		var main = document.getElementById(this._id);
		main.innerHTML = "";
		var blocks = this.renderContent();
		var asidePanel = this.renderAsidePanel();
		main.appendChild(asidePanel);
		main.appendChild(blocks);
	};
	BoardWindow.prototype.switchBlocks = function () {
		this._elements = this._elements.reverse();
		// this.update();
		var b = document.querySelector(".board-content");
		if (b != null) {
			b.classList.toggle("reverse");
		}
		return this;
	};
	BoardWindow.prototype.toggleViews = function () {
		this._currentView = this.setCurrentView();
		// this.update();
	};

	BoardWindow.prototype.renderAsidePanel = function () {
		var asidePanel = _UI2.default.createElement({
			type: "div",
			className: "board-asidePanel"
		});
		var self = this;
		// if (this._currentView == 2) {
		var switchButton = _UI2.default.createElement({
			type: "button",
			className: "asidePanel-switchButton",
			eventType: "click",
			name: "switch",
			event: function event(e) {
				e.preventDefault();
				self.switchBlocks();
			}
		});
		// switchButton.setAttribute("disabled", true);
		asidePanel.appendChild(switchButton);

		// } 
		var toggleButton = _UI2.default.createElement({
			type: "button",
			className: "asidePanel-toggleButton",
			eventType: "click",
			name: "toggle",
			event: function event(e) {
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
	exports.default = BoardWindow;
	// return BoardWindow;
	// });

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	// define("UI", [], function() {

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var UI = {
		createElement: function createElement(options) {
			var el, type, name, id, className, child, eventType, event;
			name = options.name;
			id = options.id;
			className = options.className;
			child = options.child;
			type = options.type;
			eventType = options.eventType;
			event = options.event;

			el = document.createElement(type);

			if (className) {
				el.classList.add(className);
			}
			if (id) {
				el.setAttribute("id", id);
			}
			if (name) {
				var span = document.createElement("span");
				span.classList.add(className + "_title");
				span.textContent = name;
				el.appendChild(span);
			}
			if (child) {
				el.appendChild(child);
			}
			if (eventType != null && event != null) {
				el.addEventListener(eventType, event, true);
			}
			return el;
		},
		renderListItem: function renderListItem(options, idx, active) {
			var name, li;
			li = this.createElement(options);
			if (active) {
				li.classList.add("active");
			}
			if (li.classList.contains("active") && !active) {
				li.classList.remove("active");
			}
			return li;
		},
		renderList: function renderList(key, items, optionalChild) {
			var ul = this.createElement({
				type: "ul",
				className: key + "_list"
			});
			var self = this;
			items.forEach(function (el, idx) {
				var li = self.renderListItem(el, idx, optionalChild);
				ul.appendChild(li);
			});
			return ul;
		}

	};
	exports.default = UI;
	// });

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _UI = __webpack_require__(5);

	var _UI2 = _interopRequireDefault(_UI);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// define("Video", ["UI"], function(UI) {
	var TEST_YOU_URL = "https://www.youtube.com/embed/B9FzVhw8_bY"; // "use strict";

	var Video = function Video(url) {
		if (url != null) {
			this.url = url;
		};
		this._isActive = false;
		this._videoMode = 'static';
		// video
		this._stop = true;
		this._play = false;
		this.element = null;

		this.isInit = false;

		this._videoElement = null;
	};

	Video.modes = {
		0: "static",
		1: "youtube"
	};

	Video.prototype.setActive = function (bool) {
		this._isActive = bool;
		var c = document.querySelector(".video-wrapper");
		var v = document.querySelector(".iframe-video");

		if (c != null && !bool) {
			c.classList.toggle("close");
			c.classList.remove("open");
			if (v != null) {
				v.pause();
			}
		} else if (c != null && bool) {
			c.classList.remove("close");
			c.classList.add("open");
		}
		return this;
	};
	Video.prototype.getActive = function () {
		return this._isActive;
	};
	Video.prototype.renderVideo = function () {
		var video;
		if (this._videoMode == "static") {
			video = _UI2.default.createElement({
				type: "video",
				className: "iframe-video"
			});
			if (this.url != null) {
				video.setAttribute("src", this.url);
				video.setAttribute("controls", true);
			}
		} else {
			video = _UI2.default.createElement({
				type: "iframe",
				className: "iframe-video"
			});
			video.setAttribute("height", 315);
			video.setAttribute("width", 560);
			video.setAttribute("frameborder", 0);
			video.setAttribute("allowfullscreen", true);

			video.setAttribute("src", this.url);
		}
		return video;
	};
	Video.prototype.render = function () {

		// var cls = "video-wrapper " + (this.isActive ? "open" : "close");
		// var wrapper = UI.createElement({
		// 	type: "div",
		// 	className: "video-wrapper",
		// 	// name: "Video"
		// });
		// if (this._isActive) {
		// 	wrapper.classList.add("open");
		// }
		// else {
		// 	wrapper.classList.remove("open");
		// 	wrapper.classList.add("close")
		// }
		// if (this._isActive) {
		// 	wrapper.classList.add("open");	
		// } else {
		// 	wrapper.classList.add("remove");
		// }

		if (this.isInit) {
			// wrapper.classList.add("open");
			// var modes = this.renderChangeModeVideo();
			// var video = this.renderVideo();
			// wrapper.appendChild(modes);
			// wrapper.appendChild(video);
			// if (this._videoMode == "youtube") {
			// 	var urlControl = this.renderURLinput();
			// 	wrapper.appendChild(urlControl);
			// }
			// if(!this._isActive) {
			// 	wrapper.classList.add("close");
			// }
			// wrapper.appendChild(this._videoElement);
			return this._videoElement;
		} else {
			var wrapper = _UI2.default.createElement({
				type: "div",
				className: "video-wrapper"
			});
			if (this._isActive) {
				wrapper.classList.add("open");
			} else {
				wrapper.classList.remove("open");
				wrapper.classList.add("close");
			}
			wrapper.classList.add("init");
			var self = this;
			var img = _UI2.default.createElement({
				type: "img",
				className: "init-img"
			});
			img.setAttribute("src", "static/images/init_video.png");
			var initButton = _UI2.default.createElement({
				type: "div",
				className: "init-btn",
				child: img,
				eventType: "click",
				event: function event(e) {
					e.preventDefault();
					self.isInit = true;
					var p = e.target.parentElement;
					if (p.classList.contains("init-btn")) {
						p.remove();
					}
					var w = document.querySelector(".video-wrapper");
					if (w != null) {
						w.classList.add("open");
						w.classList.remove("init");
						var modes = self.renderChangeModeVideo();
						var video = self.renderVideo();
						w.appendChild(modes);
						w.appendChild(video);
						if (self._videoMode == "youtube") {
							var urlControl = self.renderURLinput();
							w.appendChild(urlControl);
						}
						if (!self._isActive) {
							w.classList.add("close");
						}
					}
					self._videoElement = w;
					// self.isInit = true;
				}
			});
			wrapper.appendChild(initButton);
			return wrapper;
		}
		// return wrapper;
	};

	Video.prototype.renderURLinput = function () {
		var input = document.createElement("input");
		input.type = "text";
		input.classList.add("video-url_input");
		var self = this;
		var button = _UI2.default.createElement({
			type: "button",
			name: "play",
			eventType: "click",
			event: function event(e) {
				e.preventDefault();
				var i = document.querySelector(".video-url_input");
				var val = i.value;
				self.url = val;
				var selector = self._isActive ? "open" : "close";
				var main = document.querySelector(".video-wrapper" + "." + selector);
				// this._videoMode = 1;
				main.innerHTML = "";

				main.appendChild(self.render());
			}
		});
		var label = _UI2.default.createElement({
			type: "label",
			name: "video (url)",
			className: "label",
			child: input
		});
		var wrapper = _UI2.default.createElement({
			type: "div",
			className: "video-controls"
		});
		wrapper.appendChild(label);
		wrapper.appendChild(button);
		return wrapper;
	};

	Video.prototype.renderChangeModeVideo = function () {
		var staticRadio = document.createElement("input");
		staticRadio.type = "radio";
		staticRadio.name = "videoMode";
		staticRadio.value = "static";
		var self = this;

		staticRadio.addEventListener("click", function (e) {
			console.log(e.target.value);
			self._videoMode = e.target.value;
			var selector = self._isActive ? "open" : "close";
			var main = document.querySelector(".video-wrapper" + "." + selector);
			// this._videoMode = "0";
			main.innerHTML = "";
			main.appendChild(self.render());
		});
		if (this._videoMode == "static") {
			staticRadio.checked = true;
		}
		var labelStatic = _UI2.default.createElement({
			type: "label",
			name: Video.modes[0],
			className: "radio",
			child: staticRadio
		});

		var youtubeRadio = document.createElement("input");
		youtubeRadio.type = "radio";
		youtubeRadio.name = "videoMode";
		youtubeRadio.value = "youtube";
		youtubeRadio.addEventListener("click", function (e) {
			console.log(e.target.value);
			self._videoMode = e.target.value;
			var selector = self._isActive ? "open" : "close";
			var main = document.querySelector(".video-wrapper" + "." + selector);
			// this._videoMode = 1;
			main.innerHTML = "";

			main.appendChild(self.render());
		});
		if (this._videoMode == "youtube") {
			youtubeRadio.checked = true;
		}
		var labelYoutube = _UI2.default.createElement({
			type: "label",
			name: Video.modes[1],
			className: "radio",
			child: youtubeRadio
		});

		var radioWrapper = _UI2.default.createElement({
			type: "div",
			className: "radio-wrapper"
		});
		radioWrapper.appendChild(labelYoutube);
		radioWrapper.appendChild(labelStatic);
		return radioWrapper;
	};

	Video.prototype.setUrl = function (u) {
		this.url = u;
		return this;
	};
	Video.prototype.stop = function () {};
	Video.prototype.play = function () {};
	exports.default = Video;
	// return Video;
	// });

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _UI = __webpack_require__(5);

	var _UI2 = _interopRequireDefault(_UI);

	var _CanvasTools = __webpack_require__(8);

	var _CanvasTools2 = _interopRequireDefault(_CanvasTools);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// define("Canvas", ["UI", "CanvasTools"], function(UI, CanvasTools){
	var Canvas = function Canvas() {
		this._isActive = true;
		this.canvasTools = new _CanvasTools2.default();
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
	Canvas.prototype.setActive = function (bool) {
		this._isActive = bool;
		var c = document.querySelector(".canvas-wrapper");
		if (c != null && !bool) {
			c.classList.add("close");
			c.classList.remove("open");
		} else if (c != null && bool) {
			c.classList.remove("close");
			c.classList.add("open");
		}
		return this;
	};
	Canvas.prototype.getActive = function () {
		return this._isActive;
	};
	Canvas.prototype.render = function () {
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
			var wrapper = _UI2.default.createElement({
				type: "div",
				className: "canvas-wrapper"

			});
			if (this._isActive) {
				wrapper.classList.add("open");
			} else {
				wrapper.classList.remove("open");
				wrapper.classList.add("close");
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
			var img = _UI2.default.createElement({
				type: "img",
				className: "init-img"
			});
			img.setAttribute("src", "static/images/init_paint.png");
			var initButton = _UI2.default.createElement({
				type: "div",
				className: "init-btn",
				child: img,
				eventType: "click",
				event: function event(e) {
					e.preventDefault();
					self.isInit = true;
					var p = e.target.parentElement;
					if (p.classList.contains("init-btn")) {
						p.remove();
					}
					var c = document.querySelector(".canvas-wrapper");
					if (!self._isActive) {
						c.classList.add("close");
					}var tools = _UI2.default.createElement({
						type: "div",
						className: "tools"
					});
					/*	Tools groups */
					var canvasShapes = self.canvasTools.toolGroup("shapes", _CanvasTools2.default.toolsShapes, function (toolName) {
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
					var canvasColors = self.canvasTools.toolGroup("Colors", _CanvasTools2.default.toolsColors, function (toolName) {
						console.log("click on " + toolName);
					});
					var canvasTransforms = self.canvasTools.toolGroup("Transforms", _CanvasTools2.default.toolsTransforms, function (toolName) {
						console.log("click on " + toolName);
					});
					var groups = [canvasShapes, canvasColors, canvasTransforms];
					groups.forEach(function (g) {
						tools.appendChild(g);
					});

					c.appendChild(tools);
					c.appendChild(self._canvasElement);
					var p = self._canvasElement.parentElement;

					self._canvasElement.width = p.offsetWidth - tools.offsetWidth;
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
	};
	Canvas.prototype.renderCanvas = function () {
		var c = _UI2.default.createElement({
			type: "canvas",
			className: "canvas-element"
		});
		// c.width = "100"
		c.setAttribute("id", "canvas-element");

		return c;
	};

	// Canvas.startLocations = {};	
	Canvas.MouseEvents = {
		MOUSE_DOWN: "mouse:down",
		MOUSE_MOVE: "mouse:move",
		MOUSE_UP: "mouse:up"
	};
	Canvas.prototype.initListeners = function (canvas) {
		var self = this;
		// mouse down
		canvas.observe(Canvas.MouseEvents.MOUSE_DOWN, function (option) {
			canvas.selection = false;
			self.isMouseDown = true;
			if (option.target != null) {

				return;
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

					canvas.observe(Canvas.MouseEvents.MOUSE_MOVE, function (option) {
						console.log("MOUSE MOVE");
						if (!self.isDrawing && self.isMouseDown && self.currentShape) {
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
								self.currentShape.set({ width: origX - self.startLocations.x });
								self.currentShape.set({ height: origY - self.startLocations.y });
							}
							if (isTriangle) {
								self.currentShape.set({ width: Math.abs(origX - self.startLocations.x), height: Math.abs(origY - self.startLocations.y) });
							}
							if (isEllipse) {
								self.currentShape.set({ rx: Math.abs(origX - self.startLocations.x), ry: Math.abs(origY - self.startLocations.y) });
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

		canvas.observe(Canvas.MouseEvents.MOUSE_UP, function (option) {
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
			canvas.selection = true;
			self.currentShape = null;
			// canvas.off('mouse:down');
			canvas.off('mouse:move');
			// canvas.off('mouse:up');
			canvas.forEachObject(function (o) {
				o.setCoords();
			});
		});
	};

	Canvas.prototype.getShape = function (type) {
		var self = this;
		// var fillColor = document.getElementById("fillColor").value;
		// var strokeColor = document.getElementById("strokeColor").value;
		var strokeColor = "#ddd";
		var fillColor = "#333";
		switch (type) {
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
			case "rectangle":
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
			case "triangle":
				self.currentShape = new fabric.Triangle({
					left: self.startLocations.x,
					top: self.startLocations.y,
					strokeWidth: 1,
					width: 2,
					height: 2,
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
				self.currentShape = new fabric.Line(points, {
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
	};

	exports.default = Canvas;
	// return Canvas;
	// });

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _UI = __webpack_require__(5);

	var _UI2 = _interopRequireDefault(_UI);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// define("CanvasTools", ["UI"], function(UI) {
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

	var CanvasTools = function CanvasTools() {
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
	CanvasTools.toolsShapes = ["brush", "rectangle", "triangle", "circle", "ellipse"];
	CanvasTools.toolsColors = ["background", "fillColor", "strokeColor"];
	CanvasTools.toolsTransforms = ["strokeWidth"];
	CanvasTools.prototype.toolGroup = function (groupName, array, cb) {
		// var header = UI.createElement({
		// 	type: "h5",
		// 	className: "header"
		// });
		// header.textContent = groupName;
		var wrapper = _UI2.default.createElement({
			type: "div",
			className: "tool-group",
			child: document.createElement("br")
		});
		var self = this;
		array.forEach(function (el) {
			wrapper.appendChild(self.renderTool(el, cb));
		});
		return wrapper;
	};
	CanvasTools.prototype.toolsShapes = function () {
		var self = this;
		return CanvasTools.toolsShapes.map(function (el, idx) {
			console.log(this);
			return self.renderTool(el);
		});
	};
	CanvasTools.prototype.toolsColors = function () {
		var self = this;
		return CanvasTools.toolsColors.map(function (el, idx) {
			return self.renderTool(el);
		});
	};
	CanvasTools.prototype.toolsTransforms = function () {
		var self = this;
		return CanvasTools.toolsTransforms.map(function (el, idx) {
			return self.renderTool(el);
		});
	};

	CanvasTools.prototype.renderTool = function (name, cb) {
		var img = _UI2.default.createElement({
			type: "img",
			className: "tool-img"
		});
		img.setAttribute("src", TOOL_IMG_PATH + "tool_" + name + ".png");
		var self = this;
		var button = _UI2.default.createElement({
			type: "button",
			className: "tool-button",
			child: img,
			eventType: "click",
			event: function event(e) {
				e.preventDefault();
				self.activeShape = name;
				this.classList.toggle("active");
				cb(name);
			}
		});
		return button;
	};
	CanvasTools.prototype.setActiveTool = function (tool) {
		this.activeTool = tool;
		return this;
	};
	exports.default = CanvasTools;
	// return CanvasTools;
	// });

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _UI = __webpack_require__(5);

	var _UI2 = _interopRequireDefault(_UI);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// define("ViewFiles", ["UI"], function(UI) {
	var TEST_PDF_URL = "url=http://infolab.stanford.edu/pub/papers/google.pdf";
	var ViewFiles = function ViewFiles(files) {
		this.files = files || [];
		// test
		this.files.push(TEST_PDF_URL);
		this.files.push("url=https://drive.google.com/file/d/0B650xTmUSUQYNDBSbkxtdG4wcHc/view?usp=sharing");
		this.selectedFileURL = null;
		this.listIsOpen = false;
		this.iframeIsOpen = false;
		var self = this;
		this.closeIframe = function (e) {

			var iframe = document.querySelector(".iframe-file");

			if (self.iframeIsOpen && iframe != null) {
				var p = iframe.parentElement;
				p.removeChild(iframe);
				window.removeEventListener(self.closeIframe, true);
			}
		};
		window.addEventListener("click", self.closeIframe, true);
	};
	ViewFiles.getParent = function (element, parent) {
		// var p = element.parentElement;
		// var _p = document.querySelector(parent);
		// if (_p != null) {
		// 	if (_p == p) {
		// 		return p;
		// 	}
		// 	while(_p != p) {
		// 		ViewFiles.getParent(p, parent);
		// 	}
		// }

	};
	ViewFiles.googleAPI = {
		startURL: "http://docs.google.com/gview?",
		endURL: "&embedded=true"
	};

	ViewFiles.prototype.renderButton = function () {
		var self = this;
		var b = _UI2.default.createElement({
			type: "button",
			className: "asidePanel-fileButton",
			eventType: "click",
			name: "file",

			event: function event(e) {
				e.preventDefault();
				e.stopPropagation();
				self.listIsOpen = !self.listIsOpen;
				// var p = ViewFiles.getParent(e.target, ".files-wrapper");
				if (self.listIsOpen) {
					var wrapper = document.querySelector(".files-wrapper");
					if (wrapper != null) {
						var list = self.renderList();
						wrapper.appendChild(list);
					}
				} else {
					var wrapper = document.querySelector(".files-wrapper");
					if (wrapper != null) {
						var list = document.querySelector(".file-list");
						wrapper.removeChild(list);
					}
				}
				console.log(self);
			}
		});
		return b;
	};

	ViewFiles.prototype.renderList = function () {
		var list = _UI2.default.createElement({
			type: "ul",
			className: "file-list"
		});
		var self = this;
		this.files.forEach(function (f) {
			var file = _UI2.default.createElement({
				type: "li",
				className: "list_item",
				name: f,
				eventType: "click",
				event: function event(e) {
					e.preventDefault();
					self.selectedFileURL = f;
					self.iframeIsOpen = true;
					self.listIsOpen = false;
					var body = document.body;
					var iframe = self.renderIframe();
					body.appendChild(iframe);
					var list = document.querySelector(".file-list");
					if (list != null) {
						var parent = list.parentElement;
						if (parent != null) {
							parent.removeChild(list);
						}
					}
				}
			});
			list.appendChild(file);
		});
		if (this.listIsOpen) {
			list.classList.add("list-open");
		}
		return list;
	};

	ViewFiles.prototype.renderIframe = function () {
		if (this.iframeIsOpen && this.selectedFileURL != null) {
			var iframe = _UI2.default.createElement({
				type: "iframe",
				className: "iframe-file"
			});
			var uri = ViewFiles.googleAPI.startURL.concat(this.selectedFileURL, ViewFiles.googleAPI.endURL);
			console.log(uri);
			iframe.setAttribute("src", uri);
			return iframe;
		};
	};

	ViewFiles.prototype.render = function () {
		var wrapper = _UI2.default.createElement({
			type: "div",
			className: "files-wrapper"
		});
		var btn = this.renderButton();
		wrapper.appendChild(btn);
		return wrapper;
	};

	exports.default = ViewFiles;
	// return ViewFiles;
	// });

/***/ }
/******/ ]);