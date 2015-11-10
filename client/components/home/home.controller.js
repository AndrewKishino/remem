/* home.controller.js */
(function() {

  'use strict';

  /**
   * Require the base level module and controller
   */
  angular
    .module('app')
    .controller('HomeController', HomeController);

  /**
   * HomeController
   *
   * @description Contains all the functionality for the HomeController. Returns
   *   nothing.
   */
  function HomeController($state, localStorageService) {
    var vm = this;

    vm.lsKeys = localStorageService.keys();
    vm.lsLength = localStorageService.length();
    vm.submit = submit;
    vm.getItem = getItem;
    vm.removeItem = removeItem;
    vm.removeItems = removeItems;
    vm.clearAll = clearAll;
    vm.addNote = addNote;

    init();

    function submit(key, val) {
      return localStorageService.set(key, val);
    }

    function getItem(key) {
      return localStorageService.get(key);
    }

    function removeItem(key) {
      return localStorageService.remove(key);
    }

    function removeItems(key1, key2, key3) {
      return localStorageService.remove(key1, key2, key3);
    }

    function clearAll() {
      return localStorageService.clearAll();
    }

    function addNote() {
      $state.go('note');
    }

    function init() {

    }

  }

})();