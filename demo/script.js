(function() {

	new Vue({
		el: '#app',

		data: {
			gapIndex: 2,
			gapValues: [0, 1, 10, 50],
		},

		computed: {
			gap: function() {
				return this.gapValues[this.gapIndex];
			},
		},
	});

})();
