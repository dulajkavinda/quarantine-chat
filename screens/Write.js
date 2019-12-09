import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

// importing styles
import styles from "../styles/writeStyles";
import { Card, CardItem, Icon, Button } from "native-base";

class Write extends React.Component {
  static navigationOptions = {
    headerLeft: <Icon name="information-circle" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon style={{ paddingRight: 10 }} name="contact" />
  };
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <CardItem style={styles.cardItemBody} cardBody>
            <Text style={styles.cardText}>
              Hey can you tell me what is the best place to go on a holidayfor 1
              week ? 😍😂☺️😊😘😘
            </Text>
          </CardItem>
        </Card>
        <Text style={styles.bottomText}>
          Tap the sticker to edit youe message
        </Text>
        <View style={styles.buttonView}>
          <Button rounded style={styles.buttonShare}>
            <Text style={styles.cardButtonText}>SHARE</Text>
          </Button>
        </View>
        <View style={styles.tabButton}>
          <TouchableOpacity style={styles.tabIcons}>
            <Image
              style={styles.imagestyle}
              source={require("../assets/dice.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabIcons}>
            <Image
              style={styles.imagestyle}
              source={require("../assets/color.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabIcons}>
            <Image
              style={styles.imagestyle}
              source={require("../assets/alp.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Write;
