#!/usr/bin/env node

var fs = require('fs');
var marker = require('supermarked');

//read styles and math script
var css = fs.readFileSync(__dirname + '/../lib/style.css', "utf8");

//read input file
var input_filename = process.argv[2]
var input_file = fs.readFileSync(process.argv[2], "utf8");

//construct html file
var html = '<style>' + css + '</style>';
html += '<meta charset=utf-8>';
html += '<article>' + marker(input_file, {tables: true}) + '</article>';

//write file to stdout
console.log(html);  

