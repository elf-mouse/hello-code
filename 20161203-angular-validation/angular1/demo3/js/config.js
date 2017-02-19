// -------------------
// config phase
// -------------------
myApp.config(['$validationProvider', function($validationProvider) {
  var defaultMsg;
  var expression;

  /**
   * Setup a default message for Url
   */
  defaultMsg = {
    url: {
      error: 'This is a error url given by user',
      success: 'It\'s Url'
    }
  };

  $validationProvider.setDefaultMsg(defaultMsg);
}]);
