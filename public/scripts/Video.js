// "use strict";
import UI from './UI';
import Block from './Block';
import {
	TEST_VIDEO_URL,
	ELEMENT_DIV,
	ELEMENT_IFRAME,
	TEST_YOUTUBE_VIDEO_URL
} from './Constants';
import $ from "jquery";

class VideoFrame {
	constructor(url) {
		this.url = url || TEST_YOUTUBE_VIDEO_URL;
	}

	renderIframe () {
		const frame = $(ELEMENT_IFRAME, {
			"class" : "iframe-video",
			"src": this.url,
			"controls": true,
			"allowfullscreen": true,
			"frameborder": 0
		});
		return frame;
	};

	getVideoUrl () {
		return this.url;
	};

	setVideoUrl (newUrl) {
		this.url = newUrl;
		return this;
	};
	render () {
		return this.renderIframe();
	}
}

class Video extends Block {
	constructor() {
		super({key: "video", element: null, isActive: true, createElement: new VideoFrame()});
		this.url = null;
		this._videoMode = 'static';

	};

	

};
export default Video;
