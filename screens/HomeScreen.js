import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import stylesheet from "../stylesheet";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#3A8926"
      />
      <KeyboardAvoidingView behavior="padding" style={stylesheet.allcontainer}>
        <ImageBackground
          source={require("../assets/backgroundappimg.png")}
          style={stylesheet.photo}
        >
          <View>
            <Text allowFontScaling={false} style={stylesheet.Logotitle}>
              Karnavti.
            </Text>
          </View>
          <View style={stylesheet.btncontainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={stylesheet.btnlogin}
            >
              <Text allowFontScaling={false} style={stylesheet.login}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={stylesheet.btnsingup}
            >
              <Text allowFontScaling={false} style={stylesheet.singup}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default HomeScreen;
