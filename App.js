import { StyleSheet, View } from 'react-native';
import Header from "./components/Header"


export default function App() {
  return (
    <View sytl={styles.screen}>
      <Header title="Guessing a number" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  }

});
