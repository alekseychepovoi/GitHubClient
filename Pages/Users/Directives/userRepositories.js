angular.module('GitHubClient.Users')
    .directive('userRepositories', function($filter) {
        return {
            scope: {
                currentUser: '=user'
            },
            link: function(scope, element, attrs, ctrl) {
                scope.showAllRepos = showAllRepos;
                scope.showReposWithIssuesOnly = showReposWithIssuesOnly;

                showAllRepos();

                function showAllRepos () {
                    scope.isOnlyReposWithIssues = false;
                    scope.currentUser.filteredRepositories = scope.currentUser.allRepositories;
                }

                function showReposWithIssuesOnly() {
                    scope.isOnlyReposWithIssues = true;
                    scope.currentUser.filteredRepositories = $filter('hasIssuesFilter')(scope.currentUser.allRepositories, scope.isOnlyReposWithIssues);
                }
            },
            templateUrl: '/Pages/Users/Templates/DirectiveTmpls/userRepositories.html'
        };
    });