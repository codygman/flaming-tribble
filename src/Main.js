/* global exports */
"use strict";

// module Main

// var page = require('webpage').create();
// page.open('http://example.com', function(status) {
exports.createPage = require('webpage').create()

exports.getPageSettings = function(page) { return page.settings; };

