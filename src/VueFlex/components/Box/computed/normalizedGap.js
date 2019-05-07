import Number_isNumber from '../../../../utils/Number/isNumber';

export default function() {
	let {gap} = this;
	return Number_isNumber(gap) ? `${gap}px` : gap;
}
