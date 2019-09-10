import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import './index.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./stores/rootStore";
import Main from "./components/Main";

const App = () => (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
