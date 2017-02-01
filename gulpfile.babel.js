'use strict';

import { config } from 'dotenv';
import gulp from 'gulp';
import util from 'gulp-util'

config();

require('require-dir')('./gulp');

gulp.task('default', () => {
  util.log(util.colors.red('Refer to package.json for available scripts.'));
});
