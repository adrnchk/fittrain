import React from "react";
import { Text, StyleSheet, View } from "react-native";
import GradientButton from "react-native-gradient-buttons";
import Input from "../components/Input";
import store from "../redux/store.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const getUserInfo = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://localhost:44310/api/login/info", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("login", result);
        const info = JSON.parse(result);
        store.dispatch({
          type: "LOG_IN",
          id: info.id,
          jwt: token,
          name: info.name,
          email: info.email,
          age: info.age,
          weight: info.weight,
          height: info.height,
          sex: info.sex,
          program: info.programId,
        });
        store.dispatch({ type: "RETRIEVE_TOKEN", payload: token });
        AsyncStorage.setItem("userToken", token);
        console.log("asyncSave", token);
      })
      .catch((error) => console.log("error", error));
  };
  const tryLogin = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var tried = false;
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    await fetch(
      `https://localhost:44310/api/login?email=${email}&pass=${password}`,
      requestOptions
    )
      .then((response) => {
        if(response.status != 200)
        {
          setError("Invalid login or password");
        }
        return response.text();
      })
      .then((result) => {
        if (JSON.parse(result).token != undefined) {
          getUserInfo(JSON.parse(result).token);
          tried = true;
          // store.dispatch({ type: "LOG_OUT" });
          // AsyncStorage.setItem("userToken", null);
          //setToken(store.getState().userReducer.jwt);
        }
        
      })
      .catch((error) => {
        if (error.message == "Failed to fetch")
          setError("Server conection failed");
        else setError("Invalid login or password");
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOGIN</Text>
      <Input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder={"Email"}
        keyboardType="email-address"
      />
      <Input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        style={styles.Input}
        placeholder={"Password"}
        secureTextEntry
      />
      <Text style={styles.errorMessage}>{error}</Text>
      <GradientButton
        onPressAction={() => {
          tryLogin();
        }}
        style={{ marginTop: 15 }}
        text="Log in"
        width="90%"
        blueViolet
        impact
      />
      <Text style={{ marginLeft: "33%", fontSize: 15, marginTop: 5 }}>
        Haven't got an account?{" "}
        <Text
          onPress={() => {
            navigation.navigate("Registration");
          }}
          style={{ color: "purple" }}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 220,
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    color: "black",
    marginBottom: 45,
  },
  errorMessage: {
    fontSize: 14,
    color: "red",
    width: "90%",
  },
});
