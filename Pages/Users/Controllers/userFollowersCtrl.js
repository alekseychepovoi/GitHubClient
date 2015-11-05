angular.module('GitHubClient.Users').controller('UserFollowersCtrl', function ($scope, UserDataSvc, initData, isFollowers) {
    $scope.isFollowers = isFollowers;
    $scope.userFollowers = initData;

    $scope.setActiveFollower = setActiveFollower;


    // initial setup
    if($scope.userFollowers.length !== 0) {
        setActiveFollower($scope.userFollowers[0]);
    }


    function setActiveFollower(activeFollower) {
        $scope.userFollowers.forEach(function (follower) {
            follower.isActive = false;
        });
        activeFollower.isActive = true;
        $scope.activeFollower = activeFollower;
        if(!activeFollower.allRepositories) {
            loadUserRepos(activeFollower);
        }
    }

    function loadUserRepos(user) {
        UserDataSvc.getUserRepositories(user.login).then(function (data) {
            user.allRepositories = data;
        });
    }
});