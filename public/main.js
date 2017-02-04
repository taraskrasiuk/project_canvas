import MainBoard from './scripts/MainBoard.js';
import $ from 'jquery';
import {fabric} from 'fabric';
import {
	TEST_YOUTUBE_VIDEO_URL,
	TOOLS_GROUP_COLORS,
	TOOLS_GROUP_TRANSFORMS,
	TOOLS_GROUP_SHAPES,
	PAINT_SET_BRUSH
} from './scripts/Constants.js';
import Tool from './scripts/Tool';
import Canvas from './scripts/Canvas';
import Video from './scripts/Video';
import CanvasTools from "./scripts/CanvasTools";

// console.log(fabric);
// const options = {
// 	startBoard: true,
// 	user: {
		
// 	}
// }
// const main = new MainBoard(true);
// var btn = document.getElementById("initButton");
//   btn.addEventListener("click", function(e) {
//     var d = document.getElementById("content");
//     if (d.children.length == 0) {
//       main.init();
//     }
//   }, false);






 const mainRender = (targetElement, element) => {
 	$(targetElement).empty().append(element);
 };

// const elem = $("<canvas></canvas>", {id: "canvas"});
// mainRender("#content", elem);
// fabric.Object.prototype.selectable = false;
// const canvas = new fabric.Canvas("canvas", {
// 	isDrawingMode: true,
// 	selection: false
// });
// setTimeout(() => {canvas.isDrawingMode = false;}, 5000);
// canvas.add(new fabric.Rect({
// 	top: 50,
// 	left:50,
// 	width: 30,
// 	height: 30,
// 	fillColor: "#333",
// 	selectable: true
// }));
// canvas.renderAll();
// setTimeout(() => {canvas.isDrawingMode = true;}, 8000);
// const t = new fabric.IText("aasd", {
// 	left: 10,
// 	top: 20
// });
// canvas.add(t);
// canvas.add(new fabric.Rect({top:50, left: 30, width: 40, height: 50, fillColor: "#333"}));
// canvas.observe("mouse:up", (o) => {
// 	canvas.isDrawingMode = false;
// 	canvas.selection = false;
// });
// fabric.SprayBrush = fabric.util.createClass(fabric.BaseBrush, {

//     opacity: .2,
//     width: 30,

//     _baseWidth: 5,
//     _drips: [],
//     _dripThreshold: 15,
//     _inkAmount: 0,
//     _interval: 20,
//     _lastPoint: null,
//     _point: null,
//     _strokeId: 0,
//     brush: null,
//     brushCol : '/static/img/creation_room/textures/texture2.png',

//     initialize: function(canvas, opt) {
//       var context = this;
//       opt = opt || {};

//       this.canvas = canvas;
//       this.width = opt.width || canvas.freeDrawingBrush.width;
//       this.opacity = opt.opacity || canvas.contextTop.globalAlpha;
//       this.color = opt.color || canvas.freeDrawingBrush.color;

//       this.canvas.contextTop.lineJoin = "round";
//       this.canvas.contextTop.lineCap = "round";

//       this._reset();

//       fabric.Image.fromURL(this.brushCol, function(brush) {
//         console.log(brush);
//         context.brush = brush;
//         context.brush.filters = [];
//         context.changeColor(context.color || this.color);
//       }, { crossOrigin: "anonymous" });
//     },

//     changeColor: function(color) {
//       this.color = color;
//       this.brush.filters[0] = new fabric.Image.filters.Tint({ color: color });
//       this.brush.applyFilters(this.canvas.renderAll.bind(this.canvas));
//     },

//     changeOpacity: function(value) {
//       this.opacity = value;
//       this.canvas.contextTop.globalAlpha = value;
//     },

//     onMouseDown: function(pointer) {
//       this._point = new fabric.Point(pointer.x, pointer.y);
//       this._lastPoint = this._point;

//       this.size = this.width + this._baseWidth;
//       this._strokeId = +new Date();
//       this._inkAmount = 0;

//       this.changeColor(this.color);
//       this._render();
//     },

//     onMouseMove: function(pointer) {
//       this._lastPoint = this._point;
//       this._point = new fabric.Point(pointer.x, pointer.y);
//     },

//     onMouseUp: function(pointer) {
//     },

//     _render: function() {
//       var context = this;

//       setTimeout(draw, this._interval);

//       function draw() {
//         var point, distance, angle, amount, x, y;

//         point = new fabric.Point(context._point.x || 0, context._point.y || 0);
//         distance = point.distanceFrom(context._lastPoint);
//         angle = point.angleBetween(context._lastPoint);
//         amount = (100 / context.size) / (Math.pow(distance, 2) + 1);

//         context._inkAmount += amount;
//         context._inkAmount = Math.max(context._inkAmount - distance / 10, 0);
//         if (context._inkAmount > context._dripThreshold) {
//           context._drips.push(new fabric.Drip(context.canvas.contextTop, point, context._inkAmount / 2, context.color, context._strokeId));
//           context._inkAmount = 0;
//         }

//         x = context._lastPoint.x + Math.sin(angle) - context.size / 2;
//         y = context._lastPoint.y + Math.cos(angle) - context.size / 2;
//         context.canvas.contextTop.drawImage(context.brush._element, x, y, context.size, context.size);

//         if (context.canvas._isCurrentlyDrawing) {
//           setTimeout(draw, context._interval);
//         } else {
//           context._reset();
//         }
//       }
//     },

//     _reset: function() {
//       this._drips.length = 0;
//       this._point = null;
//       this._lastPoint = null;
//     }
//   });

// canvas.isDrawingMode = true;

// canvas.freeDrawingBrush = new fabric.SprayBrush(canvas, { width: 70,opacity: 0.6, color: "transparent" });

//  const targetDiv = $("<div></div>", {"class": "targetDiv"});
//  const topDrag = $("<div></div>", {"class": "topDrag"}).appendTo(targetDiv);
//  mainRender("#content", targetDiv);
// let k = false;
// 	$('body').on('mousedown','.topDrag', function(e) {
// 		k = true;
// 	        $(this).addClass('drag').parents().on('mousemove', function(e) {
// 	        	if (k) {
// 		            $('.targetDiv').offset({
// 		                top: e.pageY - $('.targetDiv').outerHeight() / 2,
// 		                left: e.pageX - $('.targetDiv').outerWidth() / 2
// 		            }).on('mouseup', function() {
// 		            	k = false;
// 		                $(this).removeClass('drag');
// 		            });
// 	            }
// 	        });
// 	        e.preventDefault();
// 	    }).on('mouseup', function() {
// 	    	k = false;
// 	        $('.topDrag').removeClass('drag');
// 	    });

// const tools = new CanvasTools({activeShape: null});
// tools.currentSet = CanvasTools.sets[PAINT_SET_BRUSH];
 
const canvas = new Canvas();
const _div = $("<div></div>").css({display: "flex", "border": "1px solid #333", "borderRadius": ".5rem", "padding": "1rem"}).append(canvas.render());
mainRender("#content", _div);


// const canvasElement = $("<canvas></canvas>", {id: "canvas"});
// mainRender("#content", canvasElement);
// const canvas = new fabric.Canvas("canvas", {
// 	isDrawingMode: true
// });

exports.MainBoard = MainBoard;