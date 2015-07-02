An attempt to explore making phantomjs-node bindings for purescript.

I'm currently just trying to figure out simulate this snippet of code from phantomjs-node:

```javascript
var phantom = require('phantom');

phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open("http://www.google.com", function (status) {
      console.log("opened google? ", status);
      page.evaluate(function () { return document.title; }, function (result) {
        console.log('Page title is ' + result);
        ph.exit();
      });
    });
  });
});
```

I'm currently trying to simulate phantom.create and so far have these foreign definitions:

```purescript
foreign import data PHANTOM :: !
foreign import createPhantom :: forall eff. Eff (x :: PHANTOM | eff) Unit
```

with this javascript definition:

```javascript
exports.createPhantom = function () { require("phantom").create(); };
```

However I don't think that will work since you must use whatever is (no really what is it, I can't figure [this function out](https://github.com/sgentle/phantomjs-node/blob/8fc711ee484c08416315544814224ade235a64b4/phantom.coffee#L41).. then again I have never read coffeescript before) returned by `phantom.create` and stored in the `ph` example from the first phantom-node example at the top of the page.
