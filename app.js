var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var query = req.query.s;
    var url= "http://omdbapi.com/?s="+query+"&apikey=thewdb"
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
           var parsedData = JSON.parse(body);
            res.render("results", {data: parsedData});
        }
    });
});

app.get("/info", function(req, res){
  var id = req.query.id;
  var url= "http://omdbapi.com/?i="+id+"&apikey=thewdb";
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render("info", {data: data});
    }
  });
});

app.get("*", function(req, res){
    res.render("notfound");
});
app.listen(3000, function(){
    console.log("Movie app has started");
});
