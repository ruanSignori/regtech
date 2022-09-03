import { theme } from '@themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.white_secundary,
  },
  title: {
    alignSelf: "flex-start",
    marginTop: "16%",
    marginLeft: 20,
    color: theme.colors.green,
    fontWeight: "bold",
    letterSpacing: 1.2,
    fontSize: 30,
  },
  parentContent: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 100,
  },
  location: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
    bottom: 30,
    position: "absolute",
  },
  textLocation: {
    marginLeft: 4,
    fontSize: 20,
    color: theme.colors.night_blue,
    fontWeight: "bold",
  },
});