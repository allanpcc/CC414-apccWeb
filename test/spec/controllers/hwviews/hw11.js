'use strict';

describe('Controller: HwviewsHw11Ctrl', function () {

  // load the controller's module
  beforeEach(module('allancastroApp'));

  var HwviewsHw11Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HwviewsHw11Ctrl = $controller('HwviewsHw11Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HwviewsHw11Ctrl.awesomeThings.length).toBe(3);
  });
});
