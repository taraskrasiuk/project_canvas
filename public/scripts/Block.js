"use strict";
import $ from 'jquery';
import {
	ELEMENT_DIV,
	ELEMENT_IMG,
	ELEMENT_BTN,
	STATIC_PATH,
	IMAGES_PATH
} from './Constants';

class Block {
	constructor(options) {
		const {key, el, isActive, createElement} = options;
		this.key = key;
		this.element = el;
		this.isActive = isActive;
		this.isInit = false;
		this.createElement = (createElement != null) ? createElement : $(ELEMENT_DIV);
	};

	onClick (e) {
		e.preventDefault();
		this.isInit = true;
		this.element = this.createElement.render();
		this.render();
	}

	getInitButton() {
		const img = $(ELEMENT_IMG, {
			"class": "init-img",
			"src": `${STATIC_PATH}${IMAGES_PATH}init_${this.key}.png`
		});

		const btn = $(ELEMENT_BTN, {
			"class": "init-btn"
		}).append(img).on("click", this.onClick.bind(this));
		return btn;
	}

	render () {
		const currentKey = `${this.key}-wrapper`;
		let wrapper = wrapper = $(ELEMENT_DIV, {
				"class": currentKey
			});;
		if (!this.isInit) {
			$(wrapper).addClass("init");
			const initButton = this.getInitButton();
			$(wrapper).append(initButton);
			if (this.element != null) {
				$(wrapper).append(this.element)
			}
		} else {
			let exist = $(".board-window");
			let len = $(exist).children().length;
			if (len > 0) {
				const el = exist.children()[1];
				$(el).empty().append(wrapper);
			}
			$(wrapper).removeClass("init");
			$(wrapper).empty("");
			$(wrapper).append(this.element);
		}
		if (this.isActive) {
			$(wrapper).addClass("open");
		} else {
			$(wrapper).removeClass("open").addClass("close");
		}
		return wrapper;
	};

	setIsActive (boolean) {
		this.isActive = boolean;
		return this;
	};

	getIsActive () {
		return this.isActive;
	};

	getElement () {
		return this.element;
	};

	setElement (el) {
		this.element = el;
		return this;
	};

	
};
export default Block;