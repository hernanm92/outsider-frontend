'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ionic-material',
  'ionMdInput'
])
.run(function($ionicPlatform) {

  console.log('daleee wachin');
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/main/login');
  $stateProvider  // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'modules/app/components/menu/menu.html',
        controller: 'AppCtrl'
      });
});
//.config(function ($sceDelegateProvider, $httpProvider) {
//  // Needed for authentication
//  $httpProvider.defaults.withCredentials = true;
//  // Needed for CORS
//  $httpProvider.defaults.useXDomain = true;
//  delete $httpProvider.defaults.headers.common['X-Requested-With'];
//  //$sceDelegateProvider.resourceUrlWhitelist([
//  //  // Allow same origin resource loads.
//  //  'self',
//  //  // Allow loading from our assets domain.
//  //  'http://localhost:8080/**'
//  //]);
//}).config(function ($translateProvider) {
//  $translateProvider.useMissingTranslationHandlerLog();
//  $translateProvider.useStaticFilesLoader({
//    prefix: 'main/resources/locale-',
//    // path to translations files
//    suffix: '.json'  // suffix, currently- extension of the translations
//  });
//  $translateProvider.preferredLanguage('es');  // is applied on first load
//}).config(function (tmhDynamicLocaleProvider) {
//  tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
//}).config(function ($ionicConfigProvider) {
//  // Use native scrolling
//  if (ionic.Platform.isAndroid()) {
//    $ionicConfigProvider.scrolling.jsScrolling(false);
//  }
//  // Disable cache
//  $ionicConfigProvider.views.maxCache(0);
//});
