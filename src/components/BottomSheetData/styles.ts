import { theme } from '@themes/colors';
import { StyleSheet } from 'react-native';
import { getBottomSpace } from "react-native-iphone-x-helper";


export const styles = StyleSheet.create({
  buttonOpenModal: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    right: 16,
    bottom: getBottomSpace() + 22,
  },
  modal: {
    backgroundColor: theme.colors.white,
    paddingBottom: getBottomSpace() + 16,
  },
  indicator: {
    backgroundColor: theme.colors.text,
    width: 56,
  },
  title: {
    marginLeft: 16,
    marginTop: 2,
    marginBottom: 16,
    color: theme.colors.night_blue,
    fontSize: 19,
  },
  contentBottomSheet: {
    paddingTop: 16,
    paddingHorizontal: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});