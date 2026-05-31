import { View, Text } from "react-native";
import { Task } from "../../types";
import { COLORS } from "../../constants/ui";
import { Check, Trash } from "lucide-react-native";
import { styles } from "./styles";

type TaskProps = {
  task: Task;
};

export default function UITask({ task: { title, completed } }: TaskProps) {
  return (
    <View style={[styles.taskItem, completed && styles.taskItemComplited]}>
      <View style={[styles.taskCheckBox, completed && styles.taskCompleted]}>
        {completed && (
          <Check style={{ marginTop: 2 }} color={COLORS.BUTTON} size={20} />
        )}
      </View>
      <Text
        style={[
          styles.taskItemText,
          styles.headline,
          completed && styles.itemTextComplited,
        ]}
      >
        {title}
      </Text>

      <View>
        <Trash
          color={`${completed ? COLORS.BUTTON : COLORS.HIGHLIGHT}`}
          size={22}
        />
      </View>
    </View>
  );
}
