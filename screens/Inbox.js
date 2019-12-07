import React from "react";
import { Text, View } from "react-native";
// importing styles
import styles from "../styles/styles";

import { Icon } from "native-base";

class Inbox extends React.Component {
  static navigationOptions = {
    headerLeft: <Icon name="information-circle" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon style={{ paddingRight: 10 }} name="contact" />
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>About Us</Text>
      </View>
    );
  }
}

export default Inbox;
