/* global exports */
"use strict";

// module Main

exports.withPhantom = function (cb) {
  return function() {
    var phantom = require('phantom');
    phantom.create(function (ph) {
      if (ph !== undefined) {
	cb(ph);
      } else {
	throw "couldn't create phantom";
      }
    });
  }
};

exports.exitPhantom = function (ph) {
  return function() {
    console.log(ph);
    ph.exit();
  }
};

