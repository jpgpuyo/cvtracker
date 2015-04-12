angular.module('MyApp')
  .controller('AddCtrl', ['$scope', '$alert', 'Job', function($scope, $alert, Job) {
    
    $scope.technologies = Job.alltechnologies();
    
    $scope.addJob = function() {
      Job.save({
                enterprise: $scope.enterprise,
                category: $scope.category,
                technology: $scope.technology
        },
        function() {
          $scope.jobCategory = '';
          $scope.addForm.$setPristine();
          $alert({
            content: 'Job has been added.',
            placement: 'top-right',
            type: 'success',
            duration: 3
          });
        },
        function(response) {
          $scope.jobCategory = '';
          $scope.addForm.$setPristine();
          $alert({
            content: response.data.message,
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        });
    };
  }]);