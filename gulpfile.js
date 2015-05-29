var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var connect = require('gulp-connect');

var webpackConfig = require('./webpack.config');

gulp.task('webpack-watch', function() {
    webpack(webpackConfig, function(err, stats) {
        if(err) {
            throw new gutil.PluginError('webpack bundle', err);
        }
        gutil.log('[webpack]', stats.toString({
            colors: true,
            chunks: false
        }));
    })
});

gulp.task('reload', function(){
    gulp.src('./bundle.js')
        .pipe(connect.reload());
});

gulp.task('server', function() {
    connect.server({
        port: 9000,
        livereload: true
    });
    return gulp.watch(['./bundle.js', './index.html'], ['reload']);
});

gulp.task('default', ['webpack-watch', 'server']);

