import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  RefreshControl
} from "react-native";

// importing styles
import styles from "../styles/styles";
import homeStyles from "../styles/homeStyles";
import { Tooltip } from "react-native-elements";
import { Icon } from "native-base";

import {
  Container,
  Header,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body
} from "native-base";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      data2: null,
      refreshing: false
    };
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    Promise.all([
      fetch("https://hpb.health.gov.lk/api/get-current-statistical"),
      fetch("https://covid-19sl.s3-ap-northeast-1.amazonaws.com/data.json")
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) =>
        this.setState({
          data: data1,
          data2: data2
        })
      )
      .then(this.setState({ refreshing: false }));
  };

  componentDidMount() {
    Promise.all([
      fetch("https://hpb.health.gov.lk/api/get-current-statistical"),
      fetch("https://covid-19sl.s3-ap-northeast-1.amazonaws.com/data.json")
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) =>
        this.setState({
          data: data1,
          data2: data2
        })
      );
  }

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

    if (!this.state.data2) {
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
        <View style={homeStyles.topstatsC}>
          <View style={homeStyles.topstats}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>ආසාදිතයි​න්</Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: "#565757",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {
                  this.state.data2.daily[this.state.data2.daily.length - 1]
                    .confirmed
                }
              </Text>

              {this.state.data2.daily[this.state.data2.daily.length - 1]
                .confirmed -
                this.state.data2.daily[this.state.data2.daily.length - 2]
                  .confirmed ==
              0 ? null : (
                <Text style={{ fontSize: 20, fontWeight: "300", color: "red" }}>
                  (+
                  {this.state.data2.daily[this.state.data2.daily.length - 1]
                    .confirmed -
                    this.state.data2.daily[this.state.data2.daily.length - 2]
                      .confirmed}
                  )
                </Text>
              )}
            </View>
          </View>
          <View style={homeStyles.topstats}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>සුවය ලැබූ</Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontSize: 20, fontWeight: "600", color: "#565757" }}
              >
                {
                  this.state.data2.daily[this.state.data2.daily.length - 1]
                    .recovered
                }
              </Text>
              {this.state.data2.daily[this.state.data2.daily.length - 1]
                .recovered -
                this.state.data2.daily[this.state.data2.daily.length - 2]
                  .recovered ==
              0 ? null : (
                <Text
                  style={{ fontSize: 20, fontWeight: "300", color: "green" }}
                >
                  (+
                  {this.state.data2.daily[this.state.data2.daily.length - 1]
                    .recovered -
                    this.state.data2.daily[this.state.data2.daily.length - 2]
                      .recovered}
                  )
                </Text>
              )}
            </View>
          </View>
          <View style={homeStyles.topstats}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>මරණ</Text>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#565757" }}>
              {
                this.state.data2.daily[this.state.data2.daily.length - 1]
                  .deceased
              }
            </Text>
            {this.state.data2.daily[this.state.data2.daily.length - 1]
              .deceased -
              this.state.data2.daily[this.state.data2.daily.length - 2]
                .deceased ==
            0 ? null : (
              <Text style={{ fontSize: 20, fontWeight: "300", color: "black" }}>
                (+
                {this.state.data2.daily[this.state.data2.daily.length - 1]
                  .deceased -
                  this.state.data2.daily[this.state.data2.daily.length - 2]
                    .deceased}
                )
              </Text>
            )}
          </View>
        </View>

        <View style={homeStyles.body}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "#545A5F" }}>
              Last Updated: {this.state.data2.updated[0].lastupdated}
            </Text>
          </View>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
          >
            <View style={homeStyles.bodystats}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                    backgroundColor: "#9C2C2A",
                    marginLeft: 15
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "black",
                    marginLeft: 15
                  }}
                >
                  සක්‍රීය
                </Text>
                <Tooltip
                  popover={
                    <Text>
                      Total local confirmed COVID-19 cases currently on
                      treatment at the Hospitals in Sri Lanka
                    </Text>
                  }
                  width={200}
                  height={100}
                >
                  <Icon
                    style={{ fontSize: 25, color: "gray", marginLeft: 5 }}
                    name="information-circle"
                  />
                </Tooltip>
              </View>

              <Text
                style={{ fontSize: 20, fontWeight: "700", marginRight: 15 }}
              >
                {
                  this.state.data2.daily[this.state.data2.daily.length - 1]
                    .confirmed
                }
              </Text>
            </View>
            <View style={homeStyles.bodystats}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                    backgroundColor: "#000001",
                    marginLeft: 15
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "black",
                    marginLeft: 15
                  }}
                >
                  නව ආසාදිතයි​න්
                </Text>
                <Tooltip
                  width={200}
                  height={100}
                  popover={
                    <Text>
                      Local confirmed COVID-19 cases reported during last 24
                      hours
                    </Text>
                  }
                >
                  <Icon
                    style={{ fontSize: 25, color: "gray", marginLeft: 5 }}
                    name="information-circle"
                  />
                </Tooltip>
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "700", marginRight: 15 }}
              >
                {this.state.data2.daily[this.state.data2.daily.length - 1]
                  .confirmed -
                  this.state.data2.daily[this.state.data2.daily.length - 2]
                    .confirmed}
              </Text>
            </View>
            <View style={homeStyles.bodystats}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                    backgroundColor: "#3C888B",
                    marginLeft: 15
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "black",
                    marginLeft: 15
                  }}
                >
                  මරණ
                </Text>
                <Tooltip
                  width={200}
                  height={100}
                  popover={
                    <Text>
                      Total deaths due to COVID-19 reported in Sri Lanka
                    </Text>
                  }
                >
                  <Icon
                    style={{ fontSize: 25, color: "gray", marginLeft: 5 }}
                    name="information-circle"
                  />
                </Tooltip>
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "700", marginRight: 15 }}
              >
                {
                  this.state.data2.daily[this.state.data2.daily.length - 1]
                    .deceased
                }
              </Text>
            </View>
            <View style={homeStyles.bodystats}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                    backgroundColor: "#C2BD3C",
                    marginLeft: 15
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "black",
                    marginLeft: 15
                  }}
                >
                  පරීක්ෂාවට ලක් වූ
                </Text>
                <Tooltip
                  width={200}
                  height={100}
                  popover={
                    <Text>
                      Total suspected or confirmed COVID-19 cases currently
                      hospitalized in Sri Lanka
                    </Text>
                  }
                >
                  <Icon
                    style={{ fontSize: 25, color: "gray", marginLeft: 5 }}
                    name="information-circle"
                  />
                </Tooltip>
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "700", marginRight: 15 }}
              >
                {
                  this.state.data2.daily[this.state.data2.daily.length - 1]
                    .tested
                }{" "}
                (
                {
                  this.state.data.data
                    .local_total_number_of_individuals_in_hospitals
                }
                )
              </Text>
            </View>

            <View style={homeStyles.bodystats}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                    backgroundColor: "#178EE5",
                    marginLeft: 15
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "black",
                    marginLeft: 15
                  }}
                >
                  අසාධ්‍ය
                </Text>
                <Tooltip
                  width={200}
                  height={100}
                  popover={
                    <Text>
                      Total local COVID-19 cases recovered and discharged in Sri
                      Lanka
                    </Text>
                  }
                >
                  <Icon
                    style={{ fontSize: 25, color: "gray", marginLeft: 5 }}
                    name="information-circle"
                  />
                </Tooltip>
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "700", marginRight: 15 }}
              >
                {
                  this.state.data2.daily[this.state.data2.daily.length - 1]
                    .critical
                }
              </Text>
            </View>

            <View style={homeStyles.bodystats}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                    backgroundColor: "#9617E5",
                    marginLeft: 15
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "black",
                    marginLeft: 15
                  }}
                >
                  සුවය ලැබූ
                </Text>
                <Tooltip
                  width={200}
                  height={100}
                  popover={
                    <Text>
                      Total local COVID-19 cases recovered and discharged in Sri
                      Lanka
                    </Text>
                  }
                >
                  <Icon
                    style={{ fontSize: 25, color: "gray", marginLeft: 5 }}
                    name="information-circle"
                  />
                </Tooltip>
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "700", marginRight: 15 }}
              >
                {
                  this.state.data2.daily[this.state.data2.daily.length - 1]
                    .recovered
                }
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Home;
