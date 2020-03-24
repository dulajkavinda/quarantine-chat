import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert
} from "react-native";
import { Tooltip } from "react-native-elements";
class Main extends React.Component {
  state = {
    name: ""
  };

  onPress = () => {
    if (this.state.name.trim().length < 3) {
      Alert.alert("Alert", "Username must be minimum 3 characters");
      return;
    } else {
      this.props.navigation.navigate("Chat", { name: this.state.name });
    }
  };

  onChangeText = name => this.setState({ name });

  render() {
    return (
      // <View>
      //   <Text style={styles.title}>Enter your name:</Text>
      //   <TextInput
      //     style={styles.nameInput}
      //     placeHolder="Flutter God Evan Bacon"
      //     onChangeText={this.onChangeText}
      //     value={this.state.name}
      //   />
      //   <TouchableOpacity onPress={this.onPress}>
      //     <Text style={styles.buttonText}>Next</Text>
      //   </TouchableOpacity>
      // </View>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/mainlogo.png")} />
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="ඔයාගේ නම..."
            placeholderTextColor="white"
            onChangeText={this.onChangeText}
            value={this.state.name}
          />
        </View>
        <TouchableOpacity onPress={this.onPress} style={styles.loginBtn}>
          <Text style={styles.loginText}>NEXT</Text>
        </TouchableOpacity>
        <View style={{ marginHorizontal: 10, marginTop: 20 }}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            කම්මැලීද😭.ඔයාගේ නම දාල next කරල chat එකට set වෙන්න.❤️
          </Text>
        </View>

        <View style={{ margin: 10, marginTop: 50 }}>
          <Text style={{ textAlign: "center", color: "gray", fontSize: 15 }}>
            "Quarantiningචැට්" is a free online chat app for people in Sri
            Lanka. It helps you meet new people, and make new friends. Hope this
            will help you beat quarantine boredom.
          </Text>
        </View>
      </View>
    );
  }
}

const offset = 24;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  logo: {
    height: 200,
    width: 300,
    marginBottom: 15,
    marginTop: 10
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginTop: -30,
    marginBottom: 10,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white",
    fontSize: 20
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600"
  }
});

export default Main;
