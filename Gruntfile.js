module.exports = function(grunt) {
  // configurations
  grunt.initConfig({
    shell: {
      gitHub: {
        command: [
          "git add .",
          'git commit -m "(add) recipe store "',
          "git push origin master"
        ].join("&&")
      }
    }
  });

  //load plugins
  grunt.loadNpmTasks("grunt-shell");

  //register task
  grunt.registerTask("deploy", ["shell"]);

};
