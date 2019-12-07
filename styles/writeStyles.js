import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

let button = width * 0.84;

export default styles = StyleSheet.create({
  card: {
    elevation: 15,
    width: 90 + "%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 60,
    borderRadius: 19
  },
  cardItem: {
    height: 60,
    borderRadius: 19
  },
  thumbnail: {
    marginLeft: -12
  },
  thumbIcon: {
    paddingRight: 10
  },
  cardItemBody: {
    backgroundColor: "#FDFF54",
    height: 180,
    borderRadius: 19
  },
  cardText: {
    margin: 18,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center"
  },
  cardButton: {
    backgroundColor: "#485AA8",
    height: 60,
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  cardButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "900"
  },
  bottomText: {
    textAlign: "center",
    color: "#696161",
    fontWeight: "800",
    fontSize: 15,
    top: 10
  }
});
