import React from "react";
import { Text, View, Image, Linking, Button } from "react-native";
// importing styles
import styles from "../styles/styles";

import { Icon } from "native-base";

class Inbox extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F0F0F0",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image style={styles.logo} source={require("../assets/boxlov.png")} />
        <Button
          onPress={() =>
            Linking.openURL(
              "mailto:boxlovcorp@gmail.com?subject=Quarantine Chat App"
            )
          }
          title="💌boxlovcorp@gmail.com💌"
        />
      </View>
    );
  }
}

export default Inbox;
