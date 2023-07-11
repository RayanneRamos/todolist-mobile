import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 64,
  },

  emptyContainer: {
    alignItems: "center",
    paddingTop: 48,
    borderTopColor: theme.colors.GRAY_400,
    borderTopWidth: 1,
    transform: [{ scaleY: -1 }],
  },

  emptyIcon: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },

  title: {
    fontWeight: "bold",
    color: theme.colors.GRAY_300,
  },

  subtitle: {
    color: theme.colors.GRAY_300,
  },
});
