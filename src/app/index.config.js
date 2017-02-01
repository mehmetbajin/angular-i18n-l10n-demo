(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = [
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider'
  ];

  function config($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/src/');

    $stateProvider.state('app', { abstract: true });
  }
})();
