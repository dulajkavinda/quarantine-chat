import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

let fb = width * 0.84;
let phone = width * 0.8;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    width: 200,
    backgroundColor: "#475CA8"
  },
  border: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center"
  },

  fb: {
    height: 70,
    width: fb,
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5
  },
  phone: {
    height: 70,
    width: phone
  },
  auth: {
    marginTop: 100,
    alignItems: "center"
  },
  logo: {
    width: "40%",
    height: "10%",
    resizeMode: "stretch"
  }
});
