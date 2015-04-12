angular.module('MyApp')
  .controller('DetailCtrl', ['$scope', '$rootScope', '$routeParams', 'Job', 'Candidature',
    function($scope, $rootScope, $routeParams, Job, Candidature) {
      Job.get({ _id: $routeParams.id }, function(job) {
        $scope.job = job;

        $scope.isCandidate = function() {
          console.log("IS CANDIDATE")
          return $scope.job.candidates.indexOf($rootScope.currentUser._id) !== -1;
        };

        $scope.takeJob = function() {
          console.log("TAKE JOB")
          Candidature.takeJob(job).success(function() {
            $scope.job.candidates.push($rootScope.currentUser._id);
          });
        };

        $scope.discardJob = function() {
          Candidature.discardJob(job).success(function() {
            var index = $scope.job.candidates.indexOf($rootScope.currentUser._id);
            $scope.job.candidates.splice(index, 1);
          });
        };
      });
    }]);