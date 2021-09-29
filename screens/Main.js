import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ExercisesScreen from "./HomeScreen";
import GuidesScreen from "./GuidesScreen"
import SettingsScreen from "./SettingsScreen";
import StatsScreen from "./StatScreen";
import DetailScreen from "./DetailScreen";
import DietScreen from "./DietScreen";
import ProgramsScreen from "./ProgramsScreen";
import { Button, View, Text, Image, ActivityIndicator } from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import SideBar from "../components/SideBar";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import store from "../redux/store.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Entypo name="battery" size={24} color={color} />
          ),
        }}
        name="Exercises"
        component={ExercisesScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="restaurant-menu" size={24} color={color} />
          ),
        }}
        name="Diet"
        component={DietScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-stats-chart" size={24} color={color} />
          ),
        }}
        name="Stats"
        component={StatsScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="arm-flex" size={24} color={color} />
          ),
        }}
        name="Programs"
        component={ProgramsScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="playcircleo" size={24} color={color} />
          ),
        }}
        name="Guides"
        component={GuidesScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <Drawer.Screen
        name="Details"
        component={DetailScreen}
        initialParams={{
          type: "ex",
          id: 0,
          videoUrl: "",
          photoUrl: "",
          description: "",
          time: 0,
          complexity: 0,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function Main() {
  const [isLoading, setIsLoading] = React.useState(true);
  const logged = useSelector((state) => state.userReducer.jwt);

  React.useEffect(() => {
    const getUserInfo = async (userToken) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${userToken}`);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };
      let status = 500;

      await fetch("https://localhost:44310/api/login/info", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          if (JSON.parse(result).id) {
            console.log("start", result);
            const info = JSON.parse(result);
            if (info != undefined) {
              store.dispatch({
                type: "LOG_IN",
                id: info.id,
                jwt: userToken,
                name: info.name,
                email: info.email,
                age: info.age,
                weight: info.weight,
                height: info.height,
                sex: info.sex,
                program: info.programId,
              });
              AsyncStorage.setItem("userToken", userToken);
              console.log("reduxAsync");
              status = 200;
            } else {
              store.dispatch({ type: "LOG_OUT" });
              console.log("reduxout");
              AsyncStorage.setItem("userToken", null);
              status = 401;
            }
          } else return status;
        })
        .catch((error) => console.log("error", error));
      return status;
    };
    const retrieve = async () => {
      try {
        const userToken = await AsyncStorage.getItem("userToken");
        console.log("async", userToken);
        if (userToken == "null") {
          store.dispatch({ type: "LOG_OUT" });
          console.log("asynclogout", userToken);
          console.log(store.getState().userReducer.jwt);
        } else {
          await getUserInfo(userToken);
        }
      } catch (e) {
        console.log(e);
      }
    };
    retrieve();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const AuthStack = createStackNavigator();

  return (
    <NavigationContainer>
      {logged != "" ? (
        <MyDrawer></MyDrawer>
      ) : (
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <AuthStack.Screen name={"Login"} component={LoginScreen} />
          <AuthStack.Screen name={"Registration"} component={RegisterScreen} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
