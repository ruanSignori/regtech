import { theme } from '@themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderWidth: 2,
    borderColor: theme.colors.gray_secundary,
    borderRadius: 10,
  },
});