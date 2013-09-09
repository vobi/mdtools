#!/usr/bin/env node

var fs = require('fs');
var marker = require('supermarked');
var express = require('express');

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/../lib'));
});

app.get('/', function(req, res){
  var body = '<!DOCTYPE html><head> <meta charset=\'utf-8\' />' +
    '<script src="jquery.min.js"></script>' +
    '<script src="jquery.filedrop.js"></script>' +
    '<script src="dropping.js"></script>' +
    '</head>' + 
    '<form id="frm1" method="post" enctype="multipart/form-data">'+
    '<input type="file" name="mdfile" onchange="document.getElementById('+
      "'frm1'"+ ').submit();">'+
    '<input type="submit" value="render">'+
    '<p>or drop it</p>' +
    '</form>' +
    '<style>html{text-align:center;}</style>' +
    '<div style="padding-right: 100%;padding-bottom: 100%;"></div>'; 
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.post('/', function(req, res){
  res.setHeader('Content-Type', 'text/html');
  var html = "<link rel='stylesheet' href='style.css'>";
  html += '<meta charset=utf-8>';
  var markdown = marker(fs.readFileSync(req.files.mdfile.path,"utf8"), {tables: true})
  html += ("<article>"+markdown+"</article>");
  res.end(html);
});

var port = 3333;
if(process.argv[2] !== undefined){
  port = Number(process.argv[2]);
}
app.listen(port);
console.log('Listening on port ' + port);
