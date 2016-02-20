app.config(function($stateProvider, $urlRouterProvider) {
 
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "app/pages/home.html",
      controller: "homeController as home"
    })
});