angular.module('GitHubClient.Home').controller('HomeCtrl', function ($scope) {
    $scope.logInUser = logInUser;

    function logInUser(userName) {
        $scope.$emit('logInEvent', userName);
    }
});