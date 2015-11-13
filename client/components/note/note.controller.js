/* note.controller.js */
(function() {

  'use strict';

  /**
   * Require the base level module and controller
   */
  angular
    .module('app')
    .controller('NoteController', NoteController);

  /**
   * NoteController
   *
   * @description Contains all the functionality for the NoteController. Returns
   *   nothing.
   */
  function NoteController($state, localStorageService) {
    var vm = this;

    vm.lsKeys = localStorageService.keys();
    vm.lsLength = localStorageService.length();
    vm.submit = submit;
    vm.getItem = getItem;
    vm.goHome = goHome;
    vm.note = '';
    vm.title = '';

    function submit(key, val) {
      localStorageService.set(key, val);
      $state.go('home');
    }

    function getItem(key) {
      return localStorageService.get(key);
    }

    function goHome() {
      $state.go('home');
    }

  }

})();