module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
		'sync:dev',
		'coffee:dev'
	]);
};
