import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import firebase from "firebase/app";
import "firebase/auth";

import { getUserData } from "./redux/actions/LoginActions";

import LoginScreen from "./screens/login/LoginScreen";
import SignupScreen from "./screens/signup/SignupScreen";
import EmailVerificationScreen from "./screens/signup/EmailVerificationScreen";

import OffersScreen from "./screens/main/OffersScreen";
import CustomFoodScreen from "./screens/main/CustomFoodScreen";
import BookingScreen from "./screens/main/BookingScreen";
import MessagesScreen from "./screens/main/MessagesScreen";
import NotificationsScreen from "./screens/main/NotificationsScreen";
import FoodMenuScreen from "./screens/main/FoodMenuScreen";

import PaymentScreen from "./screens/dropdown/PaymentScreen";

import * as routes from "./constants/routes";
import { LoadingScreen } from "./components/loading/LoadingScreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingScreen: true,
      user: null
    };
  }

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        loadingScreen: false,
        user: user
      });
      if (user) {
        this.props.user(user);
      }
    });
  };

  componentDidMount = () => {};

  render() {
    if (!this.state.loadingScreen) {
      return (
        <div className="App">
          <Switch>
            <Route
              exact
              path={routes.RESTURANT_LOGIN}
              component={LoginScreen}
            />
            <Route path={routes.RESTURANT_SIGNUP} component={SignupScreen} />
            <Route
              path={routes.RESTURANT_EMAIL_VERIFICATION}
              component={EmailVerificationScreen}
            />

            <Route path={routes.RESTURANT_OFFERS} component={OffersScreen} />
            <Route path={routes.RESTURANT_FOOD} component={CustomFoodScreen} />
            <Route path={routes.RESTURANT_BOOKING} component={BookingScreen} />
            <Route
              path={routes.RESTURANT_MESSAGING}
              component={MessagesScreen}
            />
            <Route
              path={routes.RESTURANT_NOTIFICATIONS}
              component={NotificationsScreen}
            />
            <Route
              path={routes.RESTURANT_FOODMENU}
              component={FoodMenuScreen}
            />

            <Route path={routes.RESTURANT_PAYMENT} component={PaymentScreen} />
          </Switch>
        </div>
      );
    } else {
      return <LoadingScreen />;
    }
  }
}

const mapDispatchToProps = {
  user: getUserData
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
