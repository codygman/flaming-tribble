// Generated by psc-bundle 0.7.0.0
var PS = { };
(function(exports) {
  /* global exports, console */
  "use strict";

  // module Control.Monad.Eff.Console

  exports.log = function (s) {
    return function () {
      console.log(s);
      return {};
    };
  };
 
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var $foreign = PS["Control.Monad.Eff.Console"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  exports["log"] = $foreign.log;;
 
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Main

  // var page = require('webpage').create();
  // page.open('http://example.com', function(status) {
  exports.createPage = require('webpage').create()

  exports.getPageSettings = function(page) { return page.settings; };

 
})(PS["Main"] = PS["Main"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var $foreign = PS["Main"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];     
  var main = function __do() {
      var _0 = $foreign.createPage();
      return (function () {
          var settings = $foreign.getPageSettings(_0);
          return Control_Monad_Eff_Console.log("Hello sailor!");
      })()();
  };
  exports["main"] = main;
  exports["getPageSettings"] = $foreign.getPageSettings;
  exports["createPage"] = $foreign.createPage;;
 
})(PS["Main"] = PS["Main"] || {});

PS["Main"].main();
