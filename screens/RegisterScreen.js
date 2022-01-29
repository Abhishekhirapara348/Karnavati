import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Pressable,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase, db } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const Registerformchema = Yup.object().shape({
    email: Yup.string().email().required("email is required"),
    username: Yup.string().required().min(4, "username requierd"),
    password: Yup.string().required().min(6, "password is required"),
  });

  const getrandompicture = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };

  const onRegister = async (email, password, username) => {
    try {
      console.log("register");
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      db.collection("users").add({
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        profile_picture: await getrandompicture(),
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <ScrollView style={styles.LoginContainer}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#000"
      />
      <KeyboardAvoidingView keyboardVerticalOffset={-100}>
        <View style={styles.Lgheader}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={require("../assets/backbutton.png")} />
          </TouchableOpacity>
          <Text allowFontScaling={false} style={styles.ltitle}>
            Signup
          </Text>
        </View>
        <Animatable.View animation="bounceIn" style={styles.lpng}>
          <Image source={require("../assets/panalogin.png")} />
        </Animatable.View>

        <Formik
          initialValues={{ email: "", username: "", password: "" }}
          onSubmit={(values) =>
            onRegister(values.email, values.password, values.username)
          }
          // validationSchema={Registerformchema}
          validationOnMount={true}
        >
          {({ handleChange, handleBlur, handleSubmit, isValid, values }) => (
            <>
              <View style={styles.Lformcontainer}>
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
                    placeholder="Enter Your username"
                    autoCapitalize="none"
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    placeholderTextColor="#AAAAAA"
                  />

                  <TextInput
                    allowFontScaling={false}
                    style={styles.lemailinput}
                    placeholder="Create Password "
                    textContentType="password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    placeholderTextColor="#AAAAAA"
                  />

                  <Pressable
                    onPress={handleSubmit}
                    style={styles.loginbtn(isValid)}
                  >
                    <Text allowFontScaling={false} style={styles.lbtntitle}>
                      Signup
                    </Text>
                  </Pressable>
                </View>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    padding: 0,
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
  loginbtn: (isValid) => ({
    backgroundColor: isValid ? "#06642B" : "#699D5C",
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

export default RegisterScreen;
