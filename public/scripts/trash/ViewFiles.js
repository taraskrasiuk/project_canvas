import Block from "../Block";
import File from "./File";
import $ from "jquery";
import {
	ELEMENT_DIV
} from "../Constants";
import PDFView from "./PDFView";
const TEST_PDF_URL = "url=http://infolab.stanford.edu/pub/papers/google.pdf";
// import PDFJS from "./pdf";

// console.log(PDFJS);


class ViewFiles extends Block{
	constructor(files) {
		super({key: "files", element: null, isActive: true});
		this.fileUrl = null;
		// this.file = new File();
		this.pdfView = new PDFView();
	}
	getPDFViewer () {

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
			wrapper.append(this.pdfView.render());
			const initButton = this.getInitButton((e) => {
				let currentWrapper = $("." + currentKey);
				currentWrapper.empty();
				this.element = this.pdfView.init("." + currentKey);
				// this.element = this.pdfView.render();
				// this.element = this.pdfView.prparePDF();
				this.isInit = true;
			});
			wrapper.append(initButton);

		}
		return wrapper;
	}


}
export default ViewFiles;
