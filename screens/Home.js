import React from "react";
import { Text, View, Image } from "react-native";

// importing styles
import styles from "../styles/styles";

import { Icon } from "native-base";

class Home extends React.Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon style={{ paddingRight: 10 }} name="ios-send-outline" />
  };

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image
            source={require("../assets/logos/logo.png")}
            style={styles.headerlogo}
          />
        </View>
      </View>
    );
  }
}

export default Home;
