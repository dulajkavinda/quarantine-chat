import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

// importing styles
import styles from "../styles/writeStyles";
import { Card, CardItem, Icon, Button } from "native-base";

import { changeColor } from "../actions/write";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

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
          <CardItem
            style={{
              backgroundColor: this.props.color.colorcode,
              height: 180,
              borderRadius: 19
            }}
            cardBody
          >
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
          <TouchableOpacity
            style={styles.tabIcons}
            onPress={() => this.props.changeColor()}
          >
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeColor }, dispatch);
};

const mapStateToProps = state => {
  return {
    color: state.write
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Write);
