//Grunt is just JavaScript running in node, after all...
module.exports = function(grunt) {

  // All upfront config goes in a massive nested object.
  grunt.initConfig({
    // You can set arbitrary key-value pairs.
    distFolder: 'dist',
    // You can also set the value of a key as parsed JSON.
    // Allows us to reference properties we declared in package.json.
    pkg: grunt.file.readJSON('package.json'),
    // Grunt tasks are associated with specific properties.
    // these names generally match their npm package name.
   concat: {
  		options: {
    		separator: ';'
  		},
  		dist: {
    		src: ['scripts/*.js'],
    		dest: '<%= distFolder %>/main.js'
  		},
  		deploy: {
    		// options that are specific to the 'deploy' target
    		// target-level options override task-level options
    		options: {
      			// separator:';;;' would override the parent setting
    		},
    		src:['deploy/*.js'],
    		dest:'deploy.js'
  		}
	}		
  }); // The end of grunt.initConfig

  // We've set up each task's configuration.
  // Now actually load the tasks.
  // This will do a lookup similar to node's require() function.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Register our own custom task alias.
  grunt.registerTask('build', ['concat']);
};
