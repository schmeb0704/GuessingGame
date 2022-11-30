import {View, Text, Pressable, StyleSheet} from "react-native"
import colors from "../constants/colors"

export default function PrimaryButton(props){
  return(
    <View style={{...styles.outerContainer, ...props.style}}>
      <Pressable 
        onPress={props.handlePress} 
        style={({pressed})=> pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer}
        android_ripple={{color: "gray"}}
      >
        <Text style={styles.text}>{props.children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  innerContainer:{
    paddingHorizontal: 16,
    paddingVertical: 8,
    
  },
  outerContainer:{
    borderRadius: 28,
    margin: 4,
    elevation: 25,
    overflow: "hidden"
  },
  text:{
    color: "white"
  },
  pressed:{
    opacity: 0.75
  }
})