"use strict";

define("Block", ["UI"], function(UI){
	var Block = function(key, el) {
		this.key = key;
		this.isActive = false;
		this.element = el;
	};
	Block.prototype.setIsActive = function(boolean) {
		this.isActive = boolean;
		return this;
	};
	Block.prototype.getIsActive = function() {
		return this.isActive;
	};
	Block.prototype.getElement = function() {
		return this.element;
	};
	Block.prototype.render = function () {
		var wrapper = UI.createElement({
			type: "div",
			className: "block block-" + this.key
		});
		return wrapper;
	};

});