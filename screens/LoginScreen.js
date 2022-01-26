import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase, db } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const Loginformchema = Yup.object().shape({
    email: Yup.string().email().required("email is required"),
    password: Yup.string().required().min(6, "password is required"),
  });

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.LoginContainer}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#000"
      />
      <View style={styles.Lgheader}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require("../assets/backbtn.png")} />
        </TouchableOpacity>
        <Text allowFontScaling={false} style={styles.ltitle}>
          Login
        </Text>
      </View>
      <Animatable.View animation="bounceIn" style={styles.lpng}>
        <Image source={require("../assets/panalogin.png")} />
      </Animatable.View>
      <View style={styles.Lformcontainer}>
        <Text allowFontScaling={false} style={styles.lformtitle}>
          Login With
        </Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            onLogin(values.email, values.password);
          }}
          validationSchema={Loginformchema}
          validationOnMount={true}
        >
          {({ handleChange, handleBlur, handleSubmit, isValid, values }) => (
            <>
              <View style={styles.inputcontainer}>
                <TextInput
                  allowFontScaling={false}
                  style={styles.lemailinput}
                  placeholder="Enter Your Email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholderTextColor="#AAAAAA"
                />
                <TextInput
                  allowFontScaling={false}
                  style={styles.lemailinput}
                  placeholder="Enter Your Password"
                  placeholderTextColor="#AAAAAA"
                  secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                <Pressable
                  onPress={handleSubmit}
                  style={styles.loginbtn(isValid)}
                >
                  <Text allowFontScaling={false} style={styles.lbtntitle}>
                    Login
                  </Text>
                </Pressable>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    backgroundColor: "#000000",
  },
  ltitle: {
    paddingHorizontal: 100,
    fontSize: 30,
    color: "#ffff",
  },
  Lgheader: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  lpng: {
    alignItems: "center",
    paddingVertical: 40,
  },
  lformtitle: {
    fontSize: 15,
    color: "#fff",
  },
  Lformcontainer: {
    marginHorizontal: 50,
    alignItems: "flex-start",
  },
  inputcontainer: {
    width: "100%",
    marginVertical: 20,
  },
  lemailinput: {
    backgroundColor: "#3E3E3E",
    width: "100%",
    height: 40,
    padding: 10,
    color: "#fff",
    marginBottom: 10,
    borderRadius: 9,
  },
  loginbtn: (isvalid) => ({
    backgroundColor: isvalid ? "#06642B" : "#699D5C",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 9,
    marginTop: 10,
  }),
  lbtntitle: {
    fontSize: 20,
    color: "#fff",
  },
  lneedac: {
    fontSize: 15,
    color: "#AAAAAA",
  },
  lsingup: {
    fontWeight: "bold",
    color: "#ffff",
  },
  btnac: {
    marginTop: 20,
  },
});

export default LoginScreen;
