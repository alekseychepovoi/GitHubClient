angular.module('GitHubClient', [
    'ngRoute',
    'GitHubClient.Common',
    'GitHubClient.Home',
    'GitHubClient.Users'
]).config(function($locationProvider, $provide) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $provide.decorator('$http', function ($delegate) {
        $delegate.getDataFromResult = function (result) {
            return result.data;
        };

        return $delegate;
    });
});