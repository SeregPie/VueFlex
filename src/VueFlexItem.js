export default {
	name: 'VueFlexItem',

	props: {
		tag: {
			type: String,
			default: 'div',
		},
	},

	computed: {
		margin() {
			return this.$parent.childrenMargin;
		},
	},

	render(h) {
		let tag = this.tag;
		let margin = this.margin;

		let style = {
			margin: margin === 0 ? 0 : `${margin}px`,
		};

		return h(tag, {style}, this.$slots.default);
	},
};
