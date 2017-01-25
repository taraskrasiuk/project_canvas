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
		const {key, el, isActive, createElement, startElement} = options;
		this.key = key;
		this.element = el;
		this.isActive = isActive;
		this.isInit = false;
		this.createElement = (createElement != null) ? createElement : $(ELEMENT_DIV);
		this.startElement = startElement;
	};

	getInitButton(cb) {
		const img = $(ELEMENT_IMG, {
			"class": "init-img",
			"src": `${STATIC_PATH}${IMAGES_PATH}init_${this.key}.png`
		});

		const btn = $(ELEMENT_BTN, {
			"class": "init-btn"
		}).append(img).on("click", cb);
		return btn;
	}

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