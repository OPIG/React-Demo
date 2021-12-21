"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = require("http");
var browserify = require("browserify");
var literalify = require("literalify");
var React = require("react");
var ReactDOMServer = require("react-dom/server");

http.createServer(function (req, res) {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    var props = {
      items: ["Item server-0", "Item server-1"]
    };

    //TODO
    var html = ReactDOMServer.renderToStaticMarkup(React.createElement(
      "body",
      null,
      React.createElement("div", {
        id: "app",
        dangerouslySetInnerHTML: {
          __html: ReactDOMServer.renderToString(React.createElement(_app2.default, { items: props.items }))
        }
      }),
      React.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "var APP_PROPS = " + JSON.stringify(props) + ";"
        }
      }),
      React.createElement("script", { src: "https://cdn.jsdelivr.net/npm/react@16.7.0/umd/react.production.min.js" }),
      React.createElement("script", { src: "https://cdn.jsdelivr.net/npm/react-dom@16.7.0/umd/react-dom.production.min.js" }),
      React.createElement("script", { src: "/bundle.js" })
    ));

    res.end(html);
  } else if (req.url == "/bundle.js") {
    res.setHeader("Content-Type", "text/javascript");
    browserify().add("./dist/index.js").transform(literalify.configure({
      react: "window.React",
      "react-dom": "window.ReactDOM"
    })).bundle().pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
}).listen(3001, function (err) {
  if (err) return err;
  console.log("listening on 3001");
});