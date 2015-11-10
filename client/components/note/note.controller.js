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
  function NoteController(localStorageService) {
    var vm = this;

    init();

    function init() {
      
    }

  }

})();