var express = require('express');
var router = express.Router();
var xml2js = require('xml2js');
var async = require('async');
var request = require('request');
var _ = require('lodash');
var Job = require('../models/job');

router.route('/jobs')
  .get(function(req, res, next) {
    var query = Job.find();
    if (req.query.technology) {
      query.where({ technology: req.query.technology });
    } else if (req.query.alphabet) {
      query.where({ category: new RegExp('^' + '[' + req.query.alphabet + ']', 'i') });
    } else {
      query.limit(12);
    }
    query.exec(function(err, jobs) {
      if (err) return next(err);
      res.send(jobs);
    })
  })
  
  .post(function(req, res, next) {
    var job = new Job({
        enterprise: req.body.enterprise,
        category: req.body.category,
        technology: req.body.technology
    });
    
    job.save(function(err) {
      if (err) return next(err);
      res.send(200);
    });
  });

router.route('/jobs/:id')
  .get(function(req, res, next) {
    Job.findById(req.params.id, function(err, job) {
      if (err) return next(err);
      res.send(job);
    });
  });

module.exports = router;