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
			$slots,
		} = this;

		return (
			h(
				tag,
				{
					style: {
						margin: `calc(${margin})`,
					},
				},
				$slots.default,
			)
		);
	},
};
