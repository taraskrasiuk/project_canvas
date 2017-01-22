"use strict";

define("UI", [], function() {
	return {
		createElement: function(options) {
			var el, type, name, id, className, child, eventType, event;
			name = options.name;
			id = options.id;
			className = options.className;
			child = options.child;
			type = options.type;
			eventType = options.eventType;
			event = options.event;

			el = document.createElement(type);

			if (className) {
				el.classList.add(className);
			}
			if (id) {
				el.setAttribute("id", id);
			}
			if (name) {
				var span = document.createElement("span");
				span.classList.add(className + "_title");
				span.textContent = name;
				el.appendChild(span);
			}
			if (child) {
				el.appendChild(child);
			}
			if (eventType != null && event != null) {
				el.addEventListener(eventType, event, true);
			}
			return el;
		},
		renderListItem: function(options, idx, active) {
			var name, li;
			li = this.createElement(options);
			if (active) {
				li.classList.add("active");
			}
			if(li.classList.contains("active") && !active) {
				li.classList.remove("active");
			}
			return li;
		},
		renderList: function(key, items, optionalChild) {
			var ul = this.createElement({
				type: "ul",
				className: key + "_list"
			});
			var self = this;
			items.forEach(function(el, idx) {
				var li = self.renderListItem(el, idx, optionalChild);
				ul.appendChild(li);
			});
			return ul;
		},
		
		

	};
});