import Number_isNumber from 'x/src/Number/isNumber';

export default {
	name: 'VueFlexBox',

	props: {
		tag: {
			type: String,
			default: 'div',
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
			default: 'stretch',
		},
		spacing: {
			type: [Number, String],
			default: 0,
		},
	},

	computed: {
		normalizedJustifyContent() {
			let {justifyContent} = this;

			switch (justifyContent) {
				case 'start':
					return 'flex-start';
				case 'end':
					return 'flex-end';
			}
			return justifyContent;
		},

		normalizedAlignItems() {
			let {alignItems} = this;

			switch (alignItems) {
				case 'start':
					return 'flex-start';
				case 'end':
					return 'flex-end';
			}
			return alignItems;
		},

		normalizedAlignContent() {
			let {alignContent} = this;

			switch (alignContent) {
				case 'start':
					return 'flex-start';
				case 'end':
					return 'flex-end';
			}
			return alignContent;
		},

		normalizedSpacing() {
			let {spacing} = this;

			return Number_isNumber(spacing) ? `${spacing}px` : spacing;
		},

		nested() {
			return this.$parent && this.$parent.$options.name === this.$options.name;
		},

		margin() {
			if (this.nested) {
				return this.$parent.childMargin;
			}
		},

		childMargin() {
			if (this.nested) {
				return this.$parent.childMargin;
			}
			return `${this.normalizedSpacing} / 2`;
		},

		innerMargin() {
			return `-1 * (${this.childMargin})`;
		},

		innerSize() {
			return `100% - (${this.innerMargin}) * 2`;
		},
	},

	render(h) {
		let {
			tag,
			nested,
			margin,
			innerMargin,
			innerSize,
			directionColumn,
			reverseDirection,
			wrap,
			reverseWrap,
			normalizedJustifyContent: justifyContent,
			normalizedAlignItems: alignItems,
			normalizedAlignContent: alignContent,
			$slots
		} = this;

		return (
			h(
				tag,
				{
					style: {
						margin: `calc(${margin})`,
					},
				},
				[
					h(
						'div',
						{
							style: {
								margin: `calc(${innerMargin})`,
								width: `calc(${innerSize})`,
								height: `calc(${innerSize})`,
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
								alignItems: alignItems,
								alignContent: alignContent,
							},
						},
						$slots.default,
					),
				],
			)
		);
	},
};
