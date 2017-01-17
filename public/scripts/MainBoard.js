"use strict";

define("MainBoard", ["Utils", "Notifications", "BoardWindow", "UI"], function(Utils, Notifications, BoardWindow, UI) {
	var MainBoard = function(options) {
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

	MainBoard.log = function(string) {
		console.log("MainBoard: " + string);
	};
	/*Initialize*/
	MainBoard.prototype.init = function(id) {
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
		
	};
	/*Top-panel*/
	MainBoard.prototype.renderTopPanel = function() {
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
					var bName = "Board " + (self.boards.length);
					var b = new BoardWindow(bName);
					self.addBoard(b);
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
	/*Bottom-panel*/
	MainBoard.prototype.renderBottomPanel = function() {
		var bottomPanel = document.createElement("div");
		bottomPanel.classList.add("bottom-panel");
		// var bottomHeader = document.createElement("h3");
		// bottomHeader.textContent = "BOTTOM";
		// bottomPanel.appendChild(bottomHeader);
		return bottomPanel;
	};
	/*Main-content*/
	MainBoard.prototype.renderMainContent = function() {
		var board = document.createElement("div");
		board.classList.add("main-board");
		return board;
	};

	MainBoard.prototype.addBoard = function(board) {
		if (Utils.isBoard(board)){
			if (this.boards.length < MainBoard.MAX_BOARDS) {
				this.boards.push(board);
				this.setCurrentBoard(board);
				var notify = Notifications.boardAdded(board);
				MainBoard.log(notify);
				return true;
			}
		}
		return false;
	};

	MainBoard.prototype.getCurrentBoard = function(){
		return this._currentBoard;
	};

	MainBoard.prototype.setCurrentBoard = function(b) {
		if (Utils.isBoard(b) && this._currentBoard != b) {
			var notify = Notifications.currentBoard(b);
			MainBoard.log(notify);
			this._currentBoard = b;
		} else if(b == null) {
			this._currentBoard = b;
		}
		this.update(b);

		return this;
	};

	MainBoard.prototype.deleteBoard = function(b) {
		if (Utils.isBoard(b)) {
			var idx = this.boards.indexOf(b);
			if (idx != -1) {
				this.boards = this.boards.filter(function(el, i, arr) {
					return i != idx;
				});
				if (this.boards.length > 0) {
					if(b === this.getCurrentBoard()) {
						this.setCurrentBoard(this.boards[this.boards.length - 1]);
					} 
				} else {
					this.setCurrentBoard(null);
				}
				var notify = Notifications.boardDeleted(b);
				MainBoard.log(notify);
				return true;
			}
		}
		return false;	
	};

	// MAIN update
	MainBoard.prototype.update = function(board) {
		var main = document.getElementById(this._id);
		main.innerHTML = "";
		var topPanel = this.renderTopPanel();
		var content = this.renderMainContent();
		var bottomPanel = this.renderBottomPanel();
		main.appendChild(topPanel);
		main.appendChild(content);
		main.appendChild(bottomPanel);
		var b;
		if (Utils.isBoard(board)) {
			b = board.render();
			content.appendChild(b);
		}
	}
	return MainBoard;
});


