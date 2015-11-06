(function () {
    angular
        .module('GitHubClient.Users')
        .controller('UserProfileCtrl', UserProfileCtrl);

    function UserProfileCtrl ($scope, initData) {
        $scope.user = initData;
    }
})();