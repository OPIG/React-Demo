
//from https://reactrouter.com/web/guides/quick-start
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/name/nameId`}>
            output name
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/child/childId`}>
            output child
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/name/:nameId`} component={Topic1}>
        </Route>
        <Route path={`${match.path}/child/:childId`} children={<Child />} />
        <Route path={`${match.path}/:topicId`}>
          <Topic2/>
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic1(props={}) {
  let name  = props.match.params.nameId
  return <h3>Requested name is: {name}--the url is different</h3>
}

function Topic2() {
  console.log(useParams())
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>
}

function Child(){
  let {childId} = useParams()
  return (
    <h3>this is child page- {childId}</h3>
  )
}