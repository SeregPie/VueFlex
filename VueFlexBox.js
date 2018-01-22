(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.VueFlexBox = {})));
}(this, (function (exports) { 'use strict';

var VueFlexItem = {
	name: 'VueFlexItem',

	props: {
		tag: {
			type: String,
			default: 'div',
		},
	},

	render: function render(createElement) {
		var tag = this.tag;
		var style = this.style;

		return createElement(tag, {style: style}, this.$slots.default);
	},

	computed: {
		stylePadding: function stylePadding() {
			return this.$parent ? this.$parent.itemStylePadding : 0;
		},

		style: function style() {
			var padding = this.stylePadding;

			return {
				padding: padding,
			};
		},
	},
};

var obj;
var VueFlexBox = {
	name: 'VueFlexBox',

	components: ( obj = {}, obj[VueFlexItem.name] = VueFlexItem, obj),

	props: {
		tag: {
			type: String,
			default: 'div',
		},
		fillHeight: {
			type: Boolean,
			default: false,
		},
		directionColumn: {
			type: Boolean,
			default: false,
		},
		reverseDirection: {
			type: Boolean,
			default: false,
		},
		wrap: {
			type: Boolean,
			default: false,
		},
		reverseWrap: {
			type: Boolean,
			default: false,
		},
		justifyContent: {
			type: String,
			default: 'start',
		},
		alignItems: {
			type: String,
			default: 'stretch',
		},
		alignContent: {
			type: String,
			default: 'start',
		},
		gapAround: {
			type: Number,
			default: 0,
		},
		gapBetween: {
			type: Number,
			default: 0,
		},
	},

	render: function render(createElement) {
		var tag = this.tag;
		var style = this.style;

		return createElement(tag, {style: style}, this.$slots.default);
	},

	computed: {
		styleFlexDirection: function styleFlexDirection() {
			var directionColumn = this.directionColumn;
			var reverseDirection = this.reverseDirection;

			return (
				directionColumn
					? reverseDirection
						? 'column-reverse'
						: 'column'
					: reverseDirection
						? 'row-reverse'
						: 'row'
			);
		},

		styleFlexWrap: function styleFlexWrap() {
			var wrap = this.wrap;
			var reverseWrap = this.reverseWrap;

			return wrap ? reverseWrap ? 'wrap-reverse' : 'wrap' : 'nowrap';
		},

		styleJustifyContent: function styleJustifyContent() {
			var justifyContent = this.justifyContent;

			switch (justifyContent) {
				case 'start':
					return 'flex-start';
				case 'end':
					return 'flex-end';
			}
			return justifyContent;
		},

		styleAlignItems: function styleAlignItems() {
			var alignItems = this.alignItems;

			switch (alignItems) {
				case 'start':
					return 'flex-start';
				case 'end':
					return 'flex-end';
			}
			return alignItems;
		},

		styleAlignContent: function styleAlignContent() {
			var alignContent = this.alignContent;

			switch (alignContent) {
				case 'start':
					return 'flex-start';
				case 'end':
					return 'flex-end';
			}
			return alignContent;
		},

		itemPadding: function itemPadding() {
			return this.gapBetween / 2;
		},

		margin: function margin() {
			return this.gapAround - this.itemPadding;
		},

		styleMargin: function styleMargin() {
			var margin = this.margin;

			return margin === 0 ? 0 : (margin + "px");
		},

		style: function style() {
			var fillHeight = this.fillHeight;
			var flexDirection = this.styleFlexDirection;
			var flexWrap = this.styleFlexWrap;
			var justifyContent = this.styleJustifyContent;
			var alignItems = this.styleAlignItems;
			var alignContent = this.styleAlignContent;
			var margin = this.styleMargin;

			var returns = {
				position: 'relative',
				margin: margin,
				display: 'flex',
				flexDirection: flexDirection,
				flexWrap: flexWrap,
				justifyContent: justifyContent,
				alignItems: alignItems,
				alignContent: alignContent,
			};
			if (fillHeight) {
				returns.height = '100%';
			}
			return returns;
		},

		itemStylePadding: function itemStylePadding() {
			var itemPadding = this.itemPadding;

			return itemPadding === 0 ? 0 : (itemPadding + "px");
		},
	},
};

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.component(VueFlexBox.name, VueFlexBox);
	window.Vue.component(VueFlexItem.name, VueFlexItem);
}

exports['default'] = VueFlexBox;
exports.VueFlexItem = VueFlexItem;

Object.defineProperty(exports, '__esModule', { value: true });

})));
