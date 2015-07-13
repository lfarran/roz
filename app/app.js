
'use script';

angular.module('app.services', []);
angular.module('app.controllers', []);
angular.module('app.directives', []);

angular.module('lbfSite', [ 'app.services',
                            'app.controllers',
                            'app.directives',
                            'lbf.templates'])

/**
 * Used to globally turn $log.debug, $log.info, $log.warn, & $log.errors messages on/off in app
 */
  .config(['$logProvider', '$provide',
    function($logProvider, $provide) {

      var debugOff = false;

      //if (config.isProduction) {
      if (debugOff) {
        $logProvider.debugEnabled(true);

        $provide.decorator('$log', ['$delegate', function ($delegate) {
          $delegate.table = angular.noop;
          return $delegate;
        }]);

        $provide.decorator('$log', ['$delegate', function ($delegate) {
          $delegate.debug = angular.noop;
          return $delegate;
        }]);

        $provide.decorator('$log', ['$delegate', function ($delegate) {
          $delegate.info = angular.noop;
          return $delegate;
        }]);

        $provide.decorator('$log', ['$delegate', function ($delegate) {
          $delegate.log = angular.noop;
          return $delegate;
        }]);

        $provide.decorator('$log', ['$delegate', function ($delegate) {
          $delegate.warn = angular.noop;
          return $delegate;
        }]);

        $provide.decorator('$log', ['$delegate', function ($delegate) {
          $delegate.error = angular.noop;
          return $delegate;
        }]);
      }
      else {
        // Extend Angular $log to add console table
        $provide.decorator('$log', ['$delegate', function ($delegate) {
          $delegate.table = function () {
            console.table(arguments);
          };
          return $delegate;
        }]);
      }
    }])

  // UI.Router
//.config( ['$stateProvider', '$urlRouterProvider',
//    function ( $stateProvider, $urlRouterProvider ) {
//      $urlRouterProvider.otherwise( '/' );
//}])

  /*  .run( function run () {
   })*/
  //.run(['$state', '$stateParams', function () {}]) // restores state on refresh

  /*.controller( 'AppCtrl', ['$scope', '$location', '$log',
    function ( $scope, $location, $log ) {

      $log.log('AppCtrl called');

      //// UI.Router method
      //$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      //  if ( angular.isDefined( toState.data.pageTitle ) ) {
      //    $scope.pageTitle = toState.data.pageTitle + ' | Luke Farran' ;
      //    $log.debug('pageTitle ' + $scope.pageTitle);
      //  }
      //});
    }])*/
;




