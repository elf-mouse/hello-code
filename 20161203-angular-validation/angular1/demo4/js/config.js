// -------------------
// config phase
// -------------------
myApp.config(['$validationProvider', function($validationProvider) {
  var defaultMsg;
  var expression;

  /**
   * Additions validation
   */
  $validationProvider
    .setExpression({
      huei: function(value, scope, element, attrs) {
        return value === 'Huei Tan';
      }
    })
    .setDefaultMsg({
      huei: {
        error: 'This should be Huei Tan',
        success: 'Thanks!'
      }
    });

  /**
   * Range Validation
   */
  $validationProvider
    .setExpression({
      range: function(value, scope, element, attrs) {
        if (value >= parseInt(attrs.min) && value <= parseInt(attrs.max)) {
          return value;
        }
      }
    })
    .setDefaultMsg({
      range: {
        error: 'Number should between 5 ~ 10',
        success: 'good'
      }
    });
}]);
