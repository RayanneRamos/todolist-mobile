import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    backgroundColor: theme.colors.GRAY_400,
    marginBottom: 8,
  },

  circle: {
    width: 24,
    height: 24,
    marginRight: 16,
    borderRadius: 16,
  },

  emptyCircle: {
    borderWidth: 2,
    borderColor: theme.colors.BLUE_LIGHT,
  },

  checkedCircle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.PURPLE_LIGHT,
  },

  checkIcon: {
    width: 12,
    height: 9,
  },

  text: {
    flex: 1,
    textAlign: "left",
    color: theme.colors.GRAY_100,
  },

  strikeText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: theme.colors.GRAY_300,
  },

  trashIcon: {
    width: 20,
    height: 24,
    marginLeft: 16,
  },
});
