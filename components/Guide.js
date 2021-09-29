import React from "react";

import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

function Guide(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Details", {
          type: "guide",
          id: props.media.id,
          videoUrl: props.media.videoUrl,
          photoUrl: props.media.photoUrl,
          description: props.media,
          text: props.media.text,
          name: props.media.name,
        });
      }}
      style={styles.block}
    >
      <ImageBackground style={styles.img} source={props.media.photoUrl}>
        <View style={styles.shadow}></View>
        <View style={styles.top}>
          <Text style={styles.text}>{props.media.name}</Text>
          <Text style={styles.desc}>{props.media.description}</Text>
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        ></View>
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
  desc: {
    color: "#fff",
    fontSize: 9,
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
  top: {
    position: "absolute",
    top: 90,
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
    width: 360 /* Ширина блока */,
    height: 200 /* Высота блока */,
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
export default Guide;
