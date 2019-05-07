export default function(h) {
	let {
		$slots,
		margin,
		tag,
	} = this;
	return h(
		tag,
		{
			style: {
				margin: margin,
			},
		},
		$slots.default,
	);
}
