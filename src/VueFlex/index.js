import * as components from './components';

export default {
	install(Vue) {
		Object.values(this.components).forEach(component => {
			Vue.component(component.name, component);
		});
	},
	components,
	...components,
};
