import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

// importing icons
import { Ionicons } from "@expo/vector-icons";

// importing screens to the tab navogator
import {
  HomeNavigator,
  WriteNavigator,
  InboxNavigator
} from "./StackNavigator";
import Inbox from "../screens/Inbox";
import Write from "../screens/Write";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
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
      screen: WriteNavigator,
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
      screen: InboxNavigator,
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
