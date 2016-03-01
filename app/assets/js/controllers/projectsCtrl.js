angular.module("portfolio", []).controller("projectsCtrl", function($scope, $filter, $http){
  
  $scope.title = "projects";

  $scope.projects = projectsJson;

  $scope.showProject = function(projectSlug, $event){
    var project = $filter('filter')($scope.projects, {slug: projectSlug}, true);
    
    $scope.projectDetail = project[0];
    
    Portfolio.openProjects($event.target, project[0].images);
  }
  
});