'use strict';

import gulp from 'gulp';
import map from 'map-stream';
import rename from 'gulp-rename';
import traverse from 'traverse';
import transform from 'vinyl-transform';
import jsonFormat from 'gulp-json-format';
import bluebird from 'bluebird';
import MicrosoftTranslator from 'mstranslator';

bluebird.promisifyAll(MicrosoftTranslator.prototype);

const Translator = new MicrosoftTranslator({
  client_id: process.env.MICROSOFT_TRANSLATOR_CLIENT_ID,
  client_secret: process.env.MICROSOFT_TRANSLATOR_CLIENT_SECRET
}, true);

function getTranslation(string, to) {
  const text = string;
  const from = 'en';

  return Translator.translateAsync({ text, from, to });
}

function getTranslations(strings, to) {
  const promises = [];

  traverse(strings).forEach((string) => {
    if (typeof string !== 'object') {
      promises.push(getTranslation(string, to));
    }
  });

  return Promise.all(promises);
}

function translateTable(to) {
  return transform(() => {
    return map((data, done) => {
      const strings = JSON.parse(data);
      getTranslations(strings, to)
        .then((translations) => {
          let index = 0;
          const translated = traverse(strings).forEach(function (string) {
            if (typeof string !== 'object') {
              this.update(translations[index++]);
            }
          });
          done(null, JSON.stringify(translated));
        })
        .catch(done);
    });
  });
}

function translate(to) {
  return gulp.src('src/app/**/i18n/en.json')
    .pipe(translateTable(to))
    .pipe(jsonFormat(2))
    .pipe(rename({ basename: to }))
    .pipe(gulp.dest('src/app'));
}

gulp.task('translate:tr', () => translate('tr'));

gulp.task('translate', ['translate:tr']);
