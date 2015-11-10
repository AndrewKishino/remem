/**
 * This is the default module that bootstraps up angular.
 */
(function() {

  /**
   * Always declare 'use strict'
   */
  'use strict';

  /**
   * Require the base level module which will be used in ng-app
   */
  angular
    .module('app', [
      'ui.router',
      'checklist-model',
      'ngSanitize',
      'LocalStorageModule'
    ])
    .config(config)
    .run(run);

  /**
   * config() Bootstraps the initial configuration for our application, setting
   * up the states based on UI Router. Returns nothing.
   */
  function config($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'components/home/home.html'
      });

    $stateProvider
      .state('note', {
        url: '/note',
        templateUrl: 'components/note/note.html'
      });

    localStorageServiceProvider
      .setStorageCookie(0, '<path>');

    localStorageServiceProvider
      .setPrefix('remem');
  }

  /**
   * run() Do some stuff at run time and before the app loads. Returns
   * nothing.
   */
  function run() {

  }

})();