import { theme } from '@themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: 'flex-start'
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    fontSize: 14,
    borderWidth: 2,
    borderColor: theme.colors.gray,
    marginBottom: 8,
  },
});