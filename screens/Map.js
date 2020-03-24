import React from "react";
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Dimensions
} from "react-native";
// importing styles
import styles from "../styles/styles";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Separator
} from "native-base";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      district: null,

      linedata: {
        labels: null,
        datasets: [
          {
            data: null,
            strokeWidth: 0 // optional
          }
        ]
      }
    };
  }

  componentDidMount = () => {
    fetch("https://covid-19sl.s3-ap-northeast-1.amazonaws.com/data.json", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson
        });

        let x = this.state.data.prefectures.slice(1);
        this.setState({
          district: x
        });

        let y = this.state.data.daily;
        this.setState({
          daily: y
        });
        var merchants = [];
        var dates = [];
        this.state.daily.slice(5, 20).map((l, i) => {
          merchants.push(l.confirmed);
          dates.push(".");
        });

        this.setState({
          linedata: {
            labels: dates,
            datasets: [
              {
                data: merchants,
                strokeWidth: 2 // optional
              }
            ]
          }
        });
        console.log(this.state.linedata.datasets.data);
        console.log(this.state.linedata.labels);
        // getting the dates from the response
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (!this.state.data) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }

    if (!this.state.linedata.labels) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }

    if (!this.state.district) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }
    return (
      <View>
        <ListItem itemDivider>
          <Left>
            <Text style={{ fontWeight: "900", fontSize: 20 }}>
              දිස්ත්‍රික්ක​ය
            </Text>
          </Left>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 15, fontSize: 16, color: "#9C2C2A" }}>
              සක්‍රීය
            </Text>
            <Text style={{ marginRight: 15, fontSize: 16, color: "#3C888B" }}>
              සුවය
            </Text>
            <Text style={{ marginRight: 15, fontSize: 16, color: "#000001" }}>
              මරණ
            </Text>
          </View>
        </ListItem>

        <ScrollView style={{ height: "48%" }}>
          <List>
            {this.state.district.map((l, i) => (
              <ListItem key={l.prefecturesi}>
                <Left>
                  <Text style={{ fontWeight: "700", fontSize: 17 }}>
                    {l.prefecturesi}
                  </Text>
                </Left>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{ marginRight: 54, color: "#9C2C2A", fontSize: 19 }}
                  >
                    {l.cases}
                  </Text>
                  <Text
                    style={{ marginRight: 47, color: "#3C888B", fontSize: 19 }}
                  >
                    {l.recovered}
                  </Text>
                  <Text
                    style={{ marginRight: 21, color: "#000001", fontSize: 19 }}
                  >
                    {l.deaths}
                  </Text>
                </View>
              </ListItem>
            ))}
          </List>
        </ScrollView>
        <View>
          <View style={{ alignItems: "center" }}>
            <LineChart
              data={this.state.linedata}
              width={Dimensions.get("window").width - 10} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Map;
