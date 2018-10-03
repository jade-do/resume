'use strict';

module.exports = function(grunt){
    //Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    //Automatically load requred Grunt tasks
    require('jit-grunt')(grunt);
    // Define the configuration for all the tasks:
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },

        copy: {
            html: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: './',
                        src: ['*.html'],
                        dest: 'dist'
                    }
                ]
            },
            fonts: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'node_modules/font-awesome',
                        src: ['fonts/*.*'],
                        dest: 'dist'
                    }
                ]
            }
        },

        clean: {
            build: {
                src: ['dist/']
            }
        },

        watch:{
            files: 'css/*.scss',
            tasks: ['sass']
        },

        browswerSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*css',
                        'js/*.js',
                        '*.html'
                    ]
                },

                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['img/*{png,jpg, gif}'],
                    dest: 'dist'
                }]
            }
        }
    });

    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};