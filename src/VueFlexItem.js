export default {
	name: 'VueFlexItem',

	props: {
		tag: {
			type: String,
			default: 'div',
		},
	},

	computed: {
		padding() {
			if (this.$parent && this.$parent.$options.name === 'VueFlexBox') {
				return this.$parent.childrenPadding;
			}
			return 0;
		},
	},

	render(createElement) {
		let tag = this.tag;
		let padding = this.padding;

		let style = {
			padding: padding === 0 ? 0 : `${padding}px`,
		};

		return createElement(tag, {style}, this.$slots.default);
	},
};
