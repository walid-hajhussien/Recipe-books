module.exports = function(grunt) {

  // configration
  grunt.initConfig({
    shell:{
      gitHub:{
        command:['git add .','git commit -m "(add) grunt file"','git push origin master'].join('&&')
      }
    }
  });

  //load plugins
  grunt.loadNpmTasks("grunt-shell");

  //register task
  grunt.registerTask("deploy",["shell"])





}
