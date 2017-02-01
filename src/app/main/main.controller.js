(function () {
  'use strict';

  angular
    .module('app.main')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = [
    '$rootScope',
    '$translatePartialLoader'
  ];


  function MainCtrl($rootScope, $translatePartialLoader) {
    var vm = this;

    // Data

    vm.language = 'en';
    vm.locale = 'en';

    // Methods

    //////////

    init();

    function init() {
      $translatePartialLoader.addPart('main');

      $rootScope.$on('$translateChangeSuccess', function ($event, data) {
        vm.language = data.language;
      });

      $rootScope.$on('$localeChangeSuccess', function ($event, locale) {
        vm.locale = locale;
      });
    }
  }
})();
