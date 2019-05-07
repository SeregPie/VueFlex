export default function() {
	if (this.nested) {
		return this.$parent.childMarginExpression;
	}
	return `${this.normalizedGap} / 2`;
}
