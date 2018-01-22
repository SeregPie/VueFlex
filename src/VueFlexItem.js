export default {
	name: 'VueFlexItem',

	props: {
		tag: {
			type: String,
			default: 'div',
		},
	},

	render(createElement) {
		let tag = this.tag;
		let style = this.style;

		return createElement(tag, {style}, this.$slots.default);
	},

	computed: {
		stylePadding() {
			return this.$parent ? this.$parent.itemStylePadding : 0;
		},

		style() {
			let padding = this.stylePadding;

			return {
				padding,
			};
		},
	},
};
