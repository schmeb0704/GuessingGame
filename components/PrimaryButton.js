import {View, Text} from "react-native"

export default function PrimaryButton(props){
  return(
    <View>
      <Text>{props.children}</Text>
    </View>
  )
}