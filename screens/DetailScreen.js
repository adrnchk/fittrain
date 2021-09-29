import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import Timer from "react-compound-timer";
import GradientButton from "react-native-gradient-buttons";
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
import YouTube from "react-youtube";

function DetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const [congrats, setCongrats] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const opts = {
    height: "390",
    width: "450",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onReady = (e) => {
    // access to player in all event handlers via event.target
    e.target.pauseVideo();
  };
  console.log(route.params.type)
  if (route.params.type === "meal")
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ height: 86 }}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/background.png")}
            >
              <TouchableOpacity
                style={{
                  alignItems: "flex-end",
                  marginTop: 50,
                  marginRight: 30,
                }}
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
              Today set:
            </Text>
            <ScrollView>
              <YouTube
                videoId={route.params.videoUrl}
                opts={opts}
                onReady={(e) => onReady(e)}
              />
              <View style={{padding:50}}>
                <h1>{route.params.name}</h1>
                <Text>Serving: {route.params.netto}g</Text>
                <Text>{route.params.receipt}</Text>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );

    if (route.params.type === "guide")
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ height: 86 }}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/background.png")}
            >
              <TouchableOpacity
                style={{
                  alignItems: "flex-end",
                  marginTop: 50,
                  marginRight: 30,
                }}
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
              Today set:
            </Text>
            <ScrollView>
              <YouTube
                videoId={route.params.videoUrl}
                opts={opts}
                onReady={(e) => onReady(e)}
              />
              <View style={{padding:50}}>
                <h1>{route.params.name}</h1>
                <Text>{route.params.text}</Text>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );

  if (route.params.type === "ex")
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ height: 86 }}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/background.png")}
            >
              <TouchableOpacity
                style={{
                  alignItems: "flex-end",
                  marginTop: 50,
                  marginRight: 30,
                }}
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
            <Text
              style={{
                color: "#161925",
                fontSize: 18,
                fontWeight: "500",
                marginTop: 10,
                marginLeft: 20,
                alignSelf: "flex-start",
              }}
            ></Text>
            <ScrollView>
              <YouTube
                videoId={route.params.videoUrl}
                opts={opts}
                onReady={(e) => onReady(e)}
              />

              <Text style={styles.congrats}>
                {congrats ? "Well done!!" : ""}
              </Text>
              <Timer
                checkpoints={[
                  {
                    time: 0,
                    callback: () => {
                      setCongrats(true);
                      dispatch({ type: "DO_EX" });
                    },
                  },
                ]}
                initialTime={route.params.time * 1000}
                startImmediately={false}
                direction="backward"
                onStart={() => setPlaying(true)}
                onResume={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onStop={() => setPlaying(false)}
                onReset={() => setPlaying(false)}
              >
                {({
                  start,
                  resume,
                  pause,
                  stop,
                  reset,
                  getTimerState,
                  getTime,
                }) => (
                  <React.Fragment>
                    <Text style={styles.timer}>
                      <Timer.Minutes /> :{` `}
                      <Timer.Seconds />
                    </Text>
                    <View>
                      <GradientButton
                        onPressAction={() => {
                          playing ? pause() : start();
                        }}
                        style={{ alignSelf: "center", marginTop: 15 }}
                        text={playing ? "Pause" : "Start"}
                        width="90%"
                        blueViolet
                        impact
                      />
                    </View>
                  </React.Fragment>
                )}
              </Timer>
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
  timer: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "700",
  },
  congrats: {
    fontSize: 30,
    color: "#161925",
    alignSelf: "center",
    fontWeight: "700",
  },
});

export default DetailScreen;
