import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

// importing styles
import styles from "../styles/writeStyles";
import { Icon } from "native-base";

import { changeColor } from "../actions/write";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import sl from "./sl.json";

class Write extends React.Component {
  static navigationOptions = {
    headerLeft: <Icon name="information-circle" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon style={{ paddingRight: 10 }} name="contact" />
  };

  render() {
    return (
      <View>
        <Text>Hello</Text>
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
