import Utils from './Utils';
import Notifications from './Notifications';
import BoardWindow from './BoardWindow';
import UI from './UI.js';
import $ from 'jquery';
import {
	MAX_BOARDS,
	ELEMENT_DIV,
	ELEMENT_UL
} from './Constants';
import Canvas from "./Canvas";
import CanvasPaint from "./CanvasPaint";

class MainBoard {
	constructor(isBoard) {
		this.boards = [];
		if (isBoard) {
			this._currentBoard = new BoardWindow("Board 1");
			this.boards.push(this._currentBoard);
		} else {
			this._currentBoard = null;
		}
		this._id = "main_board";
		this.isDrag = false;
		this.socket = null;
	};
	static log(string) {
		console.log("MainBoard: " + string);
	}

	init (id) {
		const main = $(ELEMENT_DIV, {
				id: this._id
			});
		// main.resize(e => {
		// 	console.log("***" + e);
		// });
		const targetElement = $("#" + id);
		const topPanel = this.renderTopPanel();
		const bottomPanel = this.renderBottomPanel();
		const content = this.renderMainContent();
		if (this._currentBoard != null) {
			$(content).append(this._currentBoard.render());
		}
		if (id != null) {
			$(main).append(topPanel, content, bottomPanel).appendTo(targetElement);
			resize();
		} else {
			$(main).append(topPanel, content, bottomPanel).appendTo("body");
			resize();
		}
	};

	topDrag () {
		const top = $(ELEMENT_DIV, {
			"class": "topDrag"
		});
		const self = this;
		$('body').on('mousedown','.topDrag', (e) => {
			self.isDrag = true;
			const id = '#' + self._id;
	        $(e.currentTarget).addClass('drag').parents().on('mousemove', (e) => {
	        	if (self.isDrag) {
		            $(id).offset({
		                top: e.pageY - $(id).outerHeight() / 2,
		                left: e.pageX - $(id).outerWidth() / 2
		            }).on('mouseup', () => {
		            	self.isDrag = false;
		                $(this).removeClass('drag');
		            });
	            }
	        });
	        e.preventDefault();
	    }).on('mouseup', () => {
	    	self.isDrag = false;
	        $('.topDrag').removeClass('drag');
	    });
	    return top;
	}

	renderTopPanel () {
		const self = this;
		const topPanel = $(ELEMENT_DIV, {
			"class": "top-panel"
		}).append(this.topDrag());
		const topPanelHead = $("<h3></h3>", {
			"class": "top-panel_head",
			text: "Board"
		}).appendTo(topPanel);
		const ul = $(ELEMENT_UL, {
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
			}).append(span).toggleClass("active", self._currentBoard == el);
			
			return li;
		});
		if (this.boards.length < MAX_BOARDS) {
			const addSpan = $("<li></li>", {
				"class": "list_item",
				text: "+"
			}).on("click", (e) => {
				self.addBoard(new BoardWindow("Board " + self.boards.length));
			});

			liArray.push(addSpan);
		}
		liArray.forEach(el => {
			el.appendTo(ul);
		});
		return topPanel;
	};

	renderBottomPanel () {
		const bottomPanel = $(ELEMENT_DIV, {
			"class": "bottom-panel"
		}).append($("<button>Rec</button>").on("click", (e) => {
			if (this._currentBoard != null) {
				const v = this._currentBoard._currentView;
				if (v.canvas != null && v.canvas instanceof CanvasPaint) {
					console.log(v.canvas.canvas);
					// JSON.stringify(v.canvas.canvas);
				}
			}
		}))
		// .append($("<span></span>", {
		// 	"class": "resize_span"
		// }));
		return bottomPanel;
	};

	renderMainContent () {
		const board = $(ELEMENT_DIV, {
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
				this.boards = this.boards.filter((el, i, arr) => i != idx);
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
		$(main).empty();
		const topPanel = this.renderTopPanel();
		const bottomPanel = this.renderBottomPanel();
		const content = this.renderMainContent();
		if (board != null) {
			const b = board.render();
			content.append(b);
		}
		$(main).append(topPanel, content, bottomPanel);
		// resize();
	}
}
	
export default MainBoard;


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

			   const canvasWrapper = $(".canvas-wrapper");
			   // if (canvasWrapper != null) {
			   // 		// console.log(canvasWrapper.children());
			   // 		const contaier = $(".canvas-container");
			   // 		if (container != null && this._currentBoard._currentView != null) {
			   // 			const c = this._currentBoard._currentView.canvas.canvas;
			   // 			if (c != null) {
			   // 				const scale = canvasWrapper.width() / $(container).width();
			   // 				const objects = c.getObject();
			   // 				for (let k in objects) {
						// 		objects[i].scaleX = objects[i].scaleX * scale;
				  //               objects[i].scaleY = objects[i].scaleY * scale;
				  //               objects[i].left = objects[i].left * scale;
				  //               objects[i].top = objects[i].top * scale;
				  //               objects[i].setCoords();       
			   // 				}
			   // 				c.setWidth(c.getWidth() * scale);
				  //           c.setHeight(c.getHeight() * scale);
				  //           c.renderAll();
				  //           c.calcOffset();
			   // 			}
			   // 		}
			   // }

			}

			function stopDrag(e) {
			    document.documentElement.removeEventListener('mousemove', doDrag, false);    
			    document.documentElement.removeEventListener('mouseup', stopDrag, false);
			}
			// var resizeSpan = document.querySelector(".resize_span");
			// resizeSpan.addEventListener("mousemove", initDrag, false);
}

