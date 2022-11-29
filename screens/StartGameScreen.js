import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native"
import colors from "../constants/colors";

import Card from "../components/Card";
import Input from "../components/Input";

export default function StartGameScreen(){
  const [enteredValue, setEnteredValue] = React.useState("")

  function numberInputHandler(inputText){
    setEnteredValue(inputText.replace(/[^0-9]/g, ""))
  }


  return(
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss()
    }}>

    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input 
        style={styles.input} 
        blurOnSubmit 
        autoCapitalize="none" 
        autoCorrect={false} 
        keyboardType="number-pad"
        maxLength={2}
        onChangeText={numberInputHandler}
        value={enteredValue}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Reset" color={colors.accent} /></View>
          <View style={styles.button}><Button title="Confirm" color={colors.primary}/></View>
        </View>
      </Card>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer:{
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  title:{
    fontSize: 20,
    marginVertical: 10,

  },
  inputContainer:{
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  button:{
    width: 100
  },
  input:{
    width: 50,
    textAlign: "center"
  }
})