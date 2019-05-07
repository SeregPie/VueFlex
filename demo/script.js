(function() {

	new Vue({
		el: '#app',

		data: {
			gapIndex: 2,
			gapValues: ['0px', '1px', '10px', '50px'],
		},

		computed: {
			gap: function() {
				return this.gapValues[this.gapIndex];
			},
		},
	});

})();
