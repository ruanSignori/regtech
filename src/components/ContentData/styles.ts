import { StyleSheet } from "react-native";

import { theme } from "@themes/colors";

export const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
  },
  gradientContainer: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 130,
    shadowOffset: {
      width: 30,
      height: 10,
    },
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 50,
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
