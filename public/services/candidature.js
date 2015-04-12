angular.module('MyApp')
  .factory('Candidature', ['$http', function($http) {
    return {
      takeJob: function(job, user) {
        return $http.post('/api/takeJob', { jobId: job._id });
      },
      discardJob: function(job, user) {
        return $http.post('/api/discardJob', { jobId: job._id });
      }
    };
  }]);