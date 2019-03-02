var express = require('express');
var router = express.Router();
var moviesHandler = require('../modules/myMoviesModule')

/* GET home page. */
router.get('/allmovies', function(req, res, next) {

moviesHandler.getAllMovies().then(data=>{
  res.json(data)
})


});

module.exports = router;
