'use strict';

describe('Controller: HwviewsHw10Ctrl', function () {

  // load the controller's module
  beforeEach(module('allancastroApp'));

  var HwviewsHw10Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HwviewsHw10Ctrl = $controller('HwviewsHw10Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HwviewsHw10Ctrl.awesomeThings.length).toBe(3);
  });
});
