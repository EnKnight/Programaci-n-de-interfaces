'use strict';

describe('Controller: MainmenuCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectoFinalApp'));

  var MainmenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainmenuCtrl = $controller('MainmenuCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainmenuCtrl.awesomeThings.length).toBe(3);
  });
});
