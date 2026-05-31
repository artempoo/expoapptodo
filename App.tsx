import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import { COLORS } from "./constants/ui";
import UITask from "./components/Task";
import { tasksData } from "./constants/data";
import UITaskForm from "./components/TaskForm";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id + item.title}
        data={tasksData}
        renderItem={({ item }) => <UITask task={item} />}
      />

      <UITaskForm />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  button: {
    backgroundColor: COLORS.BUTTON,
    padding: 20,
    borderRadius: 30,
    borderStyle: "solid",
  },
  buttonText: {
    color: COLORS.BUTTON_TEXT,
  },
});
