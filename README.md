# project_canvas
Just for init board, you will need :
  1. Element with ID
  2. Button or another event that will init board to appear
  // At this moment, you will need to copy all files, same as in git project
  // I will refactor this, and make minify file, as module, like bundle.min.js. So in future i will don't need to copy all js files.
  3. Just for now copy all files
  4. Static images i use for icons
  5. If everything will be fine, you just need to replace some strings.
  
  require(["MainBoard"], function(MainBoard){
  console.log("RUN...");
  var Main = new MainBoard();
  var btn = document.getElementById(** button id **); // BUTTON id
  btn.addEventListener("click", function(e) {
    var d = document.getElementById(** element **); // board appear
    if (d.children.length == 0) {
      Main.init("content");
    }
  }, false);
