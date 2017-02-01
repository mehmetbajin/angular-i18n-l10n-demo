(function () {
  'use strict';

  angular
    .module('app.core')
    .config(config);

  config.$inject = [
    '$translateProvider',
    'tmhDynamicLocaleProvider'
  ];

  function config($translateProvider, tmhDynamicLocaleProvider) {
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '/src/app/{part}/i18n/{lang}.json',
    });
    $translateProvider.useLoaderCache(true);
    $translateProvider.preferredLanguage('en');
    $translateProvider.addInterpolation('$translateMessageFormatInterpolation');

    tmhDynamicLocaleProvider.localeLocationPattern(
      '/node_modules/angular-i18n/angular-locale_{{locale}}.js');
  }
}());
