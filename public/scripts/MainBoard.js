import Utils from './Utils';
import Notifications from './Notifications';
import BoardWindow from './BoardWindow';
import UI from './UI.js';
import $ from 'jquery';
import {
	MAX_BOARDS
} from './Constants';

class MainBoard {
	constructor() {
		this.boards = [];
		this._currentBoard = null;
		this._id = "main_board";
	};
	static log(string) {
		console.log("MainBoard: " + string);
	}

	init (id) {
		const main = $("<div></div>", {
			id: this._id
		});
		const targetElement = $("#" + id);
		const topPanel = this.renderTopPanel();
		const bottomPanel = this.renderBottomPanel();
		const content = this.renderMainContent();
		if (this._currentBoard != null) {
			$(content).append(this._currentBoard.render());
		}
		$(main).append(topPanel, content, bottomPanel).appendTo(targetElement);
		resize();
	};

	renderTopPanel () {
		const self = this;
		const topPanel = $("<div></div>", {
			"class": "top-panel"
		});
		const topPanelHead = $("<h3></h3>", {
			"class": "top-panel_head",
			text: "Board"
		}).appendTo(topPanel);
		const ul = $("<ul></ul>", {
			"class": "top-panel_list"
		}).appendTo(topPanel);
		const liArray = this.boards.map((el, idx) => {
			const span = $("<span></span>", {
				"class": "close",
				"text": "x"
			}).on("click", (e) => {
				self.deleteBoard(el);
			});
			const li = $("<li></li>", {
				"class": "list_item",
				text: el.name
			}).on("click", (e) => {
				self.setCurrentBoard(el);
			}).append(span).toggleClass("active", this._currentBoard == el);
			
			return li;
		});
		const addSpan = $("<li></li>", {
			"class": "list_item",
			text: "+"
		}).on("click", (e) => {
			self.addBoard(new BoardWindow("Board " + self.boards.length));
		});

		liArray.push(addSpan);
		liArray.forEach(el => {
			el.appendTo(ul);
		});
		return topPanel;
	};

	renderBottomPanel () {
		const bottomPanel = $("<div></div>", {
			"class": "bottom-panel"
		}).append($("<span></span>", {
			"class": "resize_span"
		}));
		return bottomPanel;
	};

	renderMainContent () {
		const board = $("<div></div>", {
			"class": "main-board"
		});
		return board;
	};

	addBoard (board) {
		if (Utils.isBoard(board)){
			if (this.boards.length < MAX_BOARDS) {
				this.boards.push(board);
				this.setCurrentBoard(board);
				MainBoard.log(Notifications.boardAdded(board));
				return true;
			}
		}
		return false;
	};

	getCurrentBoard (){
		return this._currentBoard;
	};

	setCurrentBoard (b) {
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

	deleteBoard (b) {
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

	
	update (board) {
		const main = $("#" + this._id);
		$(main).html("");
		const topPanel = this.renderTopPanel();
		const bottomPanel = this.renderBottomPanel();
		const content = this.renderMainContent();
		if (board != null) {
			const b = board.render();
			content.append(b);
		}
		$(main).append(topPanel, content, bottomPanel);
		resize();
	}
}
	
export default MainBoard;


// DRAG

const drag_start = (event) => {
	const main = $("main_board");
    const style = window.getComputedStyle(main, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
};
const drag_over = (event) => { 
    event.preventDefault(); 
    return false; 
}; 
const drop = (event) => { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('main_board');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
} 

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
			   p.style.width = (startWidth + e.clientX - startX) + 'px';
			   p.style.height = (startHeight + e.clientY - startY) + 'px';
			}

			function stopDrag(e) {
			    document.documentElement.removeEventListener('mousemove', doDrag, false);    
			    document.documentElement.removeEventListener('mouseup', stopDrag, false);
			}
			var resizeSpan = document.querySelector(".resize_span");
			resizeSpan.addEventListener("mousemove", initDrag, false);
}

