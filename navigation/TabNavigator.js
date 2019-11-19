import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

// importing icons
import { Ionicons } from "@expo/vector-icons";

// importing screens to the tab navogator
import Home from "../screens/Home";
import Inbox from "../screens/Inbox";
import Write from "../screens/Write";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-home" : "ios-home"}
            size={32}
            color="black"
          />
        ),
        tabBarLabel: " "
      }
    },
    Write: {
      screen: Write,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "md-open" : "md-open"}
            size={32}
            color="black"
          />
        ),
        tabBarLabel: " "
      }
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-notifications" : "ios-notifications"}
            size={32}
            color="black"
          />
        ),
        tabBarLabel: " "
      }
    }
  },
  {
    tabBarOptions: { showLabel: false }
  }
);

export default createAppContainer(TabNavigator);
