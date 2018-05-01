(function() {

	new Vue({
		el: '#App',

		data: {
			input: {
				spacing: {
					values: [0, 1, 10, 50],
					valueIndex: 2,
				},
			},
		},

		computed: {
			spacing: function() {
				var values = this.input.spacing.values;
				var valueIndex = this.input.spacing.valueIndex;
				var value = values[valueIndex];

				return value;
			},
		},
	});

})();
