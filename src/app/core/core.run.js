(function () {
  'use strict';

  angular
    .module('app.core')
    .run(runBlock);

  runBlock.$inject = [
    '$rootScope',
    '$translate',
    'tmhDynamicLocale'
  ];

  function runBlock($rootScope, $translate, tmhDynamicLocale) {
    $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
      $translate.refresh();
    });

    tmhDynamicLocale.set('en');
  }
}());
