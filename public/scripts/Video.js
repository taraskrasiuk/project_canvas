import $ from "jquery";
import VideoFrame from "./VideoFrame";
import Block from './Block';
import {
	ELEMENT_DIV
} from "./Constants";

class Video extends Block {
	constructor() {
		super({key: "video", element: null, isActive: true});
		this.video = new VideoFrame(null, (val) => {
			this.render();
		});
	};

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
				this.element = this.video.init("." + currentKey);
				this.isInit = true;
			});
			wrapper.append(initButton);
		}
		return wrapper;
	}
};
export default Video;
