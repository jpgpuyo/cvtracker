angular.module('MyApp')
  .controller('MainCtrl', ['$scope', 'Job', function($scope, Job) {

    $scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];

    $scope.technologies = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
      'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
      'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
      'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
      'Travel'];

    $scope.headingTitle = 'Top 12 Jobs';

    $scope.jobs = Job.query();

    $scope.filterByTechnology = function(technology) {
      $scope.jobs = Job.query({ technology: technology });
      $scope.headingTitle = technology;
    };

    $scope.filterByAlphabet = function(char) {
      $scope.jobs = Job.query({ alphabet: char });
      $scope.headingTitle = char;
    };
  }]);