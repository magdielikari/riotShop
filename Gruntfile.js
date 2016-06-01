module.exports = function (grunt) {
grunt.initConfig({
  connect: {
      server: {
        options: {
          port: 9000,
          base: 'public'
        }
      }
    },
    shell: {
      compileRiot: {
          command: 'riot public/components public/assets/js/app.js'
      }
    },
    // task watch
  watch: {
    project: {
      files: ['**/*.js', '**/*.html', '**/*.css'],
      options: {
        livereload: true
      }
    },
    riotFiles: {
      files: ['**/*.tag'],
      tasks: ['shell'],
      options: {
        livereload: true
      }
    }
  }
});
grunt.loadNpmTasks('grunt-shell');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['connect', 'watch']);
};