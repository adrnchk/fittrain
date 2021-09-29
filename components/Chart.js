import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Touchable,
  ImageBackground,
  Dimensions,
} from "react-native";

function Chart(props) {
  return (
    <View>
      <Text
        style={{
          color: "#161925",
          fontSize: 18,
          fontWeight: "500",
          marginTop: 10,
          marginLeft: 20,
          alignSelf: "flex-start",
        }}
      >
        {props.lable}
      </Text>
      <LineChart
        data={props.data}
        width={Dimensions.get("window").width - 20} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundGradientFrom: "#7B68EE",
          backgroundGradientTo: "#DA70D6",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

export default Chart;
