var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mike', function(req, res, next) {
  res.render('mike', { title: 'Mike' });
});

router.get('/hannah', function(req, res, next) {
  res.send("Hannah is the git master");
});

module.exports = router;
