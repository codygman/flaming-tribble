// var ph = require("phantom").create();
// console.log(ph);
// ph.exit();

var phantom = require('phantom');

phantom.create(function (ph) {
  ph.exit();
});
