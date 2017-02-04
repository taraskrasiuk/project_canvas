"use strict";

// define("Notifications", [], function() {
const not =  {
		boardAdded : function(board) {
			var _id = board.getId(); // init in cls
			return "board with id " + _id + " successfully added";
		},
		currentBoard : function(board) {
			var _id = board.getId();
			return "currentBoard with id is " + _id + " .";
		},
		boardDeleted: function(board) {
			var _id = board.getId();
			return "board with id " + _id + " successfully deleted";
		}
	};
	export default not;
// });