const http = require("http");
const browserify = require("browserify");
const literalify = require("literalify");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

import App from "./app";
http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.setHeader("Content-Type", "text/html");
      var props = {
        items: ["Item server-0", "Item server-1"],
      };

      //TODO
      var html = ReactDOMServer.renderToStaticMarkup(
        <body>
          <div
            id="app"
            dangerouslySetInnerHTML={{
              __html: ReactDOMServer.renderToString(
                <App items={props.items} />
              ),
            }}
          ></div>
          <script
            dangerouslySetInnerHTML={{
              __html: "var APP_PROPS = " + JSON.stringify(props) + ";",
            }}
          />
          <script src="https://cdn.jsdelivr.net/npm/react@16.7.0/umd/react.production.min.js" />
          <script src="https://cdn.jsdelivr.net/npm/react-dom@16.7.0/umd/react-dom.production.min.js" />
          <script src="/bundle.js" />
        </body>
      );

      res.end(html);
    } else if (req.url == "/bundle.js") {
      res.setHeader("Content-Type", "text/javascript");
      browserify()
        .add("./dist/index.js")
        .transform(
          literalify.configure({
            react: "window.React",
            "react-dom": "window.ReactDOM",
          })
        )
        .bundle()
        .pipe(res);
    } else {
      res.statusCode = 404;
      res.end();
    }
  })
  .listen(3001, (err) => {
    if (err) return err;
    console.log("listening on 3001");
  });
