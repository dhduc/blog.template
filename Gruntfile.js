module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    var cssResources = [
        'public/css/blog-home.css',
        'public/css/blog-post.css',
        'public/css/style.css'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        pug: {
          compile: {
            options: {
              data: {
                debug: false
              }
            },
            files: {
              'public/index.html': ['public/pug/index.pug'],
              'public/post.html': ['public/pug/post.pug'],
              'public/404.html': ['public/pug/404.pug'],
              'public/500.html': ['public/pug/500.pug']
            }
          }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'public/scss',
                    src: ['style.scss', 'theme.scss'],
                    dest: 'public/css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            html: {
                files: {
                    'public/index.html': ['public/pug/index.pug'],
                    'public/post.html': ['public/pug/post.pug']
                },
                tasks: ['pug']
            },
            css: {
                files: ['public/scss/*.scss'], // which files to watch
                tasks: ['sass', 'concat', 'cssmin'],
                options: {
                    nospawn: true
                }
            },
            js: {
                files: {
                    'public/js/app.min.js': ['public/js/app.js'],
                    'public/js/config.min.js': ['public/js/config.js']
                },
                tasks: ['uglify']
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: cssResources,
                dest: 'public/css/styles.css'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'public/js/app.min.js': ['public/js/app.js'],
                    'public/js/config.min.js': ['public/js/config.js']
                }
            }
        },

        cssmin: {
            dist: {
                options: {
                    banner: '/*! styles.min.css 1.0.0 | Duc Dao (@huuduc2107) */'
                },
                files: {
                    'public/css/styles.min.css': ['public/css/styles.css']
                }
            }
        }
    });

    // Loading dependencies
    for ( key in grunt.file.readJSON( "package.json" ).devDependencies ) {
        if ( key !== "grunt" && key.indexOf( "grunt" ) === 0 ) {
            grunt.loadNpmTasks( key );
        }
    }

    grunt.registerTask('style', ['sass', 'concat', 'cssmin']);
    grunt.registerTask('default', ['pug', 'style', 'uglify']);
};
