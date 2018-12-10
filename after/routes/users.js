var express = require('express');
var router = express.Router();
var query = require("../mysql/query");

/* GET users listing. */
router.get('/api/init', function(req, res, next) {
    console.log(req.query)
    query("select * from myaidou", function(err, results) {
        if (err) {
            res.send({ code: 0, data: err })
        } else {
            res.send({ code: 1, data: results });
        }
    })
});


module.exports = router;