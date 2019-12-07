import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

// importing screens to the tab navogator
import TabNavigator from "../navigation/TabNavigator";
import AuthNavigator from "../navigation/AuthNavigator";

const SwitchNavigator = createSwitchNavigator(
  {
    Home: {
      screen: TabNavigator
    },
    Auth: {
      screen: AuthNavigator
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(SwitchNavigator);
