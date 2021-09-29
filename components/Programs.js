import React from "react";
import GradientButton from "react-native-gradient-buttons";
import { useSelector } from "react-redux";
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

function Program(props) {
  const state = useSelector((state) => state.userReducer);
  const subscribe = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://localhost:44310/exercises/programs/${state.id}/${props.media.id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log("set new program:", result))
      .catch((error) => console.log("error", error));
  };

  return (
    <TouchableOpacity
      // onPress={() => {
      //   props.navigation.navigate("Details", {
      //     type: "prog",
      //     id: props.media.id,
      //     name: props.media.name,
      //     description: props.media.description,
      //     complexity: props.media.complexity,
      //   });
      // }}
      style={styles.block}
    >
      <ImageBackground style={styles.img} source={props.media.photoUrl}>
        <View style={styles.shadow}></View>
        <View style={styles.top}>
          <Text style={styles.text}>{props.media.name}</Text>
          <Text style={styles.desc}>{props.media.description}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              marginTop: 315,
              marginLeft: 11,
              fontSize: 11,
              fontWeight: "500",
            }}
          >
            Complexity: {props.media.complexity}
          </Text>
          <GradientButton
            onPressAction={() => {
              subscribe();
            }}
            text="Subscribe"
            textStyle={{ fontSize: 12 }}
            width="40%"
            height="8%"
            fontSize="12"
            blueViolet
            impact
            style={{
              marginTop: 310,
              marginRight: 10,
            }}
          >
            time: {props.media.time} sec
          </GradientButton>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  lineStyle: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "black",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  desc: {
    color: "#fff",
    fontSize: 14,
  },
  top: {
    position: "absolute",
    top: 170,
    left: 10,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  shadow: {
    width: "100%",
    height: "93%",
    position: "relative",
    position: "absolute",
    backgroundColor: "black",
    left: 0,
    top: 0,
    //   transition: opacity "0.6s",
    opacity: 0.3,
  },
  img: {
    width: "100%",
    height: "93%",
  },
  label: {
    position: "absolute",
  },
  block: {
    position: "relative",
    marginVertical: 10,
    width: 200 /* Ширина блока */,
    height: 350 /* Высота блока */,
    backgroundColor: "#ffffff" /* Фоновый цвет*/,
    borderWidth: 2,
    borderColor: "#D4D4D4" /* Ширина и цвет границ*/,
    borderRadius: 10 /* Радиус границ*/,
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
export default Program;
