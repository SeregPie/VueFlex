export default function() {
	if (this.nested) {
		return this.$parent.childMargin;
	}
}
