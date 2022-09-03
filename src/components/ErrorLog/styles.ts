import { theme } from '@themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.red_secundary,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: theme.colors.red,
  }
});