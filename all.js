// Generated by psc-bundle 0.7.0.0
var PS = { };
(function(exports) {
  /* global exports */
  "use strict";

  // module Main

  exports.withPhantom = function (cb) {
    var phantom = require('phantom');
    phantom.create(function (ph) {
      if (ph !== undefined) {
        cb(ph);
      } else {
        throw "couldn't create phantom";
      }
    });
  };

  exports.exitPhantom = function (ph) {
    console.log(ph);
    ph.exit();
  };

 
})(PS["Main"] = PS["Main"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var $foreign = PS["Main"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];     
  var main = $foreign.withPhantom(function (ph) {
      return $foreign.exitPhantom(ph);
  });
  exports["main"] = main;
  exports["exitPhantom"] = $foreign.exitPhantom;
  exports["withPhantom"] = $foreign.withPhantom;;
 
})(PS["Main"] = PS["Main"] || {});

PS["Main"].main();