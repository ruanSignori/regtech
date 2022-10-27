import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "@themes/colors"

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: getStatusBarHeight() * 2,
    paddingBottom: getBottomSpace(),
    paddingHorizontal: 20,
  },
  animation: {
    width: 300,
    marginTop: - getStatusBarHeight(),
    marginBottom: 5,
  },
  heading: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 30,
    color: theme.colors.text,
    marginTop: - (getBottomSpace() + 50),
    marginBottom: 12,
  },
  text: {
    color: theme.colors.gray,
    fontSize: 16,
    marginVertical: 8,
  },
  signInWith: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: getBottomSpace() + '3%'
  },
  others: {
    justifyContent: "space-between",
    marginBottom: getBottomSpace() + '10%',
    flexDirection: "row",
    width: "100%",
  },
  otherIcons: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    marginRight: 5,
  },
});