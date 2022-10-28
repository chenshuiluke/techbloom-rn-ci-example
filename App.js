import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Counter from "./components/Counter";
import Map from "./components/Map";
import PhoneSignIn from "./components/PhoneSignIn";
import firebase from "@react-native-firebase/app";
export default function App() {
  const reactNativeFirebaseConfig = {
    apiKey: "AIzaSyBmLFvFHkKuxLJmc8z4RDVpWA1S7uKYDUo",
    databaseURL: "https://bloom-6e4af.firebaseio.com",
    projectId: "bloom-6e4af",
    storageBucket: "",
    messagingSenderId: "",
    appId: "1:917777202606:android:5d002644baa0752e93dc3f",
  };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(reactNativeFirebaseConfig);
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollView}>
        <Counter />
        <Map />
        <StatusBar style="auto" />
        <PhoneSignIn />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
