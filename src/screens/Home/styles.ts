import { theme } from '@themes/colors';
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: getBottomSpace() + 50,
  },
  content: {
    alignItems: "flex-start",
    minHeight: '100%'
  },
  title: {
    marginVertical: 26,
    color: theme.colors.green_secundary,
    fontWeight: 'bold',
    fontSize: 36,
  },
  subTitle: {
    color: theme.colors.brand,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16,
    marginTop: 30,
  },
  text: {
    maxWidth: '80%',
    fontSize: 14, 
    color: theme.colors.text_secundary,
    lineHeight: 30,
  },
  credits: {
    width: '100%',
    marginBottom: 50,
  }
});