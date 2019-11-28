### Notes_App ###

```
http-server
Running from the command line
In your project, run:

$ cd root/of/your-project/
$ npm install http-server --save
$ node node_modules/http-server/bin/http-server
Browse your project at the URL in the console output.

Running from your code (for example, in your tests)
This is useful when you need to serve a version of your project for your tests to run against.

$ cd root/of/your-project/
$ npm install http-server --save-dev
var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "path/from/current/dir/to/html/and/js/files");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);
```
