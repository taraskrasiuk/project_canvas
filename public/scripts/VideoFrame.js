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
	constructor(url, changeUrl) {
		this.url = url || TEST_YOUTUBE_VIDEO_URL;
		this.changeUrl = changeUrl;
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
	}

	renderUrlField () {
		const input = $("<input />", {
			type: "text",
			"class": "video-input-field",
			"id": "video-input"
		});
		const label = $("<label>Set url</label>", {
			"class": "label",
			"for": "video-input"
		}).append(input);
		const button = $("<button>Ok</button>", {
			"class": "btn"
		}).on("click", (e) => {
			const i = $("#video-input");
			if (i.val() != null) {
				this.setVideoUrl(i.val());
				// this.changeUrl();
				const currentIframe = $(".iframe-video");
				currentIframe.attr("src", this.url);
			}
			// this.render();
		});
		return $(ELEMENT_DIV, {}).append(label, button);
	}

	init (elementId) {
		const element = $(elementId);
		element.append(this.renderUrlField());
		element.append(this.renderIframe());
		return element
	}

	getVideoUrl () {
		return this.url;
	}

	setVideoUrl (newUrl) {
		this.url = newUrl;
		return this;
	}
	render () {
		return this.renderIframe();
	}
};

export default VideoFrame;