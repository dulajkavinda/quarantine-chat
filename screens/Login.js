import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

// importing styles
import styles from "../styles";

// importing icons
import { Ionicons } from "@expo/vector-icons";

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/logos/logo.png")}
          style={styles.logo}
        />

        <View style={styles.auth}>
          <TouchableOpacity>
            <Image
              source={require("../assets/logos/fb.png")}
              style={styles.fb}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../assets/logos/phone.png")}
              style={styles.phone}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
