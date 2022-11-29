import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ProgressViewIOSComponent,
} from "react-native"

export default function Header(props){
  return(
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#f7q87b",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle:{
    color: "black",
    fontSize: 18
  }
})