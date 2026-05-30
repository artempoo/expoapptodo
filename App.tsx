import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const handlerButton = () => {
    console.log("кнопка работает");
  };
  return (
    <View style={styles.container}>
      <Text>TODO app | мое первое приложение</Text>
      <Image src="./assets/icon.png" style={{ width: 200, height: 200 }} />
      <TouchableOpacity style={styles.button} onPress={handlerButton}>
        <Text style={styles.buttonText}>Нажми на меня</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#f00",
  },
});
