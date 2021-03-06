'use strict';

import path from 'path';
import gulp from 'gulp';
import { plugins, args, config, taskTarget, browserSync } from '../utils';

let dirs = config.directories;
let dest = path.join(taskTarget);

// Copy
gulp.task('copy', () => {
  return gulp.src([
    '**/*',
    '!{**/\_*,**/\_*/**,*.md}',
    '!**/*.nunjucks'
  ], { cwd: dirs.source })
  .pipe(plugins.changed(dest))
  .pipe(gulp.dest(dest));
});

// Copy
gulp.task('copy-js', () => {
  return gulp.src([
    '_scripts/**/*',
  ], { cwd: dirs.source })
  .pipe(plugins.changed(dest))
  .pipe(gulp.dest(dest+'/scripts'));
});