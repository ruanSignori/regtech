import { StyleSheet } from "react-native";

import { theme } from "@themes/colors";

export const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 130,
    shadowColor: theme.colors.text,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.white,
    fontSize: 100,
    fontWeight: "bold",
  },
  subString: {
    color: theme.colors.white,
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 40,
  },
});
