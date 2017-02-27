import MainBoard from './scripts/trash/MainBoard.js';
import $ from 'jquery';



import PaintView from "./scripts/painting/PaintView";
// import {fabric} from 'fabric';
// import {
// 	TEST_YOUTUBE_VIDEO_URL,
// 	TOOLS_GROUP_COLORS,
// 	TOOLS_GROUP_TRANSFORMS,
// 	TOOLS_GROUP_SHAPES,
// 	PAINT_SET_BRUSH
// } from './scripts/Constants.js';
// // import Tool from './scripts/Tool';
// import Canvas from './scripts/Canvas';
// import Video from './scripts/Video';
// import CanvasTools from "./scripts/tools/CanvasTools";
//
// import ToolsSet from "./scripts/tools/ToolsSet";
// import SelectTool from "./scripts/tools/SelectTool";
//
// import CTools from "./scripts/tools/CTools";
// import SelectedSets from "./scripts/tools/SelectedSets";
//
// import CanvasState from "./scripts/CanvasState";
// import Shape from "./scripts/shapes/Shape";
// import ReactDOM from "react-dom";
// // import React from "react";
// import PaintState from './scripts/painting/PaintState';
//
// import PaintStage from './scripts/react-application/PaintStage';
//
//
// // import {Stage, Layer, Rect} from 'react-konva';
// //
// // class Test extends React.Component {
// //
// // 		constructor () {
// // 			super();
// // 			this.state = {
// // 				shape: null,
// // 				positions: {
// // 					x: 0,
// // 					y: 0
// // 				},
// // 				isDrawing: false
// // 			};
// // 		}
// // 		handleMouseUp() {
// // 			this.setState({
// // 				isDrawing: false
// // 			})
// // 		}
// // 		handleMouseMove() {
// // 			if (!this.state.isDrawing) {
// // 				return ;
// // 			}
// // 			const pos = this.refs.stage.getStage().getPointerPosition();
// // 			this.state.shape.props.width = pos.x - this.state.positions.x;
// // 			this.state.shape.props.height = pos.y - this.state.positions.y;
// // 			this.refs.stage.draw();
// //
// //
// //
// // 			// var s = this.state.shpe;
// //
// // 		}
// // 		handleMouseDown() {
// //
// // 			this.setState({
// // 				isDrawing: true,
// // 				positions: this.refs.stage.getStage().getPointerPosition(),
// // 				shape: this.rect(this.refs.stage.getStage().getPointerPosition())
// // 			}, () => {
// // 				console.log(this.state.shape);
// // 			});
// // 		}
// // 		rect (pos) {
// // 			return (
// // 				<Rect width={0} height={0} x={pos.x} y={pos.y} fill={'#333'}/>
// // 			);
// // 		}
// //
// // 		render() {
// //
// // 			return (
// // 				<Stage
// // 				ref="stage"
// // 				onContentMouseUp={this.handleMouseUp.bind(this)}
// // 				onContentMouseDown={this.handleMouseDown.bind(this)}
// // 				onContentMouseMove={this.handleMouseMove.bind(this)}
// // 				width={300} height={300}
// 					{/*>*/}
// 					{/*<Layer>*/}
// // 						{this.state.shape != null ? this.state.shape : <Rect />}
// // 					</Layer>
// // 				</Stage>
// // 			);
// // 		}
// // }
//
//
// // ReactDOM.render(<Test />, document.getElementById("content"));
//
//
// const mainRender = (targetElement, element) => {
//  	$(targetElement).empty().append(element);
//  };
//
//
//
// const main = new MainBoard("content");
// main.init("content");
import Canvas from "./scripts/Canvas";
const mainRender = (targetElement, element) => {
 	$(targetElement).empty().append(element);
 };


 import ViewFiles from "./scripts/trash/ViewFiles";
import PDF_Vew from "./scripts/pdf_view/PDF_View";
// const p = new PDF_Vew({id: "canvas"});
// mainRender("#content", p.render());
const paint = new PaintView({elementId: "content", tools: ["brush", "shapes", "background", "erase", "select"]});
// paint.init();

const paintButton = $("<button>Paint</button>").on("click", (e) => {
    // e.preventDefault();
    mainRender("#content", paint.render());
});

const pdf = new PDF_Vew({id: "canvas", tools: ["brush"]});

const pdfButton = $("<button>PDF</button>").on("click", (e) => {
    e.preventDefault();
    mainRender("#content", pdf.render());
});
import VideoView from "./scripts/video/VideoView";

const v= new VideoView({id: "content"});

const videoButton = $("<button>video</button>")
    .on("click", (e) => {
       e.preventDefault();
        mainRender("#content", v.render());

    });
// $("body").prepend(paintButton, pdfButton, videoButton);
import BoardView from "./scripts/board/BoardView";
const board = new BoardView("board");
import AppView from "./scripts/app/AppView";
// mainRender("#content", new MainBoard().render());
new AppView().render("content");


exports.MainBoard = MainBoard;
