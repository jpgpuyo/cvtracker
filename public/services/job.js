angular.module('MyApp')
  .factory('Job', ['$resource', function($resource) {
    return $resource('/api/jobs/:_id');
  }]);