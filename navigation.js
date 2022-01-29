import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import searchScreen from "./screens/components/search";
import HomeAppScreen from "./screens/components/HomeApp";
import LocationScreen from "./screens/components/location";
import RegisterScreen from "./screens/RegisterScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Admin from "./screens/Admin";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

// function handleBackButton() {
//   BackHandler.exitApp();
//   return true;
// }

const TabsNav = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: "#fff",
        tabBarShowLabel: false,
        keyboardHidesTabBar: true,
      }}
    >
      <Tabs.Screen
        name="HomeApp"
        component={HomeAppScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Ionicons
                name="home"
                size={30}
                color={focused ? "#3A8926" : "gray"}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Order"
        component={searchScreen}
        options={{
          tabBarHideOnKeyboard: true,

          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <MaterialIcons
                name="restaurant-menu"
                size={30}
                color={focused ? "#3A8926" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Entypo
                name="location-pin"
                size={30}
                color={focused ? "#3A8926" : "gray"}
              />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export const Singninstack = ({ userID }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
        initialRouteName={
          userID == "eWwpGR6vdiMMxWrHRznAolDZkzp1" ? "Admin" : "TabsNav"
        }
      >
        <Stack.Screen name="TabsNav" component={TabsNav} />
        <Stack.Screen name="Admin" component={Admin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const Signoutstack = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

// listeners={{
//   focus: () =>
//     BackHandler.addEventListener(
//       "hardwareBackPress",
//       handleBackButton
//     ),
//   blur: () =>
//     BackHandler.removeEventListener(
//       "hardwareBackPress",
//       handleBackButton
//     ),
// }}
