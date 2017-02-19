// -------------------
// controller phase
// -------------------
myApp.controller('index', ['$scope', '$injector', function($scope, $injector) {
  // Injector
  var $validationProvider = $injector.get('$validation');

  // Initial Value
  $scope.form4 = {
    changeErrorMsg: 'This is the First Error Msg',
    changeMsg: function() {
      $scope.form4.changeErrorMsg = 'This is the Second Error Msg';
    }
  };
}]);
