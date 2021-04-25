import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text } from "react-native";
import { Appbar, TextInput, Snackbar, Button } from "react-native-paper";
import { AuthStackParamList } from "./AuthStackScreen";
import firebase from "firebase";
// import { styles } from "./AuthStackScreen.styles";

interface Props {
  navigation: StackNavigationProp<AuthStackParamList, "SignInScreen">;
}

export default function SignInScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  /* Screen Requirements:
      - AppBar
      - Email & Password Text Input
      - Submit Button
      - Sign Up Button (goes to Sign Up screen)
      - Reset Password Button
      - Snackbar for Error Messages
  
    All UI components on this screen can be found in:
      https://callstack.github.io/react-native-paper/

    All authentication logic can be found at:
      https://firebase.google.com/docs/auth/web/starts
  */

  const showError = (error: string) => {
    setMessage(error);
    setVisible(true);
  };

  const onDismissSnackBar = () => setVisible(false);

  const signin = () => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setLoading(false);
      })
      .catch((error) => {
        showError(error.message);
        setLoading(false);
      });
  };

  const resetPassword = () => {
    setLoading(true);
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        showError("A password reset link has been sent to your email.");
        setLoading(false);
      })
      .catch(function (error) {
        showError(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Sign In" />
      </Appbar.Header>
      <SafeAreaView style={styles.container}>
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
          onPress={signin}
          style={{
            marginTop: 10,
            marginBottom: 20,
            marginLeft: "7.5%",
            width: "85%",
          }}
          loading={loading}
        >
          {"SIGN IN"}
        </Button>

        <Button
          mode="outlined"
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: "7.5%",
            width: "85%",
          }}
        >
          {"CREATE AN ACCOUNT"}
        </Button>

        <Button
          mode="outlined"
          color="grey"
          onPress={resetPassword}
          style={{
            marginLeft: "7.5%",
            width: "85%",
          }}
        >
          {"FORGOT PASSWORD"}
        </Button>

        <Snackbar
          duration={3000}
          visible={visible}
          onDismiss={onDismissSnackBar}
        >
          {message}
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
  view: {
    flex: 1,
    margin: 20,
  },
  subtitle: {
    color: "gray",
  },
});
