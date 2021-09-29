import React from "react";
import { DrawerItemList } from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
function SideBar(props) {
  const userInfo = useSelector((state) => state.userReducer);
  const { state, ...rest } = props;
  const newState = { ...state }; //copy from state before applying any filter. do not change original state
  newState.routes = newState.routes.filter((item) => item.name !== "Details"); //replace "Login' with your route name

  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/background.png")}
        style={{ width: undefined, padding: 16, paddingTop: 48 }}
      >
        <Image
          source={
            userInfo.sex == 1
              ? {
                  uri: "https://i.pinimg.com/736x/e0/1a/99/e01a990733fe3eca54b510a6961013b4.jpg",
                }
              : {
                  uri: "https://99px.ru/sstorage/1/2014/04/image_10604141443597912274.gif",
                }
          }
          style={styles.ava}
        />
        <Text style={styles.name}>{userInfo.name}</Text>
      </ImageBackground>
      <View style={{ flex: 1 }}>
        <DrawerItemList state={newState} {...rest} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
  },
  ava: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },
});

export default SideBar;
