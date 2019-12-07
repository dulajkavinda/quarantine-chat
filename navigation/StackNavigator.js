import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Text, View, Image } from "react-native";
// importing screens to the tab navogator
import HomeScreen from "../screens/Home";

export const HomeNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: (
          <Image
            style={{
              width: 75,
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
