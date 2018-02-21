export default {
	name: 'VueFlexBox',

	props: {
		tag: {
			type: String,
			default: 'div',
		},
		fillHeight: {
			type: Boolean,
			default: false,
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
			default: 'start',
		},
		padding: {
			type: Number,
			default: 0,
		},
		spacing: {
			type: Number,
			default: 0,
		},
	},

	computed: {
		childrenPadding() {
			if (this.$parent && this.$parent.$options.name === 'VueFlexBox') {
				return this.$parent.childrenPadding;
			}
			return this.spacing / 2;
		},

		margin() {
			if (this.$parent && this.$parent.$options.name === 'VueFlexBox') {
				return 0;
			}
			return this.padding - this.childrenPadding;
		},
	},

	render(createElement) {
		let tag = this.tag;
		let fillHeight = this.fillHeight;
		let directionColumn = this.directionColumn;
		let reverseDirection = this.reverseDirection;
		let wrap = this.wrap;
		let reverseWrap = this.reverseWrap;
		let justifyContent = this.justifyContent;
		let alignItems = this.alignItems;
		let alignContent = this.alignContent;
		let margin = this.margin;

		let style = {
			position: 'relative',
			margin: margin === 0 ? 0 : `${margin}px`,
			display: 'flex',
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

		return createElement(tag, {style}, this.$slots.default);
	},
};
