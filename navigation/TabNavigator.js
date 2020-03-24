import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

// importing icons
import { Ionicons } from "@expo/vector-icons";

// importing screens to the tab navogator
import {
  HomeNavigator,
  WriteNavigator,
  InboxNavigator,
  MapNavigator,
  ChatNavigator
} from "./StackNavigator";
const TabNavigator = createBottomTabNavigator(
  {
    Write: {
      screen: ChatNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-chatbubbles" : "ios-chatboxes"}
            size={32}
            color="black"
          />
        ),
        tabBarLabel: " "
      }
    },
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "md-person" : "md-person"}
            size={32}
            color="black"
          />
        ),
        tabBarLabel: " "
      }
    },
    Map: {
      screen: MapNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "md-stats" : "md-stats"}
            size={32}
            color="black"
          />
        ),
        tabBarLabel: " "
      }
    },
    AboutUs: {
      screen: InboxNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={
              focused
                ? "ios-information-circle-outline"
                : "ios-information-circle"
            }
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
