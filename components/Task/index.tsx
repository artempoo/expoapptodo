import { View, Text, TouchableOpacity } from "react-native";
import { Task } from "../../types";
import { COLORS } from "../../constants/ui";
import { Check, Trash } from "lucide-react-native";
import { styles } from "./styles";

type TaskProps = {
  task: Task;
  completedTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export default function UITask({
  task: { id, title, completed },
  completedTask,
  deleteTask,
}: TaskProps) {
  const handleCheckBox = () => {
    completedTask(id);
  };

  const handleDelete = () => {
    deleteTask(id);
  };
  return (
    <View style={[styles.taskItem, completed && styles.taskItemComplited]}>
      <TouchableOpacity
        onPress={handleCheckBox}
        style={[styles.taskCheckBox, completed && styles.taskCompleted]}
      >
        {completed && (
          <Check style={{ marginTop: 2 }} color={COLORS.BUTTON} size={20} />
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.taskItemText,
          styles.headline,
          completed && styles.itemTextComplited,
        ]}
      >
        {title}
      </Text>

      <TouchableOpacity onPress={handleDelete}>
        <View>
          <Trash
            color={`${completed ? COLORS.BUTTON : COLORS.HIGHLIGHT}`}
            size={22}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
