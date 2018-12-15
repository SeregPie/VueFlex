import Number_isNumber from '/utils/Number/isNumber';

export default {
	name: 'VueFlexBox',

	props: {
		alignContent: {
			type: String,
			default: 'stretch',
		},

		alignItems: {
			type: String,
			default: 'stretch',
		},

		directionColumn: {
			type: Boolean,
			default: false,
		},

		gap: {
			type: [Number, String],
			default: 0,
		},

		justifyContent: {
			type: String,
			default: 'flex-start',
		},

		reverseDirection: {
			type: Boolean,
			default: false,
		},

		reverseWrap: {
			type: Boolean,
			default: false,
		},

		tag: {
			type: String,
			default: 'div',
		},

		wrap: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		childMargin() {
			return `calc(${this.childMarginExpression})`;
		},

		childMarginExpression() {
			if (this.nested) {
				return this.$parent.childMarginExpression;
			}
			return `${this.normalizedGap} / 2`;
		},

		innerMargin() {
			return `calc(${this.innerMarginExpression})`;
		},

		innerMarginExpression() {
			return `-1 * (${this.childMarginExpression})`;
		},

		nested() {
			return this.$parent && this.$parent.$options.name === this.$options.name;
		},

		normalizedGap() {
			let {gap} = this;
			return Number_isNumber(gap) ? `${gap}px` : gap;
		},

		outerMargin() {
			if (this.nested) {
				return this.$parent.childMargin;
			}
		},
	},

	render(createElement) {
		let {
			$slots,
			alignContent,
			alignItems,
			directionColumn,
			innerMargin,
			justifyContent,
			nested,
			outerMargin,
			reverseDirection,
			reverseWrap,
			tag,
			wrap,
		} = this;
		return createElement(
			tag,
			{
				style: {
					display: 'flex',
					margin: outerMargin,
				},
			},
			[createElement(
				'div',
				{
					style: {
						alignContent: alignContent,
						alignItems: alignItems,
						display: nested ? 'flex' : 'inline-flex',
						flex: '1 1 0%',
						flexDirection: (
							directionColumn
								? reverseDirection
									? 'column-reverse'
									: 'column'
								: reverseDirection
									? 'row-reverse'
									: 'row'
						),
						flexWrap: (
							wrap
								? reverseWrap
									? 'wrap-reverse'
									: 'wrap'
								: 'nowrap'
						),
						justifyContent: justifyContent,
						margin: innerMargin,
					},
				},
				$slots.default,
			)],
		);
	},
};
