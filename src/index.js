export default VueFlexBox;
export {VueFlexBox, VueFlexItem};

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.component(VueFlexBox.name, VueFlexBox);
	window.Vue.component(VueFlexItem.name, VueFlexItem);
}
