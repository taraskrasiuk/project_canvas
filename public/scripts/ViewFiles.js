"use strict";
import UI from './UI';

const TEST_PDF_URL = "url=http://infolab.stanford.edu/pub/papers/google.pdf";


class ViewFiles {
	constructor(files) {
		this.files = files || [];
		// test
		this.files.push(TEST_PDF_URL);
		this.files.push("url=https://drive.google.com/file/d/0B650xTmUSUQYNDBSbkxtdG4wcHc/view?usp=sharing");
		this.selectedFileURL = null;
		this.listIsOpen = false;
		this.iframeIsOpen = false;
		var self = this;
		this.closeIframe = function(e) {
			
			var iframe = document.querySelector(".iframe-file");

			if (self.iframeIsOpen && iframe != null) {
				var p = iframe.parentElement;
				p.removeChild(iframe);
				window.removeEventListener(self.closeIframe, true);
			}
		};
		window.addEventListener("click", self.closeIframe, true);
	};

	renderButton () {
		var self = this;
		var b = UI.createElement({
				type: "button",
				className: "asidePanel-fileButton",
				eventType: "click",
				name: "file",

				event: function(e) {
					e.preventDefault();
					e.stopPropagation();
					self.listIsOpen = !self.listIsOpen;
					// var p = ViewFiles.getParent(e.target, ".files-wrapper");
					if (self.listIsOpen) {
						var wrapper = document.querySelector(".files-wrapper");
						if (wrapper != null) {
							var list = self.renderList();
							wrapper.appendChild(list);

						}
					} else {
						var wrapper = document.querySelector(".files-wrapper");
						if (wrapper != null) {
							var list = document.querySelector(".file-list");
							wrapper.removeChild(list);

						}
					}
					console.log(self);
				}
		});
		return b;
	};

	renderList () {
		var list = UI.createElement({
			type: "ul",
			className: "file-list"
		});
		var self = this;
		this.files.forEach(function(f) {
			var file = UI.createElement({
				type: "li",
				className: "list_item",
				name: f,
				eventType: "click",
				event: function(e) {
					e.preventDefault();
					self.selectedFileURL = f;
					self.iframeIsOpen = true;
					self.listIsOpen = false;
					var body = document.body;
					var iframe = self.renderIframe();
					body.appendChild(iframe);
					var list = document.querySelector(".file-list");
					if (list != null) {
						var parent = list.parentElement;
						if (parent != null) {
							parent.removeChild(list);
						}
					}
				}
			});
			list.appendChild(file);
		});
		if (this.listIsOpen) {
			list.classList.add("list-open");
		}
		return list;
	};

	renderIframe () {
		if (this.iframeIsOpen && this.selectedFileURL != null) {
			var iframe = UI.createElement({
				type: "iframe",
				className: "iframe-file"
			});
			var uri = ViewFiles.googleAPI.startURL.concat(this.selectedFileURL, ViewFiles.googleAPI.endURL); 
			console.log(uri);
			iframe.setAttribute("src", uri);
			return iframe;
		};
	};

	render () {
		var wrapper = UI.createElement({
			type: "div",
			className: "files-wrapper"
		});
		var btn = this.renderButton();
		wrapper.appendChild(btn);
		return wrapper;

	};
}
export default ViewFiles;
