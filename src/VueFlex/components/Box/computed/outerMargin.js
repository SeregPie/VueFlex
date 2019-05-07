export default function() {
	if (this.$parent) {
		return this.$parent.childMargin;
	}
}
