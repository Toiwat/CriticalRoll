(function () {
  'use strict';

  angular
    .module('CriticalRoll')
    .controller('SettingsController', SettingsController);

  function SettingsController(SettingsService) {

    var vm = this;

    vm.values = SettingsService.values;

    vm.refreshSettings = SettingsService.refreshSettings;

  }
})();
