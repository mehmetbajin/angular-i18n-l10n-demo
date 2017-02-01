(function () {
  'use strict';

  angular
    .module('app.main.pages.home', [])
    .config(config);

  config.$inject = [
    '$stateProvider'
  ];

  function config($stateProvider) {
    $stateProvider.state('app.main_pages_home', {
      url: '/src/',
      views: {
        'toolbar@app.main_pages_home': {
          templateUrl: '/src/app/toolbar/toolbar.html',
          controller: 'ToolbarCtrl as vm'
        },
        'navigation@app.main_pages_home': {
          templateUrl: '/src/app/navigation/navigation.html',
          controller: 'NavigationCtrl as vm'
        },
        'main@': {
          templateUrl: '/src/app/main/main.html',
          controller: 'MainCtrl as vm'
        },
        'content@app.main_pages_home': {
          templateUrl: '/src/app/main/pages/home/home.html',
          controller: 'HomeCtrl as vm'
        }
      }
    });
  }
})();
