import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import auth from "@react-native-firebase/auth";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
function PhoneSignIn() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        console.log("User not logged in");
      }
    });
  }, []);
  const recaptchaVerifier = React.useRef(null);
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState("");
  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
    }
  }
  if (user != null) {
    return (
      <View>
        <Text>{user.phoneNumber}</Text>
        <Button
          title="Logout"
          onPress={() => {
            auth().signOut();
            setUser(null);
          }}
        ></Button>
      </View>
    );
  }
  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber("+1 8765655514")}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={(text) => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

export default PhoneSignIn;
