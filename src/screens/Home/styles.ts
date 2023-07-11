import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: theme.colors.GRAY_700,
    alignItems: "center",
    paddingBottom: 50,
  },

  logo: {
    width: 110,
    height: 32,
  },
});
