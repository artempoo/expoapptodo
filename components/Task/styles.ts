import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/ui";

export const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: COLORS.BUTTON,
    borderRadius: 12,
    margin: 10,
    marginBottom: 2,
    paddingLeft: 14,
    paddingRight: 14,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    gap: 6,
  },
  taskItemComplited: {
    backgroundColor: COLORS.HIGHLIGHT,
    borderColor: COLORS.BUTTON,
    borderStyle: "solid",
    borderWidth: 2,
  },
  taskItemText: {
    color: COLORS.BUTTON_TEXT,
  },
  itemTextComplited: {
    color: COLORS.BUTTON,
    fontStyle: "italic",
  },
  headline: {
    flex: 1,
    marginLeft: 10,
  },
  taskCheckBox: {
    borderWidth: 2,
    backgroundColor: COLORS.MAIN,
    borderStyle: "solid",
    borderColor: COLORS.SECONDARY,
    borderRadius: 30,
    width: 26,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  taskCompleted: {
    backgroundColor: COLORS.HIGHLIGHT,
    borderColor: COLORS.BUTTON,
  },
  trash: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: COLORS.BUTTON,
    alignItems: "center",
    justifyContent: "center",
  },
});
