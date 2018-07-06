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

	render(createElement) {
		let {
			$slots,
			margin,
			tag,
		} = this;
		return createElement(
			tag,
			{
				style: {
					margin: margin,
					minWidth: 0,
					minHeight: 0,
				},
			},
			$slots.default,
		);
	},
};
