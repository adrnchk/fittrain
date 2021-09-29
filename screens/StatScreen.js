import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GradientButton from "react-native-gradient-buttons";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Touchable,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Chart from "../components/Chart";

function Screen1({ navigation }) {
  const dispatch = useDispatch();
  const [type, setType] = React.useState("prog-mon");
  const items = useSelector((state) => {
    return state;
  });

  var index = 1;
  if (items.userReducer.program == 0) {
    index = 1;
  }
  if (items.userReducer.program == 1) {
    index = 0.99;
    console.log(index);
  }
  if (items.userReducer.program == 2) {
    index = 0.98;
  }
  if (items.userReducer.program == 3) {
    index = 0.97;
  }

  if (items.userReducer.program == 4) {
    index = 1.015;
  }
  if (items.userReducer.program == 5) {
    index = 1.025;
  }
  React.useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 86 }}>
          <ImageBackground
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/background.png")}
          >
            <TouchableOpacity
              style={{ alignItems: "flex-end", marginTop: 50, marginRight: 30 }}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <FontAwesome5
                name="bars"
                size={24}
                color="#161925"
              ></FontAwesome5>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 10,
                width: "100%",
                borderWidth: 0.2,
                borderColor: "black",
              }}
            ></View>
          </ImageBackground>
        </View>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            {type === "track-days" && (
            <Chart
              lable="Progres tracking"
              data={{
                labels: [
                  new Date().getDay() -7 <1?25:new Date().getDay() -7,
                  new Date().getDay() -6 <1?26:new Date().getDay() -6,
                  new Date().getDay() -5 <1?27:new Date().getDay() -5,
                  new Date().getDay() -4 <1?28:new Date().getDay() -4,
                  new Date().getDay() -3 <1?29:new Date().getDay() -3,
                  new Date().getDay() -2 <1?30:new Date().getDay() -2,
                  new Date().getDay() -1 <1?31:new Date().getDay()-1,
                ],
                datasets: [
                  {
                    data: [
                      0,0,0,0,0,0,items.userReducer.exes
                    ],
                  },
                ],
              }}
            ></Chart>
          )}
          {type === "prog-mon" && (
            <Chart
              lable="Progres prediction"
              data={{
                labels: [
                  new Date().getMonth() + 1,
                  new Date().getMonth() + 1 + 1,
                  new Date().getMonth() + 1 + 2,
                  new Date().getMonth() + 1 + 3,
                  new Date().getMonth() + 1 + 4,
                  new Date().getMonth() + 6,
                ],
                datasets: [
                  {
                    data: [
                      items.userReducer.weight * index,
                      items.userReducer.weight * index * index,
                      items.userReducer.weight * index * index * index,
                      items.userReducer.weight * index * index * index * index,
                      items.userReducer.weight *
                        index *
                        index *
                        index *
                        index *
                        index,
                      items.userReducer.weight *
                        index *
                        index *
                        index *
                        index *
                        index *
                        index,
                    ],
                  },
                ],
              }}
            ></Chart>
          )}
          <GradientButton
            onPressAction={() => {setType("prog-mon")}}
            textStyle={{ padding: 25, fontSize: 15 }}
            style={{ marginTop: 15 }}
            text={"Progress prediction"}
            width="90%"
            blueViolet
            impact
          />
          <GradientButton
            onPressAction={() => {setType("track-days")}}
            textStyle={{ fontSize: 15 }}
            style={{ marginTop: 15 }}
            text={"Training tracking"}
            width="90%"
            blueViolet
            impact
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 0,
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#161925",
    fontSize: 16,
    fontWeight: "500",
  },
  noEx: {
    color: "#161925",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default Screen1;
