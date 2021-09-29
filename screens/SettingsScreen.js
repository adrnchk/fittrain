import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GradientButton from "react-native-gradient-buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../components/Input";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Touchable,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Program from "../components/Programs";

function Screen1({ navigation }) {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [age, setAge] = React.useState("");
  const [password, setPassword] = React.useState("");
  const items = useSelector((state) => {
    return state;
  });

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
          <ScrollView>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{ marginTop: 15 }}
              placeholder={"Name"}
            />
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={styles.Input}
              placeholder={"Password"}
              secureTextEntry
            />
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={styles.Input}
              placeholder={"Weight"}
            />
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={styles.Input}
              placeholder={"Height"}
            />
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={styles.Input}
              placeholder={"age"}
            />
            <GradientButton
              onPressAction={() => {}}
              textStyle={{ padding: 25, fontSize: 15 }}
              style={{ marginTop: 15 }}
              text={"Update personal info"}
              width="90%"
              blueViolet
              impact
            />
            <GradientButton
              onPressAction={() => {
                dispatch({ type: "LOG_OUT" });
                AsyncStorage.setItem("userToken", null);
              }}
              textStyle={{ fontSize: 15 }}
              style={{ marginTop: 15 }}
              text={"Log out"}
              width="90%"
              blueViolet
              impact
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#161925",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Screen1;
