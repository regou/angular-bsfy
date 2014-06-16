module.exports = function(grunt) {
    grunt.initConfig({

        // define source files and their destinations
        uglify: {
            options: {
                sourceMap: true
            },
            files: {
                src: 'lib/**/*.js',  // source files mask
                dest: 'lib/min/',    // destination folder
                expand: true,    // allow dynamic building
                flatten: true   // remove all unnecessary nesting
            }
        }

    });



    // load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // register at least this one task
    grunt.registerTask('default', [ 'uglify' ]);
};