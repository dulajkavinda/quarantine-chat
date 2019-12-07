import React from "react";
import { Text, View } from "react-native";

// importing styles
import styles from "../styles/writeStyles";
import {
  Container,
  Header,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Icon,
  Right
} from "native-base";

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
      </View>
    );
  }
}

export default Write;
