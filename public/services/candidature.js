angular.module('MyApp')
  .factory('Candidature', ['$http', function($http) {
    return {
      subscribe: function(job, user) {
        return $http.post('/api/takeJob', { jobId: job._id });
      },
      unsubscribe: function(job, user) {
        return $http.post('/api/discardJob', { jobId: job._id });
      }
    };
  }]);