export default function() {
	return this.$parent && this.$parent.$options.name === this.$options.name;
}
