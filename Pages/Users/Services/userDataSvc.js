angular.module('GitHubClient.Users').factory('UserDataSvc', function ($http) {
    var rootApi = 'https://api.github.com/users/';

    return {
        getUserProfile: getUserProfile,
        getUserFollowers: getUserFollowers,
        getUserFollowing: getUserFollowing,
        getUserRepositories: getUserRepositories
    };

    function getUserProfile(userName) {
        return $http.get(rootApi + userName)
            .then($http.getDataFromResult);
    }

    function getUserFollowers (userName) {
        return $http.get(rootApi + userName + '/followers')
            .then(function (res) {
                _formatUserFollowers(res.data);
                return res.data;
            });
    }

    function getUserFollowing (userName) {
        return $http.get(rootApi + userName + '/following')
            .then(function (res) {
                _formatUserFollowers(res.data);
                return res.data;
            });
    }

    function getUserRepositories (userName) {
        return $http.get(rootApi + userName + '/repos')
            .then($http.getDataFromResult);
    }


    // Private functions
    function _formatUserFollowers(followers) {
        followers.forEach(function (follower) {
            follower.isActive = false;
        });
    }
});