#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var marker = require('supermarked');

//read styles and math script
var css = fs.readFileSync(__dirname + '/../lib/style.css', "utf8");

//read input file
var input_filename = process.argv[2]
var input_file = fs.readFileSync(input_filename, "utf8");

//construct html file
var html = '<style>' + css + '</style>';
html += '<meta charset=utf-8>';
html += '<article>' + marker(input_file, {tables: true}) + '</article>';

//write temporary file
var tmpDirectory = process.env.TEMP || process.env.TMPDIR || process.env.TMP || '/tmp';
var target_file = tmpDirectory+'/'+path.basename(input_filename, '.md')+'.html';
fs.writeFile(target_file, html, function(err) {
  if(err) {
    console.log(err);
    return;
  }
  //open it in the browser
  var cmd = "xdg-open ";
  if(process.platform === 'darwin'){
    cmd = "open ";
  }
  exec(cmd+target_file, function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}); 
  

