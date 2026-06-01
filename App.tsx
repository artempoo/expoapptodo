import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import { COLORS } from "./constants/ui";
import UITask from "./components/Task";
import { tasksData } from "./constants/data";
import UITaskForm from "./components/TaskForm";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useRef } from "react";

export default function App() {
  const [tasks, setTasks] = useState(tasksData);
  const refTaskList = useRef<FlatList>(null);

  const handlerAddTask = (title: string) => {
    setTasks((tasklist) => [
      ...tasklist,
      {
        id: String(tasks.length + 1),
        title: title,
        completed: false,
      },
    ]);

    setTimeout(() => {
      refTaskList.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const handleCompletedTask = (id: string) => {
    const newTaskList = tasks.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }

      return item;
    });

    setTasks(newTaskList);
  };

  const handlerDeleteTask = (id: string) => {
    const updateTaskList = tasks.filter((item) => item.id !== id);
    setTasks(updateTaskList);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#ff0" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <FlatList
          ref={refTaskList}
          style={styles.taskList}
          keyExtractor={(item) => item.id + item.title}
          data={tasks}
          renderItem={({ item }) => (
            <UITask
              deleteTask={handlerDeleteTask}
              completedTask={handleCompletedTask}
              task={item}
            />
          )}
        />

        <UITaskForm addTask={handlerAddTask} />
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 60,
    flex: 1,
    alignItems: "stretch", // Выравнивает инпут и кнопку по вертикали по центру
    justifyContent: "space-between",
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
  taskList: {
    maxHeight: 600,
  },
});
