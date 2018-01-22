import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
	input: 'src/VueFlexBox.js',
	output: {
		file: 'VueFlexBox.js',
		format: 'umd',
		name: 'VueFlexBox',
		exports: 'auto',
	},
	plugins: [
		buble(),
		//uglify(),
	],
};
