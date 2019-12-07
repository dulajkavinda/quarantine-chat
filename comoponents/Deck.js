import React from "react";
import { Text, View, Image } from "react-native";

// importing styles
import styles from "../styles/homeStyles";

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
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
const cards = [
  {
    text:
      "Hey can you tell me what is the best place to go on a holidayfor 1 week ? 😍😂☺️😊😘😘 ",
    name: "Dulaj Kavinda"
  },
  {
    text: "How to swim ? 😘😘",
    name: "Amash Perera"
  },
  {
    text: "Hwere to go ? 😘",
    name: "Kasun Dilshan"
  }
];

class Deck extends React.Component {
  render() {
    return (
      <View>
        <DeckSwiper
          dataSource={cards}
          renderItem={item => (
            <Card style={styles.card}>
              <CardItem style={styles.cardItem}>
                <Left>
                  <Thumbnail
                    style={styles.thumbnail}
                    source={require("../assets/person.png")}
                  />
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note>12 min ago</Text>
                  </Body>
                </Left>
                <Right>
                  <Ionicons
                    size={25}
                    style={styles.thumbIcon}
                    name="ios-more"
                  />
                </Right>
              </CardItem>
              <CardItem style={styles.cardItemBody} cardBody>
                <Text style={styles.cardText}>{item.text}</Text>
              </CardItem>
              <CardItem style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Reply</Text>
              </CardItem>
            </Card>
          )}
        />
      </View>
    );
  }
}

export default Deck;
