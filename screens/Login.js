import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

// importing styles
import styles from "../styles/styles";
import loginStyles from "../styles/loginStyles";

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

        <View style={loginStyles.auth}>
          <TouchableOpacity>
            <Image
              source={require("../assets/logos/fb.png")}
              style={loginStyles.fb}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../assets/logos/phone.png")}
              style={loginStyles.phone}
            />
          </TouchableOpacity>
        </View>
        <View style={loginStyles.footer}>
          <Text style={loginStyles.bottomText}>
            By signing up you agree to the terms of service and the privacy
            policy.
          </Text>
        </View>
      </View>
    );
  }
}

export default Login;
