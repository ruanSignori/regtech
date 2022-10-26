import { theme } from '@themes/colors';
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({  
  container: {
    flex: 1,
    borderRadius: 12,
    marginTop: getBottomSpace() + 30,
    marginHorizontal: 10,
  },
  containerLoading: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 300,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.colors.white_secundary,
    shadowOffset: {
      width: 30,
      height: 10,
    },
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 50,
  },
  title: {
    alignSelf: 'center',
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 18,
  }
});