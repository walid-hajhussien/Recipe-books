module.exports = function(grunt) {

  // configurations
  grunt.initConfig({
    shell:{
      gitHub:{
        command:['git add .','git commit -m "(add) grunt file"'].join('&&'),
        push:"git push origin master"
      }
    }
  });

  //load plugins
  grunt.loadNpmTasks("grunt-shell");

  //register task
  grunt.registerTask("deploy",["shell"])





}
