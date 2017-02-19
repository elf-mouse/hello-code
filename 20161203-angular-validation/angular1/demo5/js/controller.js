// -------------------
// controller phase
// -------------------
myApp.controller('index', ['$scope', '$injector', function($scope, $injector) {
  // Injector
  var $validationProvider = $injector.get('$validation');

  // Initial Value
  $scope.form5 = {
    checkValid: $validationProvider.checkValid,
    submit: function(form) {
      $validationProvider.validate(form);
    },
    reset: function(form) {
      $validationProvider.reset(form);
    }
  };
}]);
