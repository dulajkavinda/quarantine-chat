import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Text, View, Image } from "react-native";
// importing screens to the tab navogator
import HomeScreen from "../screens/Home";
import WriteScreen from "../screens/Write";
import InboxScreen from "../screens/Inbox";
import MapScreen from "../screens/Map";
import ChatScreen from "../screens/Chat";
import MainScreen from "../screens/Main";

export const HomeNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: (
          <Image
            style={{
              width: 90,
              height: 40,
              marginRight: "auto",
              marginLeft: "auto"
            }}
            source={require("../assets/logos/logo.png")}
          />
        ),
        title: "Home"
      }
    }
  })
);

export const ChatNavigator = createAppContainer(
  createStackNavigator({
    Main: {
      screen: MainScreen,
      navigationOptions: {
        headerTitle: (
          <Image
            style={{
              width: 90,
              height: 40,
              marginRight: "auto",
              marginLeft: "auto"
            }}
            source={require("../assets/logos/logo.png")}
          />
        ),
        title: "Home"
      }
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        headerTitle: (
          <Image
            style={{
              width: 90,
              height: 40,
              marginRight: "auto",
              marginLeft: "auto"
            }}
            source={require("../assets/logos/logo.png")}
          />
        ),
        title: "Home"
      }
    }
  })
);

export const WriteNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: WriteScreen,
      navigationOptions: {
        headerTitle: (
          <Image
            style={{
              width: 90,
              height: 40,
              marginRight: "auto",
              marginLeft: "auto"
            }}
            source={require("../assets/logos/logo.png")}
          />
        ),
        title: "Home"
      }
    }
  })
);

export const MapNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: MapScreen,
      navigationOptions: {
        headerTitle: (
          <Image
            style={{
              width: 90,
              height: 40,
              marginRight: "auto",
              marginLeft: "auto"
            }}
            source={require("../assets/logos/logo.png")}
          />
        ),
        title: "Map"
      }
    }
  })
);

export const InboxNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: InboxScreen,
      navigationOptions: {
        headerTitle: (
          <Image
            style={{
              width: 90,
              height: 40,
              marginRight: "auto",
              marginLeft: "auto"
            }}
            source={require("../assets/logos/logo.png")}
          />
        ),
        title: "Home"
      }
    }
  })
);

// This does the trick
ChatNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "Chat") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible
  };
};
