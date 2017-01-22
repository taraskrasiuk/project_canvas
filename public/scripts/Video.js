"use strict";

define("Video", ["UI"], function(UI) {
	var TEST_YOU_URL = "https://www.youtube.com/embed/B9FzVhw8_bY";
	var Video = function(url) { 
		if (url != null) {
			this.url = url;
		};
		this._isActive = false;
		this._videoMode = 'static';
		// video
		this._stop = true;
		this._play = false;
		this.element = null;

		this.isInit = false;

		this._videoElement = null;

	};

	Video.modes = {
		0: "static",
		1: "youtube"
	};

	Video.prototype.setActive = function(bool) {
		this._isActive = bool;
		var c = document.querySelector(".video-wrapper");
		var v = document.querySelector(".iframe-video");

		if (c != null && !bool) {
			c.classList.toggle("close");
			c.classList.remove("open");
			if (v != null) {
				v.pause();
			}
		} else if (c != null && bool){
			c.classList.remove("close");
			c.classList.add("open");
			
		}
		return this;
	};
	Video.prototype.getActive = function() {
		return this._isActive;
	};
	Video.prototype.renderVideo = function() {
		var	video;
		if (this._videoMode == "static") {
			video = UI.createElement({
				type: "video",
				className: "iframe-video"
			});
			if (this.url != null) {
				video.setAttribute("src", this.url);
				video.setAttribute("controls", true);
			}
		} else {
			video = UI.createElement({
				type: "iframe",
				className: "iframe-video"
			});
			video.setAttribute("height", 315);
			video.setAttribute("width", 560);
			video.setAttribute("frameborder", 0);
			video.setAttribute("allowfullscreen", true);
			
			video.setAttribute("src", this.url);
		}
		return video;
	};
	Video.prototype.render = function() {


		// var cls = "video-wrapper " + (this.isActive ? "open" : "close");
		// var wrapper = UI.createElement({
		// 	type: "div",
		// 	className: "video-wrapper",
		// 	// name: "Video"
		// });
		// if (this._isActive) {
		// 	wrapper.classList.add("open");
		// }
		// else {
		// 	wrapper.classList.remove("open");
		// 	wrapper.classList.add("close")
		// }
		// if (this._isActive) {
		// 	wrapper.classList.add("open");	
		// } else {
		// 	wrapper.classList.add("remove");
		// }
		
		if (this.isInit) {
			// wrapper.classList.add("open");
			// var modes = this.renderChangeModeVideo();
			// var video = this.renderVideo();
			// wrapper.appendChild(modes);
			// wrapper.appendChild(video);
			// if (this._videoMode == "youtube") {
			// 	var urlControl = this.renderURLinput();
			// 	wrapper.appendChild(urlControl);
			// }
			// if(!this._isActive) {
			// 	wrapper.classList.add("close");
			// }
			// wrapper.appendChild(this._videoElement);
			return this._videoElement;
		} else {
			var wrapper = UI.createElement({
				type: "div",
				className: "video-wrapper",
				// name: "Video"
			});
			if (this._isActive) {
				wrapper.classList.add("open");
			}
			else {
				wrapper.classList.remove("open");
				wrapper.classList.add("close")
			}
			wrapper.classList.add("init");
			var self = this;
			var img = UI.createElement({
				type: "img",
				className: "init-img"
			});
			img.setAttribute("src", "static/images/init_video.png");
			var initButton = UI.createElement({
				type: "div",
				className: "init-btn",
				child: img,
				eventType: "click",
				event: function(e) {
					e.preventDefault();
					self.isInit = true;
					var p = e.target.parentElement;
					if(p.classList.contains("init-btn")) {
						p.remove();
					}
					var w = document.querySelector(".video-wrapper");
					if (w != null) {
						w.classList.add("open");
						w.classList.remove("init");
						var modes = self.renderChangeModeVideo();
						var video = self.renderVideo();
						w.appendChild(modes);
						w.appendChild(video);
						if (self._videoMode == "youtube") {
							var urlControl = self.renderURLinput();
							w.appendChild(urlControl);
						}
						if(!self._isActive) {
							w.classList.add("close");
						}
					}
					self._videoElement = w;
					// self.isInit = true;
				}
			});
			wrapper.appendChild(initButton);
			return wrapper;
		}
		// return wrapper;
	};

	Video.prototype.renderURLinput = function() {
		var input = document.createElement("input");
		input.type = "text";
		input.classList.add("video-url_input");
		var self = this;
		var button = UI.createElement({
			type: "button",
			name: "play",
			eventType: "click",
			event: function(e) {
				e.preventDefault();
				var i = document.querySelector(".video-url_input");
				var val = i.value;
				self.url = val;
				var selector = self._isActive ? "open" : "close";
				var main = document.querySelector(".video-wrapper" + "." + selector);
				// this._videoMode = 1;
				main.innerHTML = "";

				main.appendChild(self.render());
			} 
		});
		var label = UI.createElement({
			type: "label",
			name: "video (url)",
			className: "label",
			child: input
		});
		var wrapper = UI.createElement({
			type: "div",
			className: "video-controls",
		});
		wrapper.appendChild(label);
		wrapper.appendChild(button);
		return wrapper;

	};

	Video.prototype.renderChangeModeVideo = function() {
		var staticRadio = document.createElement("input");
		staticRadio.type = "radio";
		staticRadio.name = "videoMode";
		staticRadio.value = "static";
		var self = this;

		staticRadio.addEventListener("click", function(e) {
			console.log(e.target.value);
			self._videoMode = e.target.value;
			var selector = self._isActive ? "open" : "close";
			var main = document.querySelector(".video-wrapper" + "." + selector);
			// this._videoMode = "0";
			main.innerHTML = "";
			main.appendChild(self.render());

		});
		if (this._videoMode == "static") {
			staticRadio.checked = true;
		}
		var labelStatic = UI.createElement({
			type: "label",
			name: Video.modes[0],
			className: "radio",
			child: staticRadio
		});

		var youtubeRadio = document.createElement("input");
		youtubeRadio.type = "radio";
		youtubeRadio.name = "videoMode";
		youtubeRadio.value = "youtube";
		youtubeRadio.addEventListener("click", function(e) {
			console.log(e.target.value);
			self._videoMode = e.target.value;
			var selector = self._isActive ? "open" : "close";
			var main = document.querySelector(".video-wrapper" + "." + selector);
			// this._videoMode = 1;
			main.innerHTML = "";

			main.appendChild(self.render());
		});
		if (this._videoMode == "youtube") {
			youtubeRadio.checked = true;
		}
		var labelYoutube = UI.createElement({
			type: "label",
			name: Video.modes[1],
			className: "radio",
			child: youtubeRadio
		}); 

		var radioWrapper = UI.createElement({
			type: "div",
			className: "radio-wrapper"
		});
		radioWrapper.appendChild(labelYoutube);
		radioWrapper.appendChild(labelStatic);
		return radioWrapper;
		

	};

	Video.prototype.setUrl = function(u) {
		this.url = u;
		return this;
	};
	Video.prototype.stop = function() {

	};
	Video.prototype.play = function() {

	};

	return Video;
});