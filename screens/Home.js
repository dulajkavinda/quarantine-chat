import React from "react";
import { Text, View, Image } from "react-native";

// importing styles
import styles from "../styles/styles";

import { Icon } from "native-base";

class Home extends React.Component {
  static navigationOptions = {
    headerLeft: <Icon name="information-circle" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon style={{ paddingRight: 10 }} name="contact" />
  };

  render() {
    return <View></View>;
  }
}

export default Home;
