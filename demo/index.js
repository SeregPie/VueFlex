(function() {

	new Vue({
		el: '#app',

		data: {
			spacingValues: [0, 1, 10, 50],
			spacingValueIndex: 2,
		},

		computed: {
			spacing: function() {
				return this.spacingValues[this.spacingValueIndex];
			},
		},
	});

})();
