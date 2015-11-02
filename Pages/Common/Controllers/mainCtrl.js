angular.module('GitHubClient.Common').controller('MainCtrl', function ($scope, LoginSvc) {
    $scope.navLinks = [
        {
            name: 'home',
            text: 'Home',
            url: '/',
            isActive: true,
            isDisplayedForNotLoggedInUser: true
        },
        {
            name: 'profile',
            text: 'Profile',
            url: '/users/' + $scope.user.userName
        },
        {
            name: 'followers',
            text: 'Followers',
            url: '/users/' + $scope.user.userName + '/followers'
        },
        {
            name: 'following',
            text: 'Following',
            url: '/users/' + $scope.user.userName + '/following'
        },
        {
            name: 'logOut',
            text: 'Log out',
            url: '/',
            floatRight: true
        }
    ];
    $scope.ucPopupIsActive = false;
    $scope.user = LoginSvc.user;


    $scope.setActiveLink = setActiveLink;
    $scope.showUCPopup = showUnderConstructionPopup;
    $scope.hideUCPopup = hideUnderConstructionPopup;


    function setActiveLink(linkName) {
        if(linkName === 'logOut') {
            linkName = LoginSvc.logOutUser();
        }
        $scope.navLinks.forEach(function (navLink) {
            navLink.isActive = navLink.name === linkName;
        });
    }

    function showUnderConstructionPopup() {
        $scope.ucPopupIsActive = true;
    }

    function hideUnderConstructionPopup() {
        $scope.ucPopupIsActive = false;
    }
});