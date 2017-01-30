import {
	ELEMENT_IFRAME,
	ELEMENT_DIV
} from "./Constants";
import $ from "jquery";

class File {
	constructor(){
		this.url = null;
	}

	renderIframe () {
		const frame = $(ELEMENT_IFRAME, {
			"class" : "iframe-file",
			"src": this.url,
			
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
				this.setFileUrl(File.googleAPI.startURL.concat(i.val(), File.googleAPI.endURL));
				// this.changeUrl();
				const currentIframe = $(".iframe-file");
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

	getFileUrl () {
		return this.url;
	}

	setFileUrl (newUrl) {
		this.url = newUrl;
		return this;
	}
	render () {
		return this.renderIframe();
	}
}

File.googleAPI = {
		startURL: "http://docs.google.com/gview?",
		endURL: "&embedded=true"
	};

export default File;