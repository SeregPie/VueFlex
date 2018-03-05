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
			default: 'start',
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

		childrenMargin() {
			return this.nested ? this.$parent.childrenMargin : this.spacing / 2;
		},
	},

	render(h) {
		let tag = this.tag;
		let nested = this.nested;
		let directionColumn = this.directionColumn;
		let reverseDirection = this.reverseDirection;
		let wrap = this.wrap;
		let reverseWrap = this.reverseWrap;
		let justifyContent = this.justifyContent;
		let alignItems = this.alignItems;
		let alignContent = this.alignContent;
		let spacing = this.spacing;

		let style = {
			width: nested || spacing === 0 ? '100%' : `calc(100% + ${spacing}px)`,
			height: nested || spacing === 0 ? '100%' : `calc(100% + ${spacing}px)`,
			margin: nested || spacing === 0 ? 0 : `${-spacing / 2}px`,
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

		return h(tag, [h('div', {style}, this.$slots.default)]);
	},
};
