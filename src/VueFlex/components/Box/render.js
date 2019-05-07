export default function(h) {
	let {
		$slots,
		alignContent,
		alignItems,
		directionColumn,
		innerMargin,
		justifyContent,
		outerMargin,
		reverseDirection,
		reverseWrap,
		tag,
		wrap,
	} = this;
	return h(
		tag,
		{
			style: {
				display: 'flex',
				margin: outerMargin,
			},
		},
		[h(
			'div',
			{
				style: {
					alignContent: alignContent,
					alignItems: alignItems,
					display: 'flex',
					flex: '1 1 0%',
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
					margin: innerMargin,
				},
			},
			$slots.default,
		)],
	);
}
