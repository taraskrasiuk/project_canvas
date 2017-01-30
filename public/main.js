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

console.log(fabric);
const main = new MainBoard();
var btn = document.getElementById("initButton");
  btn.addEventListener("click", function(e) {
    var d = document.getElementById("content");
    if (d.children.length == 0) {
      main.init();
    }
  }, false);






 const mainRender = (targetElement, element) => {
 	$(targetElement).empty().append(element);
 };

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
 
// const canvas = new Canvas();
// const _div = $("<div></div>").css({display: "flex", "border": "1px solid #333", "borderRadius": ".5rem", "padding": "1rem"}).append(canvas.canvas.tools.render(), canvas.render());
// mainRender("#content", _div);


// const canvasElement = $("<canvas></canvas>", {id: "canvas"});
// mainRender("#content", canvasElement);
// const canvas = new fabric.Canvas("canvas", {
// 	isDrawingMode: true
// });

exports.MainBoard = MainBoard;