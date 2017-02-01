(function () {
  'use strict';

  angular
    .module('app.toolbar')
    .controller('ToolbarCtrl', ToolbarCtrl);

  ToolbarCtrl.$inject = [
    '$translatePartialLoader',
    '$translate',
    'tmhDynamicLocale'
  ];

  function ToolbarCtrl($translatePartialLoader, $translate, tmhDynamicLocale) {
    var vm = this;

    // Data

    vm.query = '';
    vm.queryNotification = '';

    // Methods

    vm.changeLanguage = changeLanguage;
    vm.changeLocale = changeLocale;

    //////////

    init();

    function init() {
      $translatePartialLoader.addPart('toolbar');
    }

    function changeLanguage(languageKey) {
      $translate.use(languageKey);
    }

    function changeLocale(localeKey) {
      tmhDynamicLocale.set(localeKey);
    }
  }
})();
