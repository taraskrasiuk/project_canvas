"use strict"

define("CanvasFabric", [], function() {
  var CanvasFabric = function(id) {
    this.canvas = new fabric.Canvas(id, {
      selection: false
    });

    this.mouseLocation = {x: 0, y: 0};

  };
  CanvasFabric.prototype.getShape = function getShape(type, pointer) {
    var fillColor = document.getElementById("fillColor").value;
    var strokeColor = document.getElementById("strokeColor").value;
    switch(type) {
      case "circle":
        shape = new fabric.Circle({
        left: pointer.x,
        top: pointer.y,
        radius: 1,
        strokeWidth: 1,
        stroke: strokeColor,
        fill: fillColor,
        selectable: true,
        originX: 'center', originY: 'center'
      });
      return shape;
      case "rect" :
        shape = new fabric.Rect({
          left: pointer.x,
          top: pointer.y,
          width: 1,
          height: 1,
          strokeWidth: 1,
          stroke: strokeColor,
          fill: fillColor,
          selectable: true,
          originX: 'center', originY: 'center'
        });
        return shape;
      case "triangle" :
        shape = new fabric.Triangle({
          left: pointer.x,
          top: pointer.y,
          strokeWidth: 1,
          width:2,
          height:2,
          stroke: strokeColor,
          fill: fillColor,
          selectable: true,
          originX: 'center'
        });
        return shape;
        case "ellipse":
          shape = new fabric.Ellipse({
            left: pointer.x,
            top: pointer.y,
            strokeWidth: 1,
            stroke: strokeColor,
            fill: fillColor,
            selectable: true,
            originX: 'center', originY: 'center',
             rx: 5,
            ry: 1
          });
          return shape;
        case "line":
          var points = [pointer.x, pointer.y, pointer.x, pointer.y];
          shape =  new fabric.Line(points, {
            left: pointer.x,
            top: pointer.y,
            strokeWidth: 1,
            fill: fillColor,
            stroke: strokeColor,
            originX: 'center',
            originY: 'center',
            selectable: true
          });
          return shape;
        case "brush" :

          return "brush";
      default:
      return "brush";
    }
  };

  return CanvasFabric;
});
var canvas;
var currentPage = 0;

// zoom
var copiedObject;
var copiedObjects = new Array();
var canvasScale = 1;
var SCALE_FACTOR = 1.2;



console.log("START");
//  INIT
var main = document.getElementById("main");

var c = document.createElement("canvas");
c.setAttribute("id", "canvas_" + currentPage);
c.width = 500;
c.height = 300;
c.style.border = "1px solid black";

main.appendChild(c);

// canvas = new fabric.Canvas(c.id);

var canvas = new fabric.Canvas(c.id, { selection: false });


var stopBtn = document.getElementById("stop"),
    startBtn = document.getElementById("start");
stopBtn.addEventListener("click", stop, false);
startBtn.addEventListener("click", start, false);

var shape, isDown, origX, origY;
function getShape(type, pointer) {
  var fillColor = document.getElementById("fillColor").value;
  var strokeColor = document.getElementById("strokeColor").value;
	switch(type) {
  	case "circle":
    	shape = new fabric.Circle({
      left: pointer.x,
      top: pointer.y,
      radius: 1,
      strokeWidth: 1,
      stroke: strokeColor,
      fill: fillColor,
      selectable: true,
      originX: 'center', originY: 'center'
    });
    return shape;
    case "rect" :
      shape = new fabric.Rect({
        left: pointer.x,
        top: pointer.y,
        width: 1,
        height: 1,
        strokeWidth: 1,
        stroke: strokeColor,
        fill: fillColor,
        selectable: true,
        originX: 'center', originY: 'center'
      });
      return shape;
    case "triangle" :
      shape = new fabric.Triangle({
        left: pointer.x,
        top: pointer.y,
        strokeWidth: 1,
        width:2,
        height:2,
        stroke: strokeColor,
        fill: fillColor,
        selectable: true,
        originX: 'center'
      });
      return shape;
      case "ellipse":
        shape = new fabric.Ellipse({
          left: pointer.x,
          top: pointer.y,
          strokeWidth: 1,
          stroke: strokeColor,
          fill: fillColor,
          selectable: true,
          originX: 'center', originY: 'center',
           rx: 5,
          ry: 1
        });
        return shape;
      case "line":
        var points = [pointer.x, pointer.y, pointer.x, pointer.y];
        shape =  new fabric.Line(points, {
          left: pointer.x,
          top: pointer.y,
          strokeWidth: 1,
          fill: fillColor,
          stroke: strokeColor,
          originX: 'center',
          originY: 'center',
          selectable: true
        });
        return shape;
      case "brush" :

        return "brush";
    default:
    return "brush";
  }
}
function stop(){
    canvas.isDrawingMode = false;
    canvas.selection= true;
    // canvas.off('mouse:down');
    canvas.off('mouse:move');
    // canvas.off('mouse:up');
    canvas.forEachObject(function(o){ o.setCoords() })
}


