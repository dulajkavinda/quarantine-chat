import React from "react";
import { Text, View, Image } from "react-native";

// importing styles
import styles from "../styles/styles";

import { Icon } from "native-base";

import Deck from "../comoponents/Deck";

import {
  Container,
  Header,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body
} from "native-base";

const cards = [
  {
    text: "Card One",
    name: "One"
  },
  {
    text: "Card One",
    name: "two"
  },
  {
    text: "Card One",
    name: "three"
  }
];

class Home extends React.Component {
  static navigationOptions = {
    headerLeft: <Icon name="information-circle" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon style={{ paddingRight: 10 }} name="contact" />
  };

  render() {
    return (
      <View>
        <Deck></Deck>
      </View>
    );
  }
}

export default Home;
