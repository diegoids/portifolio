angular.module("portfolio", []).controller("projectsCtrl", function($scope, $filter){
  
  $scope.title = "projects";

  $scope.projects = [
    {
      slug       : "portfolio",
      title      : "Diego Neitzel Portfolio",
      url        : "http://www.diegoids.com",
      tags       : ["HTML5", "CSS3", "SASS", "Bootstrap", "Javascript", "Jquery", "AngularJS", "GulpJS", "Ajax", "GIT", "Responsive", "SEO", "CrossBrowser"],
      info       : "My portfolio completely made by me",
      client     : "Diego Neitzel",
      images     : [
        "app/assets/img/img_cover03.jpg"
      ]
    },
    {
      slug       : "netshoes",
      title      : "Netshoes",
      url        : "http://www.netshoes.com.br",
      tags       : ["HTML5", "CSS3", "SASS", "Bootstrap", "Javascript", "Jquery", "AngularJS", "GulpJS", "Ajax", "RestFull API", "GIT", "Responsive", "Adaptative", "SEO", "CrossBrowser", "Scrum Methodology", "Integration with JAVA"],
      info       : "The Biggest sport's ecommerce in Brazil.",
      client     : "Netshoes @ F.Biz Agency",
      images     : [
        "app/assets/img/img_cover01.jpg",
        "app/assets/img/img_cover02.jpg",
        "app/assets/img/img_cover03.jpg",
        "app/assets/img/img_cover04.jpg"
      ]
    },
    {
      slug       : "vejasp",
      title      : "VejaSP",
      url        : "http://vejasp.abril.com.br",
      tags       : ["HTML5", "CSS3", "SASS", "Bootstrap", "Javascript", "Jquery", "GruntJS", "Ajax", "RestFull API", "GIT", "Responsive", "Adaptative", "SEO", "CrossBrowser", "Scrum Methodology", "Integration with Ruby on Rails and NodeJS"],
      info       : "Website about VejaSP Magazine",
      client     : "VejaSP @ Editora Abril",
      images     : [
        "app/assets/img/img_cover02.jpg",
        "app/assets/img/img_cover01.jpg",
        "app/assets/img/img_cover03.jpg",
        "app/assets/img/img_cover04.jpg"
      ]
    }
  ];

  $scope.showProject = function(projectSlug, $event){
    var project = $filter('filter')($scope.projects, {slug: projectSlug}, true);
    
    $scope.projectDetail = project[0];
    
    Portfolio.openProjects($event.target, ['ola1', 'ola2', 'ola3']);
  }
  
});