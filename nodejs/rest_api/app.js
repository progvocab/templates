var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var interceptor = require('express-interceptor');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var products = require('./app.controller.js');
var app = express();
var finalParagraphInterceptor = interceptor(function(req, res){
  return {
    // Only HTML responses will be intercepted
    isInterceptable: function(){
      //return /text\/html/.test(res.get('Content-Type'));
	  return true ;
    },
    // Appends a paragraph at the end of the response body
    intercept: function(body, send) {
       console.log('intercept');
	//console.log(req.headers);
	console.log(res);
	//if(req.headers.test == 'test'){
		send(body);
		//console.log('success');
	//}else{
		//var resp ={ 'resp':  'fail'  };
		send(resp);
		//console.log('fail');
		//throw "fail";
	//}
      
    }
  };
});
app.use(cors() );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(finalParagraphInterceptor);
app.use(function (req, res, next) {
        //var name = req.originalMethod + req.originalUrl;
        //log.trace('Start MetroInfo for route : %s', name);
        //metro.startMetrologie(name);
      //  if(req.headers.test == 'test'){
			return next();
		//}else{
		//	res.send({ 'resp': 'fail' });
		//}
    });
app.use('/app', products);


app.listen(8082);

