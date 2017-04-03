import Block from './Block';
import $ from "jquery";
import {
	ELEMENT_DIV,
	ELEMENT_CANVAS
} from './Constants';

class Canvas extends Block{
	constructor() {
		super({key: "canvas", element: null, isActive: true});
		this.canvas = new PaintView({elementId: "canvas-element"});

	}

	renderCanvas () {
		const canvas = $(ELEMENT_CANVAS, {
			"id": "canvas-element",
		});
		const tools = this.canvas.tools.render();
		const _div = $("<div></div>").css({display: "flex", "width": "100%", "height": "100%"})
		.append(tools, canvas);

		return _div;
	}

	_init () {
		this.canvas.init();
	}
	// ** ALMOST DUPLICATE
	render () {
		if (this.element == null) {
			const currentKey = `${this.key}-wrapper`;
			let wrapper = $(ELEMENT_DIV, {
				"class": `${this.key}-wrapper`
			});
			this._init();
			wrapper.append(this.canvas.render());
			this.element = wrapper;
			return this.element;
		} else {
			return this.element;
		}

	}

};

export default Canvas;
