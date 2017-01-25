import UI from './UI';
import {
	TOOL_IMG_PATH,
	ELEMENT_IMG,
	ELEMENT_BTN,
	ELEMENT_DIV,
	SHAPE_CIRCLE,
	SHAPE_RECTANGLE,
	SHAPE_TRIANGLE,
	SHAPE_ELLIPSE,
	SHAPE_LINE,
	COLOR_FILL_COLOR,
	COLOR_BACKGROUND,
	COLOR_STROKE_COLOR,
	TRANSFORM_WIDTH_STROKE,
	BRUSH_TOOL,
	ELEMENT_INPUT,
	ELEMENT_LABEL
} from './Constants';
import $ from "jquery";

const sameSet = {
	colors: {
		fillColor: true,
		strokeColor: true	
	},
	transforms: {
		strokeWidth: true			 
	}
};

class CanvasTools {
	constructor(props = {}) {
		const {activeShape, strokeWidth, strokeColor, fillColor, backgroundColor} = props;
		this.activeShape = activeShape || null;
		this.strokeWidth = strokeWidth || 5;
		this.strokeColor = strokeColor || "#ddd";
		this.fillColor = fillColor || "#299";
		this.backgroundColor = backgroundColor || "#8cf";
	}

	renderTool (name, cb) {
		const img = $(ELEMENT_IMG, {
			"class": "tool-img",
			src: `${TOOL_IMG_PATH}tool_${name}.png`
		});
		const button = $(ELEMENT_BTN, {
			"class": "tool-button"
		}).append(img).on("click", (e) => {
			e.preventDefault();
			this.activeShape = name;
			const p = e.currentTarget.parentElement;
			Array.prototype.forEach.call(p.children, (el) => {
				if (el.classList.contains("active")) {
					el.classList.remove("active");
				}
			});
			e.currentTarget.classList.add("active");
			cb(name);
		});
		return button;
	}

	renderTransform (name, cb) {
		const range = $(ELEMENT_INPUT, {
			"class": "tool-range",
			"type": "range",
			"min": 1,
			"max": 50,
			"step":1
		}).on("input", cb);
		return this._getLabel(name, range);
	}

	renderColors (name, cb) {
		const color = $(ELEMENT_INPUT, {
			"class": "tool-color",
			"type": "color",
			"value": "#fff"
		}).on("input", cb).css({display: "none"});
		return this._getLabel(name, color, name);
	}

	toolGroup (groupName, array, method, cb) {
		const wrapper = $(ELEMENT_DIV, {
			"class": "tool-group"
		});
		array.forEach(el => {
			wrapper.append(method(el, cb));
		});
		return wrapper;
	}
	_getLabel (name, child, imgSrc) {
		const l =  $(ELEMENT_LABEL, {
			"text": name,
			"class": "tool-label"
		}).append(child);
		if (imgSrc != null) {
			const img = $(ELEMENT_IMG, {
				"class": "tool-label_img",
				"src": `${TOOL_IMG_PATH}tool_${name}.png`
			}).appendTo(l);
		}
		return l;
	}

	setActiveTool (tool) {
		this.activeTool = tool;
		return this;
	}
}
CanvasTools.toolsShapes = [
	BRUSH_TOOL, SHAPE_RECTANGLE, SHAPE_TRIANGLE, SHAPE_CIRCLE, SHAPE_ELLIPSE
];
CanvasTools.toolsColors = [
	COLOR_BACKGROUND, COLOR_FILL_COLOR, COLOR_STROKE_COLOR
];
CanvasTools.toolsTransforms = [
	TRANSFORM_WIDTH_STROKE
];
CanvasTools.set = {
	default: {
		colors: {
			[COLOR_FILL_COLOR]: true,
			[COLOR_STROKE_COLOR]: true,
			[COLOR_BACKGROUND]: true
		},
		transforms: {
			[TRANSFORM_WIDTH_STROKE]: true			 
		}
	},
	brush: {
		colors: {
			[COLOR_STROKE_COLOR]: true	
		},
		transforms: {
			[TRANSFORM_WIDTH_STROKE]: true
		}
	},
	[SHAPE_RECTANGLE]: sameSet,
	[SHAPE_TRIANGLE]: sameSet,
	[SHAPE_CIRCLE]: sameSet,
	[SHAPE_ELLIPSE]: sameSet
};


export default CanvasTools;
