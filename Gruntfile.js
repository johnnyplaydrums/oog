module.exports = function(grunt) {
	'use strict';
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),	

		project: {
			app: 'app',
			src: '<%= project.app %>/src',
			js: '<%= project.src %>/js',
			css: '<%= project.src %>/css',
			build : '<%= project.app %>/build'
		},

		sass: {
			src: {
				files: {
					'<%= project.build %>/css/style.css' : ['<%= project.css %>/style.scss']
				}	
			}	
		},

		jshint: {
			files: ['Gruntfile.js', '<%= project.js %>/app.js'],
		},

		concat: {
			js: {
				src: ['<%= project.app %>/bower_components/jquery/dist/jquery.js', '<%= project.app %>/bower_components/angular/angular.js', '<%= project.js %>/app.js'],
				dest: '<%= project.js %>/production.js' 
			}
		},

		uglify: {
			build: {
				files: {
					'<%= project.build %>/js/production.min.js' : ['<%= concat.js.dest %>']
				}
			}
		},

		imagemin: {
			build: {
				options: {
					optimizationLevel: 5
				},
				files: [{
					expand: true,
					cwd: '<%= project.src %>/images/',
					src: ['*.{png,jpg,gif}'],
					dest: '<%= project.build %>/images/'
				}]	
			}		
		},

		watch: {
			sass: {
				files: '<%= project.css %>/*.scss',
				tasks: ['sass']
			},
			jshint: {
				files: '<%= project.js %>/app.js',
				tasks: ['jshint']
			},
			concat: {
				files: '<%= project.js %>/app.js',
				tasks: ['concat'],
			},
			uglify: {
				files: '<%= concat.js.dest %>',
				tasks: ['uglify']
			}
		}
	
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');


	grunt.registerTask('default', ['sass', 'jshint', 'concat', 'uglify', 'imagemin', 'watch']);
};
