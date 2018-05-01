import Box from './VueFlexBox';
import Item from './VueFlexItem';

let components = {
	Box,
	Item,
};

let VueFlex = {
	install(Vue) {
		Object.values(this.components).forEach(component => {
			Vue.component(component.name, component);
		});
	},

	components,
};

Object.assign(VueFlex, components);

export default VueFlex;
