module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    './output/ES6toES5.js': './input/classesES6.js'
                }
            }
        },
        uglify: {
            build: {
                files: {
                    "dest/minify.min.js": ["input/classesES5.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ['server.js'],
                tasks: ['babel', 'uglify'],
                options: {
                    spawn: false,
                },
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['babel', 'uglify', 'watch']);

};