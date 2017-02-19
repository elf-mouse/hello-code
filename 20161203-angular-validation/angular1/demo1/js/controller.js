// -------------------
// controller phase
// -------------------
myApp.controller('index', ['$scope', '$injector', function($scope, $injector) {
  // Injector
  var $validationProvider = $injector.get('$validation');

  // Initial Value
  $scope.form = {
    requiredCallback: 'required',
    checkValid: $validationProvider.checkValid,
    submit: function() {
      // angular validation 1.2 can reduce this procedure, just focus on your action
      // $validationProvider.validate(form);
    },
    reset: function() {
      // angular validation 1.2 can reduce this procedure, just focus on your action
      // $validationProvider.reset(form);
    }
  };
}]);
