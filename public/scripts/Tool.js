import $ from "jquery";
import {
	ELEMENT_IMG
} from "./Constants";

class Tool {
	constructor(props) {
		this.className = props.className;
		this.type = props.type;
		this.imgSrc = props.imgSrc;
		this.handleOnClick = props.handleOnClick;
		this.active = props.active;
	}
	render () {
		const t = `<${this.type}></${this.type}>`;
		const tool = $(t, {
			"class": this.className
		}).append($(ELEMENT_IMG, {
			"class" :`tool-img`,
			src: this.imgSrc
		}));
		if (this.active) {
			tool.addClass("active");
		}
		if (this.handleOnClick != null) {
			tool.on("click", this.handleOnClick);
		}
		return tool;
	}
}
export default Tool;