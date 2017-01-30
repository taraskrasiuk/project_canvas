"use strict";
import UI from './UI';
import Block from "./Block";
import File from "./File";
import $ from "jquery";
import {
	ELEMENT_DIV
} from "./Constants";
const TEST_PDF_URL = "url=http://infolab.stanford.edu/pub/papers/google.pdf";


class ViewFiles extends Block{
	constructor(files) {
		super({key: "files", element: null, isActive: true});
		this.fileUrl = null;
		this.file = new File();
	}
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
				this.element = this.file.init("." + currentKey);
				this.isInit = true;
			});
			wrapper.append(initButton);
		}
		return wrapper;
	}

	
}
export default ViewFiles;
