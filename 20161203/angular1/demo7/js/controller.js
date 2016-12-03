// -------------------
// controller phase
// -------------------
myApp.controller('index', ['$scope', '$injector', function($scope, $injector) {
  // Injector
  var $validationProvider = $injector.get('$validation');

  // Initial Value
  // Bootstrap Datepicker
  $scope.form7 = {
    dt: new Date(),
    open: function($event) {
      $scope.form7.status.opened = true;
    },
    dateOptions: {
      formatYear: 'yy',
      startingDay: 1
    },
    status: {
      opened: false
    }
  };
}]);
