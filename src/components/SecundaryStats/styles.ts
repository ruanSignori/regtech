import { StyleSheet } from "react-native";

import { theme } from "@themes/colors";

export const styles = StyleSheet.create({
  container: {
    width: 200,
    flexDirection: "row",
  },
  contentIcon: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray_secundary,
    borderRadius: 50,
    marginRight: 8,
  },
  infoData: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 12,
    color: theme.colors.gray,
  },
  valueData: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
