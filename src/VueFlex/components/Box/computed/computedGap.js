export default function() {
	if (this.gap === 'inherit') {
		if (this.$parent) {
			if (this.$parent.computedGap) {
				return this.$parent.computedGap;
			}
		}
		return this.$options.props.gap.default;
	}
	return this.gap;
}
