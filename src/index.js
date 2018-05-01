import VueFlex from './VueFlex';
export default VueFlex;

/*
import VueFlexBox from './VueFlexBox';
import VueFlexItem from './VueFlexItem';
export {
	VueFlexBox,
	VueFlexItem,
};
*/

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueFlex);
}
