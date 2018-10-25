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
					minHeight: 0,
					minWidth: 0,
				},
			},
			$slots.default,
		);
	},
};
