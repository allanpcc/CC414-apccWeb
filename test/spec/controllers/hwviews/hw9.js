'use strict';

describe('Controller: HwviewsHw9Ctrl', function () {

  // load the controller's module
  beforeEach(module('allancastroApp'));

  var HwviewsHw9Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HwviewsHw9Ctrl = $controller('HwviewsHw9Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HwviewsHw9Ctrl.awesomeThings.length).toBe(3);
  });
});
