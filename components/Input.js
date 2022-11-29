import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = props =>{
  return(
    <TextInput {...props} style={{...styles.input, ...props.style}} />
  )
}

export default Input

const styles =StyleSheet.create({
  input:{
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 10,
    fontWeight: "bold"
  }
})