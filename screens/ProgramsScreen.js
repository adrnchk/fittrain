import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrograms } from "../redux/actions/actions";
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

  const items = useSelector((state) => {
    return state;
  });

  const loadPrograms = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://localhost:44310/exercises/programs`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        dispatch(setPrograms(JSON.parse(result)));
      })
      .catch((error) => console.log("error", error));
  };
  
  React.useEffect(() => {
    loadPrograms();
  }, []);
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
            {Array.isArray(items.exerciseReducer.programs) &&
              items.exerciseReducer.programs?.map((obj) => (
                <Program
                  key={obj.id}
                  navigation={navigation}
                  media={obj}
                ></Program>
              ))}
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
  noEx: {
    marginTop: 100,
    color: "#161925",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default Screen1;
