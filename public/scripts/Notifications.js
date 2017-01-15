"use strict";

define("Notifications", [], function() {
	return {
		boardAdded : function(board) {
			var _id = board.getId(); // init in cls
			return "board with id " + _id + " successfully added";
		},
		currentBoard : function(board) {
			var _id = board.getId();
			return "currentBoard with id is " + _id + " .";
		}
	};
});