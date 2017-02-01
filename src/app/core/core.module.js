(function () {
  'use strict';

  angular
    .module('app.core', [
      'ngSanitize',
      'ui.router',
      'pascalprecht.translate',
      'tmh.dynamicLocale'
    ]);
})();
