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

function Exercise(props) {

  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Details", {
          type: "ex",
          id: props.media.id,
          videoUrl: props.media.videoUrl,
          photoUrl: props.media.photoUrl,
          description: props.media,
          time: props.media.time,
          complexity: props.media.complexity,
        });
      }}
      style={styles.block}
    >
      <ImageBackground style={styles.img} source={props.media.photoUrl}>
        <View style={styles.shadow}></View>
        <View style={styles.top}>
          <Text style={styles.text}>{props.media.name}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              marginTop: 175,
              marginLeft: 11,
              fontSize: 11,
              fontWeight: "500",
            }}
          >
            Complexity: {props.media.complexity}
          </Text>
          <Text
            style={{
              marginTop: 175,
              marginRight: 53,
              fontSize: 11,
              fontWeight: "500",
            }}
          >
            time: {props.media.time} sec
          </Text>
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
  top: {
    position: "absolute",
    top: 100,
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
export default Exercise;
