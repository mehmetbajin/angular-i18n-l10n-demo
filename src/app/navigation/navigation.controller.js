(function () {
  'use strict';

  angular
    .module('app.navigation')
    .controller('NavigationCtrl', NavigationCtrl);

  NavigationCtrl.$inject = [
    '$translatePartialLoader'
  ];


  function NavigationCtrl($translatePartialLoader) {
    var vm = this;

    // Data

    // Methods

    //////////

    init();

    function init() {
      $translatePartialLoader.addPart('navigation');
    }
  }
})();
