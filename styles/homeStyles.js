import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

let button = width * 0.84;
export default styles = StyleSheet.create({
  topstats: {
    backgroundColor: "#F2FAEF",
    width: 118,
    height: 100,
    margin: "1%",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    justifyContent: "center",
    alignItems: "center"
  },
  topstatsC: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row"
  },
  body: {
    top: 115
  },
  bodystats: {
    borderRadius: 10,
    borderWidth: 1.5,
    margin: "2%",
    borderColor: "#d6d7da",
    height: 52,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80
  }
});
