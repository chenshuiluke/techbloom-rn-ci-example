import * as React from "react";
import MapView, { Marker, MarkerAnimated } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import CarIcon1 from "../assets/img/bower.svg";
import CarIcon2 from "../assets/img/firefox.svg";
import CarIcon3 from "../assets/img/snyk.svg";
import CarIcon4 from "../assets/img/egghead.svg";

export default function Map() {
  const images = [
    <CarIcon1 width={120} height={40} />,
    <CarIcon2 width={120} height={40} />,
    <CarIcon3 width={120} height={40} />,
    <CarIcon4 width={120} height={40} />,
  ];
  const randomIntFromInterval = (min, max, floor = false) => {
    // min and max included
    if (floor) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return Math.random() * (max - min + 1) + min;
  };
  const [markers, setMarkers] = React.useState([]);
  const addMarkers = () => {
    const newMarkers = [...markers];
    newMarkers.push({
      coordinate: {
        latitude: 0,
        longitude: 1,
      },
      icon: images[0],
    });
    setMarkers(newMarkers);
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      setMarkers((markers) => {
        console.log(markers);
        const temp = [];
        for (const element of markers) {
          const marker = {
            ...element,
            coordinate: { ...element.coordinate },
          };
          marker.coordinate.latitude += randomIntFromInterval(0.01, 2);
          marker.coordinate.longitude += randomIntFromInterval(0.01, 2);
          marker.icon = images[randomIntFromInterval(0, 3, true)];
          temp.push(marker);
        }
        return temp;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <MapView style={styles.map}>
        {markers.map((marker, idx) => {
          return (
            <MarkerAnimated
              key={idx}
              title={`Marker ${idx}`}
              coordinate={marker.coordinate}
            >
              <View>{marker.icon}</View>
            </MarkerAnimated>
          );
        })}
      </MapView>
      <Pressable onPress={addMarkers}>
        <Text>Add Markers</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
