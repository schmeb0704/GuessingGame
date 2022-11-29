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
import PrimaryButton from "../components/PrimaryButton";

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
        <PrimaryButton style={{backgroundColor: colors.accent}}>
          Reset
        </PrimaryButton>
        <PrimaryButton style={{backgroundColor: colors.primary}}>
          Confirm
        </PrimaryButton>
      
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
  input:{
    width: 50,
    textAlign: "center",
    fontSize: 32,
    color: "green"
  }
})