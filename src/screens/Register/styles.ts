import { theme } from '@themes/colors';
import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight(),
    paddingBottom: getBottomSpace(),
  },
  animation: {
    width: 300,
  },
  heading: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 30,
    color: theme.colors.text,
  },
  form: {
    marginTop: height * 0.03, // 3% da altura total
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