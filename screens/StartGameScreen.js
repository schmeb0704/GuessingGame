import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
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

  function confirmNumber(){
    const chosenNumber = parseInt(enteredValue)

    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{text: "Okay", style: "destructive" , onPress: resetNumber}]
      )
      return
    } else{
      alert("valid number")
    }

    
  }

  function resetNumber(){
    setEnteredValue("")
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
        <PrimaryButton style={{backgroundColor: colors.accent}} handlePress={resetNumber}>
          Reset
        </PrimaryButton>
        <PrimaryButton style={{backgroundColor: colors.primary}} handlePress={confirmNumber}>
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
    marginTop: 36
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
    alignItems: "center",
    backgroundColor: colors.primary
  },
  input:{
    width: 50,
    textAlign: "center",
    fontSize: 32,
    color: "white"
  }
})