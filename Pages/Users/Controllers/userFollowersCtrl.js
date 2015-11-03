angular.module('GitHubClient.Users').controller('UserFollowersCtrl', function ($scope, UserDataSvc, initData, isFollowers) {
    $scope.isFollowers = isFollowers;
    $scope.userFollowers = initData;
    $scope.setActiveFollower = setActiveFollower;


    if($scope.userFollowers.length !== 0) {
        setActiveFollower($scope.userFollowers[0]);
    }

    function setActiveFollower(activeFollower) {
        $scope.userFollowers.forEach(function (follower) {
            follower.isActive = false;
        });
        activeFollower.isActive = true;
        $scope.activeFollower = activeFollower;
        if(!activeFollower.repositories) {
            loadUserRepos(activeFollower);
        }
    }

    function loadUserRepos(user) {
        UserDataSvc.getUserRepositories(user.login).then(function (data) {
            user.repositories = data;
            console.log(data);
        });
    }
});