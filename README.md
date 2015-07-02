An attempt to explore making phantomjs bindings for purescript.

I'm currently just trying to figure out simulate this snippet of code from phantomjs:


```javascript
var page = require('webpage').create();
console.log(page.settings);
```

`require('webpage').create()` resolves to:

```javascript
exports.create = function (opts) {
    return decorateNewPage(opts, phantom.createWebPage());
};
```

See the definition of [decorateNewPage](https://github.com/ariya/phantomjs/blob/master/src/modules/webpage.js#L225).
