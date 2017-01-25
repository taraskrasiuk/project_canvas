import UI from './UI';
import Video from './Video';
import Canvas from './Canvas';
import ViewFiles from './ViewFiles';

import $ from 'jquery';

class BoardWindow {
	constructor(name) {
		this.name = name;
		this._id = this.name + "_id";
		this._currentView = null;


		this.currentView = null;
		
		this.views = {
			"Video": new Video(),
			"Paint": new Canvas()
		};

		this.videoElement = new Video();
		this.canvasElement = new Canvas();

		// board element
		this.boardElement = null;
		var v = new Video();
		var c = new Canvas();
		this.files = new ViewFiles();
		this._elements = [v, c];
		this._views = {
			0: new Video(),
			1: new Canvas()
		}

		// test
		// const elems = [new Video(), new Canvas()];
		this.boardElements = {
			"Video": new Video(),
			"Canvas": new Canvas()
		};
		this.boardElement = null;


	};

	static randomId() {
		const str = "BoardWindow";
		let res = "";
		for(var i = 0; i < str.length; i++) {
			if (i % 3 == 0) {
				res+= "$+";
			} else {
				res+= str[Math.ceil(Math.random() * i)];
			}
		}
		return res;
	}
	getId () {
		return this._id;
	};
	
	render () {
		const content = this.renderContent();
		const asidePanel = this.renderAsidePanel();
		const main = $("<div></div>", {
			"class": "board-window",
			id: this._id
		}).append(asidePanel, content);
		return main;
	};

	renderContent () {
		const boardContent = $("<div></div>", {
					"class": "board-content"
		});
		if (this._currentView != null) {
			boardContent.append(this._currentView.render());
		}
		return boardContent;
	};

	update () {
		const main = $("#" + this._id);
		const boardContent = $(".board-content");
		// $(boardContent).empty();
		const content = this._currentView.render();
		// const boardContent = $(".board-content"); 
		if (content != null) {
			// $(boardContent).innerHTML = "";
			const ch = $(boardContent).children()[0];
			if (ch != null) {
				$(ch).replaceWith(content);
			} else {
				$(boardContent).append(content);
			}
		}
	};

	handleSelect(type) {
		console.log(type);
		this._currentView = this.views[type];
		this.update();
	}

	renderAsidePanel () {
		const asidePanel = $("<div></div>", {
			"class": "board-asidePanel"
		});

		const buttons = [
			{
				name: "Video",
				onClick: (e) => {
					e.preventDefault();
					this.handleSelect(e.target.textContent);
				}
			},
			{
				name: "Paint",
				onClick: (e) => {
					e.preventDefault();
					this.handleSelect(e.target.textContent);
				}
			},
			{
				name: "File",
				onClick: (e) => {
					console.log("files");
				}
			}
		];
		buttons.forEach((btn) => {
			const b = $("<button></button>", {
				"class": "asidePanel-" + btn.name +"Button",
				text: btn.name 
			}).on("click", btn.onClick.bind(this)).appendTo(asidePanel);
			
		});
		return asidePanel;
	};
}
	
export default BoardWindow;
