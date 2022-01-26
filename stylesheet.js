import { StyleSheet, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  MeriendaOne_400Regular,
} from "@expo-google-fonts/merienda-one";
import react from "react";
import Constant from "expo-constants";

const stylesheet = StyleSheet.create({
  // home style

  allcontainer: {
    height: "100%",
    width: "100%",
  },
  container: {
    height: "100%",
  },
  photo: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom: {
    backgroundColor: "black",
  },
  titles: {
    marginVertical: 30,
  },
  Logotitle: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#267612",
    marginTop: 20,
  },
  ntitle: {
    fontSize: 25,
    fontWeight: "900",
    color: "#fff",
    marginHorizontal: 20,
    marginBottom: 0,
    textAlign: "left",
  },
  btncontainer: {
    marginBottom: 30,
  },
  login: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 120,
    paddingVertical: 10,
    textAlign: "center",
  },
  singup: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#267612",
    paddingHorizontal: 120,
    paddingVertical: 10,
  },
  btnlogin: {
    marginTop: 20,
    backgroundColor: "#267612",
    borderRadius: 10,
  },
  btnsingup: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#267612",
    borderRadius: 10,
  },

  // Register style
});

export default stylesheet;
