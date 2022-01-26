import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Animatable from "react-native-animatable";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const searchScreen = ({ navigation }) => {
  const [search, setsearch] = useState("");

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#3A8926"
      />
      <View style={styles.headernotice}>
        <FontAwesome5 name="leaf" size={20} color="#fff" />
        <Text allowFontScaling={false} style={styles.noticetxt}>
          PURE VEG RESTAURANT
        </Text>
      </View>
      <View style={styles.header}>
        <Text allowFontScaling={false} style={styles.hdttitle}>
          Karnavati
        </Text>
      </View>
      <View style={styles.searchmaincon}>
        <View style={styles.searchin}>
          <TextInput
            allowFontScaling={false}
            style={styles.searchinput}
            placeholder="Search"
            value={search}
            onChangeText={setsearch}
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="#AAAAAA"
          />
          <FontAwesome5 name="search" size={20} color="#747474" />
        </View>
      </View>
      <ScrollView>
        <View style={styles.searchcontainer}>
          <View style={styles.halfcontainer}>
            <View style={styles.item}>
              <Image
                style={styles.itemimg}
                source={require("../../assets/itemimg.png")}
              />
              <Text allowFontScaling={false} style={styles.itemname}>
                Oil Vadapav
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: scale(12),
                }}
              >
                <FontAwesome5 name="rupee-sign" size={20} color="#3A8926" />
                <Text
                  allowFontScaling={false}
                  style={{
                    fontSize: scale(20),
                    marginLeft: 10,
                    fontFamily: "MeriendaOne_400Regular",
                    color: "#3A8926",
                  }}
                >
                  17
                </Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemimg}
                source={require("../../assets/itemimg.png")}
              />
              <Text allowFontScaling={false} style={styles.itemname}>
                Oil Vadapav
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: scale(12),
                }}
              >
                <FontAwesome5 name="rupee-sign" size={20} color="#3A8926" />
                <Text
                  allowFontScaling={false}
                  style={{
                    fontSize: scale(20),
                    marginLeft: 10,
                    fontFamily: "MeriendaOne_400Regular",
                    color: "#3A8926",
                  }}
                >
                  17
                </Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemimg}
                source={require("../../assets/itemimg.png")}
              />
              <Text allowFontScaling={false} style={styles.itemname}>
                Oil Vadapav
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: scale(12),
                }}
              >
                <FontAwesome5 name="rupee-sign" size={20} color="#3A8926" />
                <Text
                  allowFontScaling={false}
                  style={{
                    fontSize: scale(20),
                    marginLeft: 10,
                    fontFamily: "MeriendaOne_400Regular",
                    color: "#3A8926",
                  }}
                >
                  17
                </Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemimg}
                source={require("../../assets/itemimg.png")}
              />
              <Text allowFontScaling={false} style={styles.itemname}>
                Oil Vadapav
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: scale(12),
                }}
              >
                <FontAwesome5 name="rupee-sign" size={20} color="#3A8926" />
                <Text
                  allowFontScaling={false}
                  style={{
                    fontSize: scale(20),
                    marginLeft: 10,
                    fontFamily: "MeriendaOne_400Regular",
                    color: "#3A8926",
                  }}
                >
                  17
                </Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemimg}
                source={require("../../assets/itemimg.png")}
              />
              <Text allowFontScaling={false} style={styles.itemname}>
                Oil Vadapav
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: scale(12),
                }}
              >
                <FontAwesome5 name="rupee-sign" size={20} color="#3A8926" />
                <Text
                  allowFontScaling={false}
                  style={{
                    fontSize: scale(20),
                    marginLeft: 10,
                    fontFamily: "MeriendaOne_400Regular",
                    color: "#3A8926",
                  }}
                >
                  17
                </Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemimg}
                source={require("../../assets/itemimg.png")}
              />
              <Text allowFontScaling={false} style={styles.itemname}>
                Oil Vadapav
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: scale(12),
                }}
              >
                <FontAwesome5 name="rupee-sign" size={20} color="#3A8926" />
                <Text
                  allowFontScaling={false}
                  style={{
                    fontSize: scale(20),
                    marginLeft: 10,
                    fontFamily: "MeriendaOne_400Regular",
                    color: "#3A8926",
                  }}
                >
                  17
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  searchcontainer: {
    flex: 1,
    width: "100%",
    marginBottom: scale(100),
  },
  searchmaincon: {
    width: "100%",
    alignItems: "center",

    height: scale(60),
  },
  halfcontainer: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    width: "100%",
    height: verticalScale(70),
    alignItems: "center",
    justifyContent: "center",
  },

  hdttitle: {
    fontSize: scale(30),
    color: "#3A8926",
    fontFamily: "MeriendaOne_400Regular",
  },
  headernotice: {
    width: "100%",
    backgroundColor: "#3A8926",
    height: scale(30),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noticetxt: {
    fontSize: scale(15),
    color: "#fff",
    marginLeft: 10,
  },
  searchin: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#747474",
    flexDirection: "row",
    width: "80%",
  },
  searchinput: {
    width: "80%",
    marginLeft: 20,
  },
  item: {
    width: scale(140),
    height: scale(200),
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: scale(20),
    margin: 10,
  },
  itemname: {
    fontSize: scale(20),
    color: "#000",
    fontFamily: "MeriendaOne_400Regular",
    marginTop: scale(18),
    marginLeft: 10,
  },
  itemimg: {
    width: scale(140),
    borderRadius: scale(20),
    height: scale(100),
  },
});
export default searchScreen;
