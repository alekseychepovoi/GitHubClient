angular.module('GitHubClient.Users').filter('hasIssuesFilter', function() {
    return function(repos, isApplied) {
        var filteredRepos = [];

        if(!isApplied) {
            return repos;
        }

        repos.forEach(function (repo) {
            if(repo.has_issues) {
                filteredRepos.push(repo);
            }
        });
        return filteredRepos;
    };
});