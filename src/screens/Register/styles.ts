import { theme } from '@themes/colors';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from "react-native-iphone-x-helper";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight(),
    paddingBottom: 70,
    justifyContent: "flex-start",
  },
  animation: {
    width: 300,
    marginTop: -10,
  },
  heading: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 30,
    color: theme.colors.text,
  },
  form: {
    marginTop: 24,
    width: "100%",
  },
  backScreen: {
    flexDirection: "row",
    width: "48%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 24,
  },
  textButton: {
    fontWeight: "bold",
    color: theme.colors.brand,
    fontSize: 14,
  },
  errorMessage: {
    backgroundColor: theme.colors.red_secundary,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: theme.colors.red,
  },
});