import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, secureTextEntry }) => {
  return <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Input;
