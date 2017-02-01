(function () {
  'use strict';

  angular
    .module('app.main.pages.home')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = [
    '$translatePartialLoader'
  ];

  function HomeCtrl($translatePartialLoader) {
    var vm = this;

    // Data

    vm.now = new Date();

    vm.days = [0, 1, 2, 3, 4, 5, 6].map(function (offset) {
      var date = new Date(vm.now);
      date.setDate(vm.now.getDate() - offset);
      return date;
    });

    vm.months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (offset) {
      var date = new Date(vm.now);
      date.setMonth(vm.now.getMonth() - offset);
      return date;
    });

    vm.formats = [
      'fullDate',
      'longDate',
      'medium',
      'mediumDate',
      'mediumTime',
      'short',
      'shortDate',
      'shortTime'
    ];

    vm.numbers = [
      -1E9,
      -1E5,
      -1E4,
      -1E3,
      -1E2,
      -12,
      -5.23,
      -0.01,
      0,
      0.01,
      5.23,
      12,
      1E2,
      1E3,
      1E4,
      1E5,
      1E9
    ];

    vm.currencies = [
      1E10,
      123.45
    ];

    // Methods

    //////////

    init();

    function init() {
      $translatePartialLoader.addPart('main/pages/home');
    }
  }
})();
