import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// importing screens to the tab navogator
import Login from "../screens/Login";
import OTP from "../screens/OTP";

const AuthNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  OTP: {
    screen: OTP
  }
});

export default createAppContainer(AuthNavigator);
