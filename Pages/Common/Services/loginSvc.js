angular.module('GitHubClient.Common').factory('LoginSvc', function ($location) {
    var user = {
            userName: ''
        };

    return {
        logInUser: logInUser,
        logOutUser: logOutUser,
        user: user
    };

    function logInUser(newUserName) {
        user.userName = newUserName;
        $location.path('users/' + newUserName);
    }

    function logOutUser() {
        user.userName = '';
        return 'home'; // redirect to home page
    }
});