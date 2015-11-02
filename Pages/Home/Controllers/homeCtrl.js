angular.module('GitHubClient.Home').controller('HomeCtrl', function ($scope, LoginSvc) {
    $scope.logInUser = logInUser;

    function logInUser(userName) {
        LoginSvc.logInUser(userName);
        $scope.userName = '';
    }
});