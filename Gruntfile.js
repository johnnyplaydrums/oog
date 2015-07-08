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

		concat: {
			js: {
				src: ['<%= project.app %>/bower_components/jquery/dist/jquery.js', '<%= project.app %>/bower_components/angular/angular.js'],
				dest: '<%= project.js %>/production.js' 
			}
		},

		uglify: {
			build: {
				files: {
					'<%= project.build %>/js/production.min.js' : ['<%= concat.js.dest %>']
				}
			}
		}
	
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('default', ['sass', 'concat', 'uglify']);
}
