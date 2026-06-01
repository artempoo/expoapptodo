import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/ui";

export const styles = StyleSheet.create({
  formBlock: {
    paddingTop: 16,
    paddingBottom: 16,
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
  },
  formInput: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: COLORS.BUTTON,
    padding: 10,
    borderRadius: 8,
    paddingLeft: 14,
    backgroundColor: COLORS.BUTTON_TEXT,
    marginRight: 12,
  },
  submit: {
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.TERTIARY,
    borderRadius: 8,
  },
});
