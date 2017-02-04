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
	COLOR_LINE_COLOR,
	TRANSFORM_WIDTH_STROKE,
	TRANSFORM_WIDTH_LINE,
	BRUSH_TOOL,
	ELEMENT_INPUT,
	ELEMENT_LABEL,
	PAINT_SET_DEFAULT,
	PAINT_SET_BRUSH,
	PAINT_SET_PENCIL,
	TOOLS_GROUP_COLORS,
	TOOLS_GROUP_TRANSFORMS,
	TOOLS_GROUP_SHAPES,
	SHAPE_TEXT,
	COLOR_TEXT_COLOR,
	TRANSFORM_FONT_SIZE
} from './Constants';
import $ from "jquery";

class CanvasTools {
	constructor(props = {}) {
		const {activeShape, strokeWidth, strokeColor, fillColor, backgroundColor} = props;
		this.activeShape = activeShape || null;
		this.strokeWidth = strokeWidth || 5;
		this.strokeColor = strokeColor || "#ddd";
		this.fillColor = fillColor || "#299";
		this.backgroundColor = backgroundColor || "#8cf";

		this.currentSet = CanvasTools.sets[PAINT_SET_DEFAULT];
		if (props.handleBackgroundColorChange) {
			this.handleBackgroundColorChange = props.handleBackgroundColorChange;
		}
		if (props.handleDrawing) {
			this.handleDrawing = props.handleDrawing;
		}
		if (props.handleShape) {
			this.handleShape = props.handleShape;
		}
		if (props.handleText) {
			this.handleText = props.handleText;
		}
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
			if (name == "Brush") {
				this.handleDrawing(name);
			}
			if (name != "Brush" && name != "IText") {
				this.handleShape(name);
			}
			if (name == "IText") {
				this.handleText(name);
			}
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
			"value": "#fff",
			"name": name
		}).on("input", cb).css({display: "none"});
		return this._getLabel(name, color, name);
	}

	toolGroup (groupName, array, method, cb) {
		const wrapper = $(ELEMENT_DIV, {
			"class": `tool-group ${groupName}`
		});
		array.forEach(el => {
			wrapper.append(method(el, cb));
		});
		return wrapper;
	}

	render () {
	 	const resultTools = [];
	 	const grShapes = this.toolGroup("Shapes", CanvasTools.toolsShapes, this.renderTool.bind(this), (toolName) => {
			const toolsWrapper = $(".tools-wrapper");
			if (toolsWrapper != null) {
				this.currentSet = CanvasTools.sets[toolName];
				const r = this.render();
				toolsWrapper.replaceWith(r);
			}
		});
	 	resultTools.push(grShapes);
	 	const fromSet = Object.keys(this.currentSet);
	 	const positionAbsoluteDiv = $(ELEMENT_DIV, {
	 		"class": "tool-absolute"
	 	});
	 	for(let s of fromSet){
		 	const toolGroup = this.currentSet[s];
		 	let forPush = null;
		 	switch(s) {
		 		case TOOLS_GROUP_COLORS:
		 			forPush = this.renderColors;
		 			break;
		 		case TOOLS_GROUP_TRANSFORMS:
		 			forPush = this.renderTransform;
		 			break;
		 		case TOOLS_GROUP_SHAPES:
		 			forPush = this.renderTool;
		 			break;
		 		default :
		 			console.log("UNKNOWN");
		 			break;
		 	}
		 	positionAbsoluteDiv.append(this.toolGroup(s, toolGroup, forPush.bind(this), (e) => {
		 		this[e.currentTarget.name] = e.currentTarget.value;
		 		if (e.currentTarget.name == "backgroundColor") {
		 			this.handleBackgroundColorChange(e.currentTarget.value);
		 		}
		 		console.log(e.currentTarget.name + "||" + e.currentTarget.value);
		 	}));
	 	}
	 	resultTools.push(positionAbsoluteDiv);
	 	const toolsWrapper = $("<div></div>", {
	 		"class": "tools-wrapper"
	 	}).append(resultTools);
	 	return toolsWrapper;
	 }

	setCurrentSet (newSet) {
		this.currentSet = newSet;
		return this;
	}

	getCurrentSet () {
		return CanvasTools.sets[this.currentSet];
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
	BRUSH_TOOL, SHAPE_RECTANGLE, SHAPE_TRIANGLE, SHAPE_CIRCLE, SHAPE_ELLIPSE, SHAPE_TEXT
];
CanvasTools.toolsColors = [
	COLOR_BACKGROUND, COLOR_FILL_COLOR, COLOR_STROKE_COLOR
];
CanvasTools.toolsTransforms = [
	TRANSFORM_WIDTH_STROKE
];

const sameSet = {
	[TOOLS_GROUP_COLORS]: [COLOR_FILL_COLOR, COLOR_STROKE_COLOR, COLOR_BACKGROUND],
	[TOOLS_GROUP_TRANSFORMS]: [TRANSFORM_WIDTH_STROKE]
};

CanvasTools.sets = {
	[PAINT_SET_DEFAULT]: {
		[TOOLS_GROUP_COLORS]: [COLOR_FILL_COLOR, COLOR_STROKE_COLOR, COLOR_BACKGROUND],
		[TOOLS_GROUP_TRANSFORMS]: [TRANSFORM_WIDTH_STROKE]
	},
	[BRUSH_TOOL]: {
		[TOOLS_GROUP_COLORS]: [COLOR_STROKE_COLOR, COLOR_BACKGROUND, COLOR_LINE_COLOR],
		[TOOLS_GROUP_TRANSFORMS]: [TRANSFORM_WIDTH_STROKE, TRANSFORM_WIDTH_LINE]
	},
	[SHAPE_TEXT] : {
		[TOOLS_GROUP_COLORS]: [COLOR_BACKGROUND, COLOR_TEXT_COLOR],
		[TOOLS_GROUP_TRANSFORMS]: [TRANSFORM_FONT_SIZE]	
	},
	[SHAPE_RECTANGLE]: sameSet,
	[SHAPE_TRIANGLE]: sameSet,
	[SHAPE_CIRCLE]: sameSet,
	[SHAPE_ELLIPSE]: sameSet,
	[SHAPE_LINE]: sameSet
};


export default CanvasTools;
