// import Video from './trash/Video';
// import Canvas from './Canvas';
// import ViewFiles from './trash/ViewFiles';

import PaintView from "../painting/PaintView";
import PDF_View from "../pdf_view/PDF_View";
import View from "../global/View";
import $ from 'jquery';


class BoardView extends View {
	constructor(props ={}) {
		super(props);
		this.controller = new BoardController({
			model: new BoardModel({
				name: props.name,
				id: props.name + "_id"
			})
		});
	}

	handleSelect(type) {
		console.log(type);
		this.controller.setCurrentView(type);
		this.update();
	}

	renderContent () {
		const boardContent = $("<div></div>", {
			"class": "board-content"
		});
		var currentView = this.controller.getCurrentView();
		if (currentView != null) {
			boardContent.append(currentView.render());
		}
		return boardContent;
	};

	renderAsidePanel () {
		const asidePanel = $("<div></div>", {
			"class": "board-asidePanel"
		});

		const buttons = [
			{
				name: "Paint",
				onClick: (e) => {
					e.preventDefault();
					this.handleSelect(e.target.textContent);
				}
			},
			{
				name: "PDF",
				onClick: (e) => {
					e.preventDefault();
					this.handleSelect(e.target.textContent);
				}
			},
			{
				name: "Files",
				onClick: (e) => {
					// console.log("files");
					e.preventDefault();
					this.handleSelect(e.target.textContent);
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

	update () {
		const main = $("#" + this._id);
		const boardContent = $(".board-content");
		const content = this.controller.getCurrentView().render();
		if (content != null) {
			const ch = $(boardContent).children()[0];
			if (ch != null) {
				$(ch).replaceWith(content);
			} else {
				$(boardContent).append(content);
			}
		}
	}

	render () {
		const wrapper = this.renderWrapper();
		wrapper.attr("id", this.controller.model.id);
		const content = this.renderContent();
		const asidePanel = this.renderAsidePanel();
		wrapper.append(asidePanel, content);
		return wrapper;
	}
}

class BoardWindow {
	constructor(name) {
		this.name = name;
		this._id = this.name + "_id";
		this._currentView = null;


		this.currentView = null;

		this.views = {
			"Paint": new PaintView({elementId: "content", tools: ["brush", "shapes", "background", "erase", "select"]}),
			"PDF": new PDF_View({id: "canvas", tools: ["brush"]})
		};
		this.boardElement = null;
		// this._elements = [v, c];
		// this._views = {
		// 	0: new Video(),
		// 	1: new Canvas()
		// }

		// test
		// const elems = [new Video(), new Canvas()];
		// this.boardElements = {
		// 	"Video": new Video(),
		// 	"Canvas": new Canvas()
		// };
		// this.boardElement = null;


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
				name: "Paint",
				onClick: (e) => {
					e.preventDefault();
					this.handleSelect(e.target.textContent);
				}
			},
			{
				name: "PDF",
				onClick: (e) => {
					e.preventDefault();
					this.handleSelect(e.target.textContent);
				}
			},
			{
				name: "Files",
				onClick: (e) => {
					// console.log("files");
					e.preventDefault();
					this.handleSelect(e.target.textContent);
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

export default BoardView;
