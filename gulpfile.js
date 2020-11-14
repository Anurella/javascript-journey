const { src, dest, watch, parallel } = require('gulp');
const browser = require('browser-sync').create();
const pump = require('pump');

// this is a private function
function browserSync(cb) {
  browser.init({
    server: {
      baseDir: 'playground/',
    },
  });
}

exports.browserSync = browserSync;

function minifyHtml(cb) {
  pump(
    [
      src('playground/*.html'),
      dest('public/'),
      browser.reload({
        stream: true,
      }),
    ],
    cb()
  );
}
exports.minifyHtml = minifyHtml;

//  @ebents all monitors all events e.g add del e.t.c
function watchFiles(cb) {
  watch(
    'playground/*',
    {
      ignoreInitial: false,
      events: 'all',
    },
    minifyHtml
  );
}

exports.watchFiles = watchFiles;

exports.default = parallel(browserSync, watchFiles);
