import MainBoard from './scripts/MainBoard.js';
const main = new MainBoard();
var btn = document.getElementById("initButton");
  btn.addEventListener("click", function(e) {
    var d = document.getElementById("content");
    if (d.children.length == 0) {
      main.init("content");
    }
  }, false);
