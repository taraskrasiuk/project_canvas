// 'use strict';

// requirejs.config({
//   paths: {
//     "MainBoard": "scripts/MainBoard",
//     "Canvas": "scripts/Canvas",
//     "Video": "scripts/Video",
//     "BoardWindow": "scripts/BoardWindow",
//     "Utils": "scripts/Utils",
//     "Notifications": "scripts/Notifications",
//     "UI": "scripts/UI",
//     "Video": "scripts/Video",
//     "Canvas": "scripts/Canvas",
//     "CanvasTools": "scripts/CanvasTools",
//     "ViewFiles": "scripts/ViewFiles"
//   }

// });

// require(["MainBoard"], function(MainBoard){
//   console.log("RUN...");
//   var Main = new MainBoard();
//   var btn = document.getElementById("initButton");
//   btn.addEventListener("click", function(e) {
//     var d = document.getElementById("content");
//     if (d.children.length == 0) {
//       Main.init("content");
//     }
//   }, false);



// });
import MainBoard from './scripts/MainBoard.js';
const main = new MainBoard();
var btn = document.getElementById("initButton");
  btn.addEventListener("click", function(e) {
    var d = document.getElementById("content");
    if (d.children.length == 0) {
      main.init("content");
    }
  }, false);
// let some = 1;