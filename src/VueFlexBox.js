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
			type: Number,
			default: 0,
		},
	},

	computed: {
		nested() {
			return this.$parent && this.$parent.$options.name === this.$options.name;
		},

		spacingMeasure() {
			if (this.nested) {
				return this.$parent.spacingMeasure;
			}
			return [this.spacing, 'px'];
		},

		spacingNumber() {
			return this.spacingMeasure[0];
		},

		spacingUnit() {
			return this.spacingMeasure[1];
		},

		margin() {
			if (this.nested) {
				return this.$parent.childMargin;
			}
		},

		childMarginNumber() {
			return this.spacingNumber / 2;
		},

		childMarginUnit() {
			return this.spacingUnit;
		},

		childMargin() {
			let {
				childMarginNumber: number,
				childMarginUnit: unit,
			} = this;

			if (number === 0) {
				return 0;
			}
			return `${number}${unit}`;
		},

		innerMarginNumber() {
			return -this.childMarginNumber;
		},

		innerMarginUnit() {
			return this.childMarginUnit;
		},

		innerMargin() {
			let {
				innerMarginNumber: number,
				innerMarginUnit: unit,
			} = this;

			if (number === 0) {
				return 0;
			}
			return `${number}${unit}`;
		},

		innerSize() {
			let {
				innerMarginNumber,
				innerMarginUnit,
			} = this;

			if (innerMarginNumber === 0) {
				return '100%';
			}
			return `calc(100% + ${-innerMarginNumber * 2}${innerMarginUnit})`;
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
			justifyContent,
			alignItems,
			alignContent,
		} = this;

		let el;
		{
			let style = {
				margin: innerMargin,
				width: innerSize,
				height: innerSize,
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
				justifyContent: (() => {
					switch (justifyContent) {
						case 'start':
							return 'flex-start';
						case 'end':
							return 'flex-end';
					}
					return justifyContent;
				})(),
				alignItems: (() => {
					switch (alignItems) {
						case 'start':
							return 'flex-start';
						case 'end':
							return 'flex-end';
					}
					return alignItems;
				})(),
				alignContent: (() => {
					switch (alignContent) {
						case 'start':
							return 'flex-start';
						case 'end':
							return 'flex-end';
					}
					return alignContent;
				})(),
			};
			el = h('div', {style}, this.$slots.default);
		}
		{
			let style = {
				margin: margin,
			};
			el = h(tag, {style}, [el]);
		}
		return el;
	},
};
