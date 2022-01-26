import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { View, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyDxU5fB67rc_EQ1nET_Q7uSZMepxGLraZ0";

const LocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        apiKey={GOOGLE_MAPS_APIKEY}
        initialRegion={{
          latitude: 21.224476605083243,
          longitude: 72.833151410902634,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={true}
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude: 21.224476605083243,
            longitude: 72.833151410902634,
          }}
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default LocationScreen;
