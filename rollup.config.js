import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

import pkg from './package.json';

export default {
	input: 'src/index.js',
	output: {
		file: pkg.main,
		format: 'umd',
		name: 'window',
		extend: true,
	},
	plugins: [
		buble(),
		uglify(),
	],
};
