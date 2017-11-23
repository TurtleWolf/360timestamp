//basic reguired imports in Node
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

//Create an instance of express and instantiate
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
//GET call to return JSON, formats natural and unix date
app.get('/dateValues/:datefal1', function(req, res, next){
    //gets request data for date
    console.log('urlwokrsx');
    var datefal1 = req.params.datefal1;
    //options for formating date in natural date view
    var dateFormOptionz = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    if(isNaN(datefal1)){
        var naturalDayte = new Date(datefal1);
        naturalDayte = naturalDayte.toLocaleDateString("en-us", dateFormOptionz);
        var unifDate = new Date(datefal1).getTime()/1000;
    }
    else{
        var unifDate = datefal1;
        var naturalDayte = new Date(datefal1 *1000);
        naturalDayte = naturalDayte.toLocaleDateString("en-us", dateFormOptionz);
        
    }
    
    res.json({unif: unifDate, natural_Dayte: naturalDayte});
    return ;
});

//app listening
app.listen($PORT, function(){
    console.log("omg");
})