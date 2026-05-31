import { Text, View, StyleSheet } from "react-native";

export default function UITaskForm() {
  return (
    <View style={styles.formBlock}>
      <Text>Форма</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  formBlock: {
    height: 200,
  },
});
