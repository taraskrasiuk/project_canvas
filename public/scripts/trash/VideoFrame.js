import Block from '../Block';
import {
	TEST_VIDEO_URL,
	ELEMENT_DIV,
	ELEMENT_IFRAME,
	TEST_YOUTUBE_VIDEO_URL
} from '../Constants';
import $ from "jquery";

class VideoFrame {
	constructor(url, changeUrl) {
		this.url = url || TEST_YOUTUBE_VIDEO_URL;
		this.changeUrl = changeUrl;
		this.player = null;
		this.done = false;
	}

	renderIframe () {
		return $(ELEMENT_DIV, {
			id: "player"
		});
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
				const videoId = i.val().split("?v=")[1];
				this.player.loadVideoById(videoId);
				const currentIframe = $(".iframe-video");
				currentIframe.attr("src", this.url);
			}
			// this.render();
		});
		return $(ELEMENT_DIV, {}).append(label, button);
	}

	init (elementId) {
		const element = $(elementId);
		this.initYoutubeApi();
		element.append(this.renderUrlField());
		element.append(this.renderIframe());
		this.initPlayer();
		return element
	}

	initYoutubeApi () {
		const scriptTag = document.createElement("script");
		scriptTag.setAttribute("src", "https://www.youtube.com/iframe_api");
		var firstScriptTag = document.getElementsByTagName('script')[0];
      	firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
	}
	initPlayer () {
		const self = this;
		const videoWrapper = $(".video-wrapper");
		window.onYouTubeIframeAPIReady = () => {
			this.player = new YT.Player("player", {
				height: "360",
				width: videoWrapper.width(),
				videoId: "uxIF8upjjRA",
				events: {
					onReady: self.onReadyPlayer,
					onStateChange: self.onStateChangePlayer
				}
			});
		};
	}
	onReadyPlayer (e) {
		e.target.playVideo();
	}
	onStateChangePlayer(e) {
		if (e.data == YT.PlayerState.PLAYING && !this.done) {
          setTimeout(stopVideo, 6000);
          this.done = true;
        }
	}
	stopVideo () {
		this.player.stopVideo();
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
