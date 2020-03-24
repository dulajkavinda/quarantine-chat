import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

let button = width * 0.84;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center"
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
  logo: {
    width: "50%",
    height: "20%",
    resizeMode: "stretch"
  },
  header: {
    width: 100 + "%",
    height: 55,
    top: 20,
    resizeMode: "stretch",
    backgroundColor: "rgb(249,250,251)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '"rgb(233,233,233)"',
    justifyContent: "center",
    alignItems: "center"
  },
  headerlogo: {
    width: "15%",
    height: "75%",
    resizeMode: "stretch"
  }
});
