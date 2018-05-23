import buble from 'rollup-plugin-buble';
import resolve from '@seregpie/rollup-plugin-resolve';
import {uglify} from 'rollup-plugin-uglify';

import pkg from './package.json';

export default {
	input: 'src/index.js',
	output: {
		file: pkg.main,
		format: 'umd',
		name: 'VueFlex',
	},
	plugins: [
		resolve(),
		buble({objectAssign: 'Object.assign'}),
		uglify(),
	],
};
