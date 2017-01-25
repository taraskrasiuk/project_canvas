import CanvasPaint from "./CanvasPaint";
import Block from './Block';
import $ from "jquery";
import {
	ELEMENT_DIV,
	ELEMENT_CANVAS
} from './Constants';

class Canvas extends Block{
	constructor() {
		super({key: "canvas", element: null, isActive: true});
		this.canvas = new CanvasPaint();
	}

	renderCanvas () {
		const canvas = $(ELEMENT_CANVAS, {
			id: "canvas-element",
		});

		return canvas;
	}
	// ** ALMOST DUPLICATE
	render () {
		const currentKey = `${this.key}-wrapper`;
		let wrapper = null;
		if (this.isInit) {
			const existWrapper = $(currentKey);
			if (existWrapper.hasClass("init")) {
				existWrapper.removeClass("init");
			}
			return this.element;
		} else {
			wrapper = $(ELEMENT_DIV, {
				"class": `${this.key}-wrapper`
			}).addClass("init");
			const initButton = this.getInitButton((e) => {
				let currentWrapper = $("." + currentKey);
				currentWrapper.empty();
				const canvas = this.renderCanvas();
				currentWrapper.append(canvas);
				this.canvas.init("canvas-element");
				this.element = currentWrapper;
				this.isInit = true;
			});
			wrapper.append(initButton);
		}
		return wrapper;
	}

};

export default Canvas;
