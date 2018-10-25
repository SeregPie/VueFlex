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

		spacing: {
			type: [Number, String],
			default: 0,
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
			return `${this.normalizedSpacing} / 2`;
		},

		innerMargin() {
			return `calc(${this.innerMarginExpression})`;
		},

		innerMarginExpression() {
			return `-1 * (${this.childMarginExpression})`;
		},

		innerSize() {
			return `calc(${this.innerSizeExpression})`;
		},

		innerSizeExpression() {
			return `100% - (${this.innerMarginExpression}) * 2`;
		},

		nested() {
			return this.$parent && this.$parent.$options.name === this.$options.name;
		},

		normalizedSpacing() {
			let {spacing} = this;
			return Number_isNumber(spacing) ? `${spacing}px` : spacing;
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
			innerSize,
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
						minHeight: innerSize,
						minWidth: innerSize,
					},
				},
				$slots.default,
			)],
		);
	},
};
