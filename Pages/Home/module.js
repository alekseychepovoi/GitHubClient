angular.module('GitHubClient.Home', []).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/pages/home/templates/home.html',
            controller: 'HomeCtrl',
            resolve: {

            }
        });
});