import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

let button = width * 0.84;

export default styles = StyleSheet.create({
  fb: {
    height: 70,
    width: button,
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5
  },
  phone: {
    height: 70,
    width: button,
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5
  },
  auth: {
    marginTop: 100,
    alignItems: "center"
  },
  bottomText: {
    margin: 20,
    textAlign: "center"
  },
  footer: {
    position: "absolute",

    bottom: 10
  }
});
