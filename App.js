import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import colors from './constants/colors';

export default function App() {
  return (
    <LinearGradient style={styles.screen} colors={[colors.accent, colors.primary]}>
      <ImageBackground
      source={require("./assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.screen}
      imageStyle={styles.backgroundImageStyle}
    >
      <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  },
  backgroundImageStyle:{
    opacity: 0.15
  }
});
