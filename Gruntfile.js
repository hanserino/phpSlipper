var stylePath = 'style/',
	iconsPath = stylePath + 'icons/svg/',
	fontPath = stylePath + 'fonts/',
	jsPath = 'js/',
	imgPath = 'img/';


module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/* Ugilfy js =============================================== */
		uglify: {
			build: {
				src: [
					jsPath+'plugins.js',
					jsPath+'main.js',
					jsPath+'forms.js'
				],
				dest: jsPath+'build/main.min.js'
			}
		},

		/* Grunricon ===============================================
		  https://www.npmjs.org/package/grunt-contrib-compass
		============================================================ */
		grunticon: {
			myIcons: {
				files: [{
					expand: true,
					cwd: iconsPath,
					src: ['*.svg', '*.png'],
					dest: stylePath+'css/'
				}],
				options: {
					loadersnippet: "grunticon.loader.js"
				}
			}
		},

		/* Imagemin ===============================================
  		https://github.com/gruntjs/grunt-contrib-imagemin
		============================================================ */
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: imgPath,
					src: ['**/*.{png,jpg,gif}'],
					dest: imgPath
				}]
			}
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-contrib-imagemin');


	// Default task(s).
	grunt.registerTask('default',
		[
		'uglify',
		'grunticon',
		'imagemin'
		]
	);

};