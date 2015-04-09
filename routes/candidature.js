var express = require('express');
var router = express.Router();
var Job = require('../public/models/job')
var auth = require('../helpers/auth')

router.route('/takeJob')
  .post(auth.ensureAuthenticated, 
        function(req, res, next) {
          Job.findById(req.body.jobId, function(err, job) {
            
            if (err) return next(err);
            
            job.candidates.push(req.user.id);
            
            job.save(function(err) {
              if (err) return next(err);
              res.send(200);
            });
        });
  });
      
router.route('/discardJob')
  .post(auth.ensureAuthenticated, 
        function(req, res, next) {
          Job.findById(req.body.jobId, function(err, job) {
            if (err) return next(err);
          
            var index = job.candidates.indexOf(req.user.id);
            job.candidates.splice(index, 1);
          
            job.save(function(err) {
              if (err) return next(err);
              res.send(200);
            });
          });
  });

module.exports = router;
  
