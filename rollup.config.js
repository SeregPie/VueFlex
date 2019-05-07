import {terser} from 'rollup-plugin-terser';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';

import {main} from './package.json';

export default {
	input: 'src/index.js',
	plugins: [
		resolve(),
		buble({objectAssign: 'Object.assign'}),
		terser(),
	],
	output: {
		file: main,
		format: 'umd',
		name: 'VueFlex',
	},
};
