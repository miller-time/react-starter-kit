module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            jsx: {
                files: ['src/**/*.jsx'],
                tasks: ['react']
            }
        },

        react: {
            jsx: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.jsx'],
                    dest: 'build',
                    ext: '.js'
                }]
            }
        }

    });

    grunt.registerTask('default', ['react', 'watch']);

};
