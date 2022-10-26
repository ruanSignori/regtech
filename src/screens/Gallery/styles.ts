import { theme } from '@themes/colors';
import { StyleSheet, Dimensions } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: getBottomSpace() + (height * 0.07),
    marginBottom: getBottomSpace() + 10
  },
  title: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 24,
    padding: 5,
    marginHorizontal: 20
  },
  description: {
    maxWidth: '100%',
    fontSize: 17,
    marginHorizontal: 20,
    fontWeight: '400', 
    color: theme.colors.text_secundary,
    lineHeight: 24,
  }
});