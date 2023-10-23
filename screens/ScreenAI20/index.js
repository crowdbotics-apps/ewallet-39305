import React from "react";
import { SafeAreaView, StyleSheet, View, TextInput, Button, Image, Text, TouchableOpacity } from "react-native";

const SignInScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button title="Sign In" />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? Sign Up</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    width: 150,
    height: 150
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5
  },
  forgotPassword: {
    textAlign: "right",
    color: "blue",
    marginBottom: 10
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36
  },
  footerText: {
    color: "blue"
  }
});
export default SignInScreen;