import { theme } from '@themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 16,
    marginTop: 30,
  },
  text: {
    maxWidth: '100%',
    fontSize: 17,
    fontWeight: '400', 
    color: theme.colors.text_secundary,
    lineHeight: 28,
  },
});