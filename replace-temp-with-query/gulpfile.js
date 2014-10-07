var gulp = require('gulp')
var karma = require('karma').server;

gulp.task('spec', function(done){
  karma.start({
    configFile: __dirname + '/spec/karma.config.js',
    singleRun: true
  }, done);
});