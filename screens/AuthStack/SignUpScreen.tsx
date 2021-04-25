import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Appbar, TextInput, Snackbar, Button } from "react-native-paper";
import { AuthStackParamList } from "./AuthStackScreen";
import firebase from "firebase";

interface Props {
  navigation: StackNavigationProp<AuthStackParamList, "SignUpScreen">;
}

export default function SignUpScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  /* Screen Requirements:
      - AppBar
      - Email & Password Text Input
      - Submit Button
      - Sign In Button (goes to Sign In Screen)
      - Snackbar for Error Messages
  
    All UI components on this screen can be found in:
      https://callstack.github.io/react-native-paper/

    All authentication logic can be found at:
      https://firebase.google.com/docs/auth/web/start
  */

  const signup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        showError("failed to signup");
        // ..
      });
  };

  const showError = (error: string) => {
    setErrorMessage(error);
    setVisible(true);
  };

  const onDismissSnackBar = () => setVisible(false);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Create an Account" />
        </Appbar.Header>

        <TextInput
          label="Email"
          value={email}
          onChangeText={(name: any) => setEmail(name)}
          style={{
            backgroundColor: "white",
            marginTop: 30,
            marginBottom: 10,
            marginLeft: "7.5%",
            width: "85%",
          }}
        />
        <TextInput
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(name: any) => setPassword(name)}
          style={{
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 20,
            marginLeft: "7.5%",
            width: "85%",
          }}
        />

        <Button
          mode="contained"
          onPress={signup}
          style={{
            marginTop: 10,
            marginBottom: 20,
            marginLeft: "7.5%",
            width: "85%",
          }}
        >
          {"CREATE AN ACCOUNT"}
        </Button>

        <Button
          mode="outlined"
          onPress={() => {
            navigation.navigate("SignInScreen");
          }}
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: "7.5%",
            width: "85%",
          }}
        >
          {"OR, SIGN IN INSTEAD"}
        </Button>

        <Snackbar
          duration={3000}
          visible={visible}
          onDismiss={onDismissSnackBar}
        >
          {errorMessage}
        </Snackbar>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#ffffff",
  },
});
