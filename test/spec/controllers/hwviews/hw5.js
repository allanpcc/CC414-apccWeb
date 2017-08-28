'use strict';

describe('Controller: HwviewsHw5Ctrl', function () {

  // load the controller's module
  beforeEach(module('allancastroApp'));

  var HwviewsHw5Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HwviewsHw5Ctrl = $controller('HwviewsHw5Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HwviewsHw5Ctrl.awesomeThings.length).toBe(3);
  });
});
