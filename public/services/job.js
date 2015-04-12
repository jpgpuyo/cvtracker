angular.module('MyApp')
  .factory('Job', ['$resource', function($resource) {
    var Job = $resource('/api/jobs/:_id');
    
    Job.alltechnologies = function(){
      return ['Java', 'Smallworld'];
    }
    
    return Job;
  }]);