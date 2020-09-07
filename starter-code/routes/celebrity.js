const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req,res,next) => {
    Celebrity.find().then(celebrityFromDB => {
      console.log(celebrityFromDB)
      res.render('celebrities', { celebrityList:celebrityFromDB})
    })
    .catch(error => {
        next(error)
    })
  });

  router.get('/celebrities/:id', (req,res,next) => {
    const id = req.params.id;
    Celebrity.findById(id).then(celebrityFromDB => {
      console.log(celebrityFromDB)
      res.render('celebrityDeets', { celebrity: celebrityFromDB})
    })
    .catch(error => {
        next(error)
    })
  });

module.exports = router;