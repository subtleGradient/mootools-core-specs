var UnitTester = {
	site: 'MooTools 1.2.4', //title of your site
	title: 'Unit Tests', //title of this test group
	path: '../../UnitTester/',
	ready: function(UnitTester){
		new UnitTester({
			core: '../../Libraries/core.1.2.4/' //path to Source/scripts.json
		}, {
			Tests: 'Tests/' //path to tests.json
		});
	}
};