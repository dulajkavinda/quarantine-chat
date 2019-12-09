import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

let button = width * 0.84;

export default styles = StyleSheet.create({
  card: {
    width: 90 + "%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 100,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7
  },
  cardItem: {
    height: 60,
    borderTopLeftRadius: 500
  },
  thumbnail: {
    marginLeft: -12
  },
  thumbIcon: {
    paddingRight: 10
  },
  cardItemBody: {
    backgroundColor: "#FDFF54",
    height: 180
  },
  cardText: {
    margin: 18,
    fontSize: 20,
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
  }
});
