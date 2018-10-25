(function() {

	new Vue({
		el: '#app',

		data: {
			spacingIndex: 2,
			spacingValues: [0, 1, 10, 50],
		},

		computed: {
			spacing: function() {
				return this.spacingValues[this.spacingIndex];
			},
		},
	});

})();
