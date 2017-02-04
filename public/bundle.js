/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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
	import MainBoard from 'MainBoard';
	const main = new MainBoard();
	let some = 1;

/***/ }
/******/ ]);