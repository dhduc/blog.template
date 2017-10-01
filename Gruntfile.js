module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    var cssResources = [
        'public/css/font-awesome.min.css',
        'public/css/poole.css',
        'public/css/syntax.css',
        'public/css/hyde.css',
        'public/css/app.css',
        'public/css/algolia.css',
        'public/css/prism.css',
        'public/css/main.css',
        'public/css/github-calendar.css'
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
              'index.html': ['index.pug'],
              'post.html': ['post.pug'],
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
                    cwd: 'scss',
                    src: ['styles.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        less: {
            dist: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "public/css/main.css": "public/less/main.less"
                }
            }
        },
        watch: {
            css: {
                files: ['public/less/*.less'], // which files to watch
                tasks: ['less', 'concat', 'cssmin'],
                options: {
                    nospawn: true
                }
            },
            js: {
                files: {
                    'public/js/algolia.min.js': ['public/js/algolia.js'],
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
                    'public/js/algolia.min.js': ['public/js/algolia.js'],
                    'public/js/app.min.js': ['public/js/app.js'],
                    'public/js/config.min.js': ['public/js/config.js']
                }
            }
        },

        cssmin: {
            dist: {
                options: {
                    banner: '/*! styles.min.css 1.0.0 | Duc Dao (@huuduc2107) | newbie-dev.net */'
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

    grunt.registerTask('dev', ['less', 'concat', 'uglify']);
    grunt.registerTask('prod', ['less', 'concat', 'cssmin', 'uglify']);
};
