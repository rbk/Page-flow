module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				mangle: true,
				compress: {
					drop_console: false
				}
			},
            my_target: {
                options: {
                    beautify: false
                },
                files: {
                    'dist/pageflow.min.js': [
                        'src/pageflow.js'
                    ]
                }
            }
		},
        watch: {
            js: {
                files: 'src/*.js',
                tasks: ['uglify']
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);

};
