import VueFlexItem from './VueFlexItem';

let VueFlexBox = {
	name: 'VueFlexBox',

	components: {
		[VueFlexItem.name]: VueFlexItem,
	},

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

	render(createElement) {
		let tag = this.tag;
		let style = this.style;

		return createElement(tag, {style}, this.$slots.default);
	},

	computed: {
		styleFlexDirection() {
			let directionColumn = this.directionColumn;
			let reverseDirection = this.reverseDirection;

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

		styleFlexWrap() {
			let wrap = this.wrap;
			let reverseWrap = this.reverseWrap;

			return wrap ? reverseWrap ? 'wrap-reverse' : 'wrap' : 'nowrap';
		},

		styleJustifyContent() {
			let justifyContent = this.justifyContent;

			switch (justifyContent) {
				case 'start':
					return 'flex-start';
				case 'end':
					return 'flex-end';
			}
			return justifyContent;
		},

		styleAlignItems() {
			let alignItems = this.alignItems;

			switch (alignItems) {
				case 'start':
					return 'flex-start';
				case 'end':
					return 'flex-end';
			}
			return alignItems;
		},

		styleAlignContent() {
			let alignContent = this.alignContent;

			switch (alignContent) {
				case 'start':
					return 'flex-start';
				case 'end':
					return 'flex-end';
			}
			return alignContent;
		},

		itemPadding() {
			return this.gapBetween / 2;
		},

		margin() {
			return this.gapAround - this.itemPadding;
		},

		styleMargin() {
			let margin = this.margin;

			return margin === 0 ? 0 : `${margin}px`;
		},

		style() {
			let fillHeight = this.fillHeight;
			let flexDirection = this.styleFlexDirection;
			let flexWrap = this.styleFlexWrap;
			let justifyContent = this.styleJustifyContent;
			let alignItems = this.styleAlignItems;
			let alignContent = this.styleAlignContent;
			let margin = this.styleMargin;

			let returns = {
				position: 'relative',
				margin,
				display: 'flex',
				flexDirection,
				flexWrap,
				justifyContent,
				alignItems,
				alignContent,
			};
			if (fillHeight) {
				returns.height = '100%';
			}
			return returns;
		},

		itemStylePadding() {
			let itemPadding = this.itemPadding;

			return itemPadding === 0 ? 0 : `${itemPadding}px`;
		},
	},
};

export default VueFlexBox;
export {VueFlexItem};

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.component(VueFlexBox.name, VueFlexBox);
	window.Vue.component(VueFlexItem.name, VueFlexItem);
}
