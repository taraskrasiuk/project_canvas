'use strict';

requirejs.config({
  paths: {
    "MainBoard": "scripts/MainBoard",
    "Canvas": "scripts/Canvas",
    "Video": "scripts/Video",
    "BoardWindow": "scripts/BoardWindow",
    "Utils": "scripts/Utils",
    "Notifications": "scripts/Notifications",
    "UI": "scripts/UI"
  }

});

require(["MainBoard"], function(MainBoard){
  console.log("RUN...");

  function init() {
    var mainBoard = new MainBoard();
    mainBoard.init("content");
    
    console.log(mainBoard);
  }
  init();

});