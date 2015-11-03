angular.module('GitHubClient.Common').factory('LoginSvc', function ($location) {
    return {
        logInUser: logInUser,
        logOutUser: logOutUser
    };

    function logInUser(newUserName) {
        $location.path('users/' + newUserName);
    }

    function logOutUser() {

        return 'home'; // return a link to home page
    }
});