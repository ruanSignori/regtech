import { theme } from '@themes/colors';
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getBottomSpace() + 50,
  },
  contentList: {
    paddingHorizontal: 24,
  },
  title: {
    color: theme.colors.green_secundary,
    fontWeight: 'bold',
    fontSize: 36,
    padding: 5,
  },
});