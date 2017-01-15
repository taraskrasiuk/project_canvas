"use strict";

define("MainBoard", ["Utils", "Notifications", "BoardWindow", "UI"], function(Utils, Notifications, BoardWindow, UI) {
	var MainBoard = function(options) {
		this.boards = [];
		this._currentBoard = null;

		this._id = "main_board";

		// for test
		var b = new BoardWindow("test");
		this.boards = this.boards.concat(b)
		this._currentBoard = b;
	};
	/*Static*/
	MainBoard.MAX_BOARDS = 10;

	MainBoard.log = function(string) {
		console.log("MainBoard: " + string);
	};
	/*Initialize*/
	MainBoard.prototype.init = function(id) {
		var mainBoard = document.createElement("div");
		mainBoard.setAttribute("id", this._id);
		var targetElement = document.getElementById(id);
		var topPanel = this.topPanel();
		var bottomPanel = this.renderBottomPanel();
		var content = this.renderMainContent();

		mainBoard.appendChild(topPanel);
		mainBoard.appendChild(content);
		mainBoard.appendChild(bottomPanel);

		targetElement.appendChild(mainBoard);
	};
	/*Top-panel*/
	MainBoard.prototype.renderTopPanel = function() {
		var topPanel = document.createElement("div");
		topPanel.classList.add("top-panel");
		var optChild = UI.createElement({
			type: ""
		});
		var spanClose = document.createElement("span");
			spanClose.classList.add("close");
			spanClose.textContent = "x";
			spanClose.addEventListener("click", function(e) {
				this.deleteBoard(board);
				// s.updateBoardsList();
			}, false);

		var ul = UI.renderList("top-panel", this.boards, spanClose);
		var liArray = this.boards.map(function(el) {
			var li = UI.createElement({
				type: "li",
				className: "list_item",
				active: this.getCurrentBoard() === el,
				eventType: "click",
				event: function(e) {

				}
			})
		});
		// var ul = this.renderBoardList();
		// var head = document.createElement("h3");
		// head.classList.add("top-panel_head");
		// head.textContent = "Board";
		// topPanel.appendChild(head);
		topPanel.appendChild(ul);
		return topPanel;
	};
	/*Bottom-panel*/
	MainBoard.prototype.renderBottomPanel = function() {
		var bottomPanel = document.createElement("div");
		bottomPanel.classList.add("bottom-panel");
		var bottomHeader = document.createElement("h3");
		bottomHeader.textContent = "BOTTOM";
		bottomPanel.appendChild(bottomHeader);
		return bottomPanel;
	};
	/*Main-content*/
	MainBoard.prototype.renderMainContent = function() {
		var board = document.createElement("div");
		board.classList.add("main-board");
		return board;
	};

	/*render top-list*/
	MainBoard.prototype.topPanel = function() {
		var topPanel = UI.createElement({
			type: "div",
			className: "top-panel"
		});
		
		var topPanelHead = UI.createElement({
			type: "h3",
			className: "top-panel_head",
			name: "Board"
		});

		var ul = UI.createElement({
			type: "ul",
			className: "top-panel_list"
		});
		var self = this;
		var liArray = this.boards.map(function(el, idx) {
			var span = UI.createElement({
				type: "span",
				className: "close",
				eventType: "click",
				event: function(e) {
					self.deleteBoard(el);	
				},
				name: "x"
			});
			var li = UI.renderListItem({
				type: "li",
				name: el.name,
				className: "list_item",
				eventType: "click",
				event: function(e) {
					self.setCurrentBoard(el);
				},
				child: span
			}, idx, self._currentBoard === el);
			return li;
		});
		var add = UI.createElement({
				type: "li",
				name: "+",
				className: "list_item",
				eventType: "click",
				event: function(e) {
					self.addBoard();
				}
			});
		liArray.push(add);

		liArray.forEach(function(li) {
			ul.appendChild(li);
		});

		topPanel.appendChild(topPanelHead);
		topPanel.appendChild(ul);
		return topPanel;
	};

	// MainBoard.prototype.initMainBoard = function(id) { 
	// 	var mainBoard = document.createElement("div");
	// 	mainBoard.setAttribute("id", this._id);
	// 	var targetElement = document.getElementById(id);
	// 	targetElement.appendChild(mainBoard);

	// 	// init top panel
	// 	this.renderTopPanel();
	// 	mainBoard.appendChild(this.renderBottomPanel());
	// };

	// MainBoard.prototype.renderCurrentBoard = function() {
	// var board = document.createElement("div");
	// 	board.setAttribute("id", this._currentBoard.name);
	// 	board.classList.add("main-board");
	// var main = document.getElementById(this._id);
	// 	main.appendChild(board);
	// 	var current = this.getCurrentBoard();
	// 	if (current != null) {
	// 		current.initBoard(this._currentBoard.name);
	// 		current.renderAll();
	// 	}

		
	// };

	// MainBoard.prototype.renderTopPanel = function() {
	// 	var topPanel = document.createElement("div");
	// 	topPanel.setAttribute("class", "top-panel");
	// 	var ul = this.renderBoardList();
	// 	var head = document.createElement("h3");
	// 	head.setAttribute("class", "top-panel_head");
	// 	head.textContent = "Board";
	// 	topPanel.appendChild(head);
	// 	topPanel.appendChild(ul);

	// 	var main = document.getElementById(this._id);
	// 	main.appendChild(topPanel);
	// };

	// MainBoard.prototype.renderBottomPanel = function() {
	// 	var bottomPanel = document.createElement("div");
	// 	bottomPanel.classList.add("bottom-panel");
	// 	var bottomHeader = document.createElement("h3");
	// 	bottomHeader.textContent = "BOTTOM";
	// 	bottomPanel.appendChild(bottomHeader);
	// 	return bottomPanel;
	// }

	// MainBoard.prototype.renderBoardList = function() {
	// 	var ul = document.createElement("ul");
	// 	ul.setAttribute("class", "top-panel_list");
	// 	for(var i = 0; i < this.boards.length; i++) {
	// 		ul.appendChild(this.renderBoardListElement(this.boards[i]));
	// 	}
	// 	// if( this.boards.length == 0) {
	// 		ul.appendChild(this.renderBoardListElement(null));
	// 	// }
	// 	return ul;
	// };

	// MainBoard.prototype.renderBoardListElement = function(board) {
	// 	var li = document.createElement("li");

	// 	li.classList.add("list_item");
		
	// 	var s = this;

	// 	if(board) {
	// 		// li.textContent = board.name;
	// 		li.addEventListener("click", function(e) {
	// 			// var b = new BoardWindow("board " + (s.boards.length + 1));
	// 			s.setCurrentBoard(board);
	// 			s.updateBoardsList();
	// 		}, false);

	// 		var spanClose = document.createElement("span");
	// 		spanClose.classList.add("close");
	// 		spanClose.textContent = "x";
	// 		spanClose.addEventListener("click", function(e) {
	// 			s.deleteBoard(board);
	// 			s.updateBoardsList();
	// 		}, false);
	// 		var spanTitle = document.createElement("span");
	// 		spanTitle.classList.add("span-title");
	// 		spanTitle.textContent = board.name;
	// 		li.appendChild(spanTitle);
	// 		li.appendChild(spanClose);
	// 		if (this.getCurrentBoard() === board) {
	// 			li.classList.add("active");

	// 		}
	// 	} else {
	// 		li.textContent = "+";
	// 		li.addEventListener("click", function(e) {
	// 			var b = new BoardWindow("board " + (s.boards.length + 1));
	// 			s.addBoard(b);
	// 		}, false);
	// 	}
		
	// 	return li;
	// }
	// MainBoard.prototype.updateBoardsList = function() {
	// 	var ul = document.querySelector(".top-panel_list");
	// 	ul.innerHTML = "";
	// 	for(var i = 0; i < this.boards.length; i++) {
	// 		ul.appendChild(this.renderBoardListElement(this.boards[i]));
	// 	}
	// 	ul.appendChild(this.renderBoardListElement(null));
	// };

	// MainBoard.prototype.updateBoardContent = function() {
	// 	this.renderCurrentBoard();
	// };

	MainBoard.prototype.addBoard = function(board) {
		if (Utils.isBoard(board)){
			if (this.boards.length < MainBoard.MAX_BOARDS) {
				this.boards.push(board);
				this.setCurrentBoard(board);
				var notify = Notifications.boardAdded(board);
				MainBoard.log(notify);
				// this.updateBoardsList();
				return true;
			}
		}
		return false;
	};
	MainBoard.prototype.getCurrentBoard = function(){
		return this._currentBoard;
	};
	MainBoard.prototype.setCurrentBoard = function(b) {
		if (Utils.isBoard(b)) {
			var notify = Notifications.currentBoard(b);
			MainBoard.log(notify);
			this._currentBoard = b;
			// this.updateBoardContent();
		}
		return this;
	};
	MainBoard.prototype.deleteBoard = function(b) {
		if (Utils.isBoard(b)) {
			var idx = this.boards.indexOf(b);
			if (idx != -1) {
				this.boards = this.boards.filter(function(el, i, arr) {
					return i != idx;
				});
				if(b === this.getCurrentBoard()) {
					this.setCurrentBoard(this.boards[this.boards.length - 1]);
				} 
				// this.updateBoardsList();
				return true;
			}
		}
		return false;
	};

	// MAIN update
	MainBoard.prototype.update = function() {
		// this.updateBoardsList();
		// update top panle list
		// update content
	}
	return MainBoard;
});


