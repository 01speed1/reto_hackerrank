import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect, Provider } from "react-redux";
import { PrivateRoute } from "./PrivateRoute.js";
import { history } from "./helpers";
import { alertActions } from "./actions";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";

import store from "./helpers/store";

export class App extends React.Component {
  constructor(props) {
    super(props);

    // const { dispatch } = this.props;
    // history.listen((location, action) => {});
  }

  render() {
    // const { alert } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />

            <Switch>
              <PrivateRoute exact path='/' component={HomePage} />
              {/* <Route path='*' render={() => <Redirect to='/login' />} /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

// <Route path='*' render={() => <Redirect to='/login' />} />
