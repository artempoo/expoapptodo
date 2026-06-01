import { View, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { COLORS } from "../../constants/ui";
import { SquarePen } from "lucide-react-native";
import { styles } from "./styles";
import { useState } from "react";
type UITaskFormProps = {
  addTask: (title: string) => void;
};

export default function UITaskForm({ addTask }: UITaskFormProps) {
  const [field, setField] = useState("");

  const handlerForm = () => {
    if (field.trim() === "") return;
    addTask(field);
    setField("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.formBlock}>
      <TextInput
        style={styles.formInput}
        value={field}
        onChangeText={(text) => setField(text)}
        placeholder="Создать задачу"
        autoFocus={false}
      />
      <TouchableOpacity style={styles.submit} onPress={handlerForm}>
        <SquarePen color={COLORS.BUTTON_TEXT} size={22} />
      </TouchableOpacity>
    </View>
  );
}
