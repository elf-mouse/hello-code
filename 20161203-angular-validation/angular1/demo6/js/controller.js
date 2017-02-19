// -------------------
// controller phase
// -------------------
myApp.controller('index', ['$scope', '$injector', function($scope, $injector) {
  // Injector
  var $validationProvider = $injector.get('$validation');

  // Initial Value
  $scope.form6 = {
    required: [{}, {}, {}], // ng-repeat
    checkValid: $validationProvider.checkValid
  };
}]);
