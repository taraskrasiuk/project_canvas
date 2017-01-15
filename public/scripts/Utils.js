
"use strict";

define("Utils", ["BoardWindow"], function(BoardWindow) {
	return {
		isBoard : function(board) {
			return board != null && board instanceof BoardWindow;
		}
	};
});