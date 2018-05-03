import * as components from './components';

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

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueFlex);
}
