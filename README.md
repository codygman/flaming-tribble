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

To try out running it, do this:

```shell
npm install -g phantomjs
npm install
node phantom-node-target-code.js 
```

here's an example (yours should look very similar):

```shell
$ npm install -g phantomjs
/\/\/\/\/\/\/\/\/\/\/\/\/\/\ loading bar /\/\/\/\/\/\/\/\/\/\/\/\/\/\
/home/cody/.nvm/versions/node/v0.12.5/bin/phantomjs -> /home/cody/.nvm/versions/node/v0.12.5/lib/node_modules/phantomjs/bin/phantomjs

> phantomjs@1.9.17 install /home/cody/.nvm/versions/node/v0.12.5/lib/node_modules/phantomjs
> node install.js

Looks like an `npm install -g`; unable to check for already installed version.
Download already available at /tmp/phantomjs/phantomjs-1.9.8-linux-x86_64.tar.bz2
Extracting tar contents (via spawned process)
Removing /home/cody/.nvm/versions/node/v0.12.5/lib/node_modules/phantomjs/lib/phantom
Copying extracted folder /tmp/phantomjs/phantomjs-1.9.8-linux-x86_64.tar.bz2-extract-1435818993139/phantomjs-1.9.8-linux-x86_64 -> /home/cody/.nvm/versions/node/v0.12.5/lib/node_modules/phantomjs/lib/phantom
Writing location.js file
Done. Phantomjs binary available at /home/cody/.nvm/versions/node/v0.12.5/lib/node_modules/phantomjs/lib/phantom/bin/phantomjs
npm WARN unmet dependency /home/cody/.nvm/versions/node/v0.12.5/lib/node_modules/grunt/node_modules/js-yaml/node_modules/argparse requires underscore.string@'~2.4.0' but will load
npm WARN unmet dependency /home/cody/.nvm/versions/node/v0.12.5/lib/node_modules/grunt/node_modules/underscore.string,
npm WARN unmet dependency which is version 2.2.1
phantomjs@1.9.17 /home/cody/.nvm/versions/node/v0.12.5/lib/node_modules/phantomjs
├── which@1.0.9
├── progress@1.1.8
├── kew@0.4.0
├── adm-zip@0.4.4
├── request-progress@0.3.1 (throttleit@0.0.2)
├── npmconf@2.1.1 (uid-number@0.0.5, ini@1.3.4, inherits@2.0.1, once@1.3.2, nopt@3.0.3, osenv@0.1.3, config-chain@1.1.9, semver@4.3.6, mkdirp@0.5.1)
├── request@2.42.0 (caseless@0.6.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.4, oauth-sign@0.4.0, tunnel-agent@0.4.0, json-stringify-safe@5.0.1, qs@1.2.2, node-uuid@1.4.3, mime-types@1.0.2, form-data@0.1.4, http-signature@0.10.1, bl@0.9.4, tough-cookie@2.0.0, hawk@1.1.1)
└── fs-extra@0.18.4 (jsonfile@2.2.1, graceful-fs@3.0.8, rimraf@2.4.1)
$ npm install
 
> weak@0.4.1 install /home/cody/programming/purescript/purescript-phantomjs/node_modules/phantom/node_modules/dnode/node_modules/weak
> node-gyp rebuild

/[0G-[0Gmake: Entering directory '/home/cody/programming/purescript/purescript-phantomjs/node_modules/phantom/node_modules/dnode/node_modules/weak/build'
  CXX(target) Release/obj.target/weakref/src/weakref.o
  SOLINK_MODULE(target) Release/obj.target/weakref.node
  COPY Release/weakref.node
make: Leaving directory '/home/cody/programming/purescript/purescript-phantomjs/node_modules/phantom/node_modules/dnode/node_modules/weak/build'
phantom@0.7.2 node_modules/phantom
├── win-spawn@2.0.0
├── traverse@0.6.6
├── shoe@0.0.15 (sockjs@0.3.7)
└── dnode@1.2.1 (jsonify@0.0.0, dnode-protocol@0.2.2, weak@0.4.1)
$ node phantom-node-target-code.js 
opened google?  success
Page title is Google
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
