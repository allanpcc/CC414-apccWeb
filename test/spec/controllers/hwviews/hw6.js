'use strict';

describe('Controller: HwviewsHw6Ctrl', function () {

  // load the controller's module
  beforeEach(module('allancastroApp'));

  var HwviewsHw6Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HwviewsHw6Ctrl = $controller('HwviewsHw6Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HwviewsHw6Ctrl.awesomeThings.length).toBe(3);
  });
});