// function start() {
	// var currentShape = document.querySelector("input[type=\"radio\"][name=\"shape\"]:checked");


  // canvas.selection= false;
  canvas.observe('mouse:down', function(o){
    var currentShape = document.querySelector("input[type=\"radio\"][name=\"shape\"]:checked");
    isDown = true;
    canvas.selection= false;
    if (o.target != null) {
      return;
    }


    var pointer = {
      x: o.e.offsetX,
      y: o.e.offsetY
    };
    origX = pointer.x;
    origY = pointer.y;

    shape = getShape(currentShape.value, pointer);
    var isBrush = shape === "brush";
    if (isBrush) {
      drawing();

      // return;
    } else {
      canvas.add(shape);
      canvas.observe('mouse:move', function(o){
        if (!isDown) {
          return;
        };
        var pointer = {
          x: o.e.offsetX,
          y: o.e.offsetY
        };
        var isCircle = shape instanceof fabric.Circle;
        var isRect = shape instanceof fabric.Rect;
        var isTriangle = shape instanceof fabric.Triangle;
        var isEllipse = shape instanceof fabric.Ellipse;
        var isLine = shape instanceof fabric.Line;

          if (isCircle) {
            shape.set({ radius: Math.abs(origX - pointer.x) });
          }
          if (isRect) {
            shape.set({width: pointer.x - origX});
            shape.set({height: pointer.y - origY});
          }
          if (isTriangle) {
            shape.set({ width: Math.abs(origX - pointer.x),height: Math.abs(origY - pointer.y)});
          }
          if (isEllipse) {
            shape.set({rx: Math.abs(origX - pointer.x), ry: Math.abs(origY - pointer.y)});
          }
          if (isLine) {
            console.log("LINE");
            shape.set({ x2: pointer.x, y2: pointer.y });
          }

          canvas.renderAll();

      });

    }
    canvas.on('mouse:up', function(o){
      isDown = false;
      console.log(canvas);
      stop();
    });


  });






//  ZOOM



var btnZoomIn = document.getElementById("zoom_in"),
    btnZoomOut = document.getElementById("zoom_out");
    // btnZoomReset = document.getElementById("zoom_reset");

btnZoomIn.addEventListener("click", zoomIn, false);
btnZoomOut.addEventListener("click", zoomOut, false);
// btnZoomReset.addEventListener("slick", zoomReset, false);



function zoomIn() {
    // TODO limit the max canvas zoom in

    canvasScale = canvasScale * SCALE_FACTOR;

    canvas.setHeight(canvas.getHeight() * SCALE_FACTOR);
    canvas.setWidth(canvas.getWidth() * SCALE_FACTOR);

    var objects = canvas.getObjects();
    for (var i in objects) {
        var scaleX = objects[i].scaleX;
        var scaleY = objects[i].scaleY;
        var left = objects[i].left;
        var top = objects[i].top;

        var tempScaleX = scaleX * SCALE_FACTOR;
        var tempScaleY = scaleY * SCALE_FACTOR;
        var tempLeft = left * SCALE_FACTOR;
        var tempTop = top * SCALE_FACTOR;

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
    }

    canvas.renderAll();
}

// Zoom Out
function zoomOut() {
    // TODO limit max cavas zoom out

    canvasScale = canvasScale / SCALE_FACTOR;

    canvas.setHeight(canvas.getHeight() * (1 / SCALE_FACTOR));
    canvas.setWidth(canvas.getWidth() * (1 / SCALE_FACTOR));

    var objects = canvas.getObjects();
    for (var i in objects) {
        var scaleX = objects[i].scaleX;
        var scaleY = objects[i].scaleY;
        var left = objects[i].left;
        var top = objects[i].top;

        var tempScaleX = scaleX * (1 / SCALE_FACTOR);
        var tempScaleY = scaleY * (1 / SCALE_FACTOR);
        var tempLeft = left * (1 / SCALE_FACTOR);
        var tempTop = top * (1 / SCALE_FACTOR);

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
    }

    canvas.renderAll();
}

// Reset Zoom
function zoomReset() {

    canvas.setHeight(canvas.getHeight() * (1 / canvasScale));
    canvas.setWidth(canvas.getWidth() * (1 / canvasScale));

    var objects = canvas.getObjects();
    for (var i in objects) {
        var scaleX = objects[i].scaleX;
        var scaleY = objects[i].scaleY;
        var left = objects[i].left;
        var top = objects[i].top;

        var tempScaleX = scaleX * (1 / canvasScale);
        var tempScaleY = scaleY * (1 / canvasScale);
        var tempLeft = left * (1 / canvasScale);
        var tempTop = top * (1 / canvasScale);

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
    }

    canvas.renderAll();

    canvasScale = 1;
}

// DELETE objects
function deleteObject () {
  var activeObject = canvas.getActiveObject(),
      activeGroup = canvas.getActiveGroup();
  if (activeObject != null) {
    canvas.remove(activeObject);
  } else if (activeGroup) {
    var objInGroup = activeGroup.getObjects();
    canvas.discardActiveGroup();
    objInGroup.forEach(function(o) {
      canvas.remove(o);
    });
  }
}

canvas.observe("object:selected", function(o) {
  console.log(o);
  var btnDelete = document.createElement("button");
  btnDelete.setAttribute("id", "deleteSelection");
  btnDelete.textContent = "Delete selection";
  // btnDelete.setAttribute("value", "Delete selection");
  btnDelete.addEventListener("click", deleteObject, false);

  main.appendChild(btnDelete);
});

canvas.observe("selection:cleared", function(o) {
  console.log(o);
  var t = document.getElementById("deleteSelection");
  main.removeChild(t);
});
// DRAWING


function drawing() {
  canvas.isDrawingMode = true;


  canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
  canvas.freeDrawingBrush.color = "#ddd";
      canvas.freeDrawingBrush.width = 5;
      canvas.freeDrawingBrush.shadowBlur = 2;
      // canvas.renderAll();

}

// GLOBAL ACTIONS
function changeBackgroundColor(e) {
  var value = e.target.value;
  canvas.setBackgroundColor(value, canvas.renderAll.bind(canvas));
};
function init() {
  var backgroundColor = document.getElementById("backgroundColor");
  backgroundColor.addEventListener("input", changeBackgroundColor, false);
}
init();
