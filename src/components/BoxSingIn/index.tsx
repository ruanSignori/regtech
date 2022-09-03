import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type BoxSingInProps = {
  children: ReactNode
} & TouchableOpacityProps

export function BoxSingIn({ children, ...rest }: BoxSingInProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {children}
    </TouchableOpacity>
  );
}