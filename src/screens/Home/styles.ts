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

  wrapper: {
    flex: 0.8,
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: "86%",
    padding: 24,
    backgroundColor: theme.colors.GRAY_600,
  },

  inputContainer: {
    flexDirection: "row",
    marginTop: -56,
    marginBottom: 32,
    width: "100%",
  },

  input: {
    height: 56,
    padding: 16,
    borderRadius: 5,
    flex: 1,
    marginRight: 8,
    color: theme.colors.GRAY_100,
    backgroundColor: theme.colors.GRAY_500,
  },

  button: {
    height: 56,
    width: 56,
    backgroundColor: theme.colors.BLUE_DARK,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },

  buttonIcon: {
    height: 16,
    width: 16,
  },
});
