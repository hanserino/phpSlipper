var stylePath = 'style/',
	iconsPath = stylePath + 'icons/svg/',
	fontPath = stylePath + 'fonts/',
	jsPath = 'js/',
	imgDumpPath = 'images/imgDump',
	imgPath = 'images/';


module.exports = function(grunt) {

	grunt.log.write('This is how you log inside the gruntfile');


	/* Timegrunt ===============================================
	https://www.npmjs.org/package/time-grunt
	============================================================ */
	require('time-grunt')(grunt);


	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/* Uglify ===============================================
		https://github.com/gruntjs/grunt-contrib-uglify
		============================================================ */
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
			options: {
				cache: false,
				optimizationLevel: 5
			},

			dist: {
				files: [{
					expand: true,
					cwd: imgDumpPath,
					src: ['**/*.{png,jpg,jpeg,gif}'],
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