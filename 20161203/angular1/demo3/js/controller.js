// -------------------
// controller phase
// -------------------
myApp.controller('index', ['$scope', '$injector', function($scope, $injector) {
  // Injector
  var $validationProvider = $injector.get('$validation');

  // Initial Value
  $scope.form3 = {
    checkValid: $validationProvider.checkValid,
    submit: function(form) {
      $validationProvider.validate(form)
        .success($scope.success)
        .error($scope.error);
    },
    reset: function(form) {
      $validationProvider.reset(form);
    }
  };

  // Callback method
  $scope.success = function(message) {
    alert('Success ' + message);
  };

  $scope.error = function(message) {
    alert('Error ' + message);
  };
}]);
