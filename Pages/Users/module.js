angular.module('GitHubClient.Users', []).config(function($routeProvider) {
    $routeProvider
        .when('/users/:userName', {
            templateUrl: '/pages/users/templates/userProfile.html',
            controller: 'UserProfileCtrl',
            resolve: {
                initData: function (UserDataSvc, $route) {
                    return UserDataSvc.getUserProfile($route.current.params.userName);
                }
            }
        })
        .when('/users/:userName/followers', {
            templateUrl: '/pages/users/templates/userFollowers.html',
            controller: 'UserFollowersCtrl',
            resolve: {
                initData: function (UserDataSvc, $route) {
                    return UserDataSvc.getUserFollowers($route.current.params.userName);
                },
                isFollowers: function () {
                    return true;
                }
            }
        })
        .when('/users/:userName/following', {
            templateUrl: '/pages/users/templates/userFollowers.html',
            controller: 'UserFollowersCtrl',
            resolve: {
                initData: function (UserDataSvc, $route) {
                    return UserDataSvc.getUserFollowing($route.current.params.userName);
                },
                isFollowers: function () {
                    return false;
                }
            }
        });
});