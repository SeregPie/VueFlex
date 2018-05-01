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
			return this.$parent.childMargin;
		},
	},

	render(h) {
		let {
			tag,
			margin,
		} = this;

		let style = {
			margin: margin,
		};

		return h(tag, {style}, this.$slots.default);
	},
};
