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
