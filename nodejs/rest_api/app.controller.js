var express = require('express');

var router = express.Router();

router.get('/test', function (req, res) {
//  var id = req.params.id;

//  Product.find({}, function (err, products) {
    console.log('controller')
//    if (err)
//      res.send(err);
//    console.log('res', products);
    res.send({ 'resp': 'pass'  });
 // });
});

module.exports = router;

