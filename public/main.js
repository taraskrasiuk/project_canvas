import MainBoard from './scripts/MainBoard.js';
import $ from 'jquery';
import {fabric} from 'fabric';
import {
	TEST_YOUTUBE_VIDEO_URL
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
      main.init("content");
    }
  }, false);




 // const mainRender = (targetElement, element) => {
 // 	$(targetElement).empty().append(element);
 // };
 // const _c = new Canvas();
 // const _v = new Video();


 // const tools = new CanvasTools({activeShape: null});
 // const grShapes = tools.toolGroup("Shapes", CanvasTools.toolsShapes, tools.renderTool.bind(tools), (toolName) => {console.log(toolName);});
 // const grTransform = tools.toolGroup("Transform", CanvasTools.toolsTransforms, tools.renderTransform.bind(tools), (tool) => {console.log(tool);});
 // const grColors = tools.toolGroup("Colors", CanvasTools.toolsColors, tools.renderColors.bind(tools), (e) => {console.log(e.target.value);});
 // const result = $("<div></div>").append(grShapes, grTransform, grColors);
 // mainRender("#content", result);
