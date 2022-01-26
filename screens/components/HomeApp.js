import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  BackHandler,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { Linking } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  MeriendaOne_400Regular,
} from "@expo-google-fonts/merienda-one";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { firebase, db } from "../../firebase";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.93;
const ITEM_HEIGHT = ITEM_WIDTH * 0.57;

const handleSignout = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error);
  }
};

const HomeAppScreen = () => {
  let [fontsLoaded] = useFonts({
    MeriendaOne_400Regular,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          animated={true}
          backgroundColor="#3A8926"
        />
        <View style={styles.homecontainer}>
          <View style={styles.header}>
            <Text allowFontScaling={false} style={styles.hdttitle}>
              Karnavati
            </Text>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.allscroll}
          >
            <View style={styles.scrollview}>
              <Swiper
                autoplayTimeout={4}
                activeDotColor="#3A8926"
                autoplay={true}
                style={styles.wrapper}
              >
                <View style={styles.slide1}>
                  <Image
                    style={styles.swiperimage}
                    source={require("../../assets/vadaphoto.jpg")}
                  />
                </View>
                <View style={styles.slide2}>
                  <Image
                    style={styles.swiperimage}
                    source={require("../../assets/vadapavcaur2.png")}
                  />
                </View>
                <View style={styles.slide3}>
                  <Image
                    style={styles.swiperimage}
                    source={require("../../assets/vadapavcour.png")}
                  />
                </View>
                <View style={styles.slide3}>
                  <Image
                    style={styles.swiperimage}
                    source={require("../../assets/lastvada.jpg")}
                  />
                </View>
              </Swiper>
              <View style={styles.textview}>
                <Text allowFontScaling={false} style={styles.eat}>
                  DINE-IN/TAKEAWAY
                </Text>
                <Text allowFontScaling={false}>Lets Eat !!!</Text>
              </View>
              <View style={styles.card}>
                <View style={styles.inercard}>
                  <Text allowFontScaling={false} style={styles.tagline}>
                    Karnavati vadapav
                  </Text>
                  <Text
                    allowFontScaling={false}
                    numberOfLines={2}
                    of
                    style={styles.line}
                  >
                    Best fastfood shop in Surat katargam.
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#fff",
                      width: scale(30),
                      height: scale(30),
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: scale(30),
                    }}
                  >
                    <AntDesign name="arrowright" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <Image
                  style={{ marginRight: 10 }}
                  source={require("../../assets/vadabgno.png")}
                />
              </View>
              <View style={styles.textview}>
                <Text allowFontScaling={false} style={styles.eat}>
                  Delivery{" "}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://www.zomato.com/surat/karnavati-vadapav-center-1-katargam/order"
                  )
                }
                style={styles.zpmbutton}
              >
                <View style={styles.zomotocard}>
                  <Image
                    style={{ marginLeft: -10 }}
                    source={require("../../assets/image_1__1_-removebg-preview.png")}
                  />
                  <Text allowFontScaling={false} style={styles.zomoto}>
                    Order online With Zomato
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSignout}
                style={styles.zpmbutton}
              >
                <View style={styles.swiggycard}>
                  <Image
                    source={require("../../assets/image_3__1_-removebg-preview.png")}
                  />
                  <Text allowFontScaling={false} style={styles.zomoto}>
                    Order online With Swiggy
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.textview}>
                <Text allowFontScaling={false} style={styles.eat}>
                  Reviews{" "}
                </Text>
              </View>
              <TouchableHighlight
                onPress={() =>
                  Linking.openURL(
                    "https://www.google.com/maps/place/%E0%AA%95%E0%AA%B0%E0%AB%8D%E0%AA%A3%E0%AA%BE%E0%AA%B5%E0%AA%A4%E0%AB%80+%E0%AA%B5%E0%AA%A1%E0%AA%BE%E0%AA%AA%E0%AA%BE%E0%AA%B5+%E0%AA%B8%E0%AB%87%E0%AA%A8%E0%AB%8D%E0%AA%9F%E0%AA%B0/@21.2243016,72.8309949,17z/data=!3m1!4b1!4m5!3m4!1s0x3be04ec1f28a716b:0x40f3b3fea5c12ad!8m2!3d21.2243016!4d72.8331836"
                  )
                }
                styleunderlayColor="white"
                style={styles.zpmbutton}
              >
                <View style={styles.gmapcard}>
                  <Image
                    style={styles.gmapiamge}
                    source={require("../../assets/Google_Maps-Logo.wine-removebg-preview.png")}
                  />
                  <View style={styles.staricon}>
                    <FontAwesome name="star" size={30} color="#FFCE31" />
                    <FontAwesome name="star" size={30} color="#FFCE31" />
                    <FontAwesome name="star" size={30} color="#FFCE31" />
                    <FontAwesome name="star" size={30} color="#FFCE31" />
                    <FontAwesome name="star-half" size={30} color="#FFCE31" />
                    <Text allowFontScaling={false} style={styles.gmap}>
                      4.5
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.footer}>
              <Image
                style={styles.footerimg}
                source={require("../../assets/footer.jpg")}
              />
              <Text allowFontScaling={false} style={styles.footertxt}>
                Lic, No.00000000000000
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  homecontainer: {
    alignItems: "center",
    flex: 1,
  },
  scrollview: {
    marginBottom: 200,
    width: "100%",
  },
  header: {
    width: "100%",
    height: scale(60),
    alignItems: "center",
    justifyContent: "center",
  },
  allscroll: {
    width: ITEM_WIDTH,
  },
  hdttitle: {
    fontSize: scale(33),
    color: "#3A8926",
    fontFamily: "MeriendaOne_400Regular",
  },
  swiper: {},
  wrapper: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: scale(250),
  },
  slide1: {
    width: "100%",
    height: scale(200),
  },
  slide2: {
    width: "100%",
    height: scale(200),
  },
  slide3: {
    width: "100%",
    height: scale(200),
  },
  swiperimage: {
    width: "100%",
    height: scale(200),
    borderRadius: scale(15),
  },

  card: {
    width: "100%",
    height: scale(160),
    backgroundColor: "#3A8926",
    marginTop: scale(10),
    borderRadius: scale(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  inercard: {
    marginLeft: 30,
  },
  tagline: {
    fontSize: scale(19),
    fontFamily: "MeriendaOne_400Regular",
    color: "#FFCE31",
  },
  line: {
    width: scale(140),
    color: "#fff",
    marginBottom: 10,
  },
  eat: {
    color: "#034343",
    fontWeight: "bold",
    fontSize: scale(19),
  },
  textview: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  buttongo: {
    backgroundColor: "#fff",
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 10,
  },
  zomotocard: {
    backgroundColor: "#CF2031",
    width: "100%",
    height: scale(100),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.19,
    shadowRadius: 15,
  },
  swiggycard: {
    backgroundColor: "#F7881F",
    width: "100%",
    height: scale(100),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.19,
    shadowRadius: 15,
  },
  zpmbutton: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  zomoto: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: "#fff",
    marginLeft: -10,
  },
  gmapcard: {
    width: "100%",
    backgroundColor: "#FfF",
    padding: 10,
    justifyContent: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9.41,

    elevation: 3,
  },
  gmapiamge: {
    width: 200,
    height: 100,
  },
  gmap: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#3A8926",
  },
  staricon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "60%",
    paddingBottom: 25,
  },
  footer: {
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  footertxt: {
    fontSize: 16,
    color: "#828282",
  },
  footerimg: {
    width: 100,
    height: 50,
  },
});

export default HomeAppScreen;
