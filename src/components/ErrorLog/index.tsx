import React, { ReactNode } from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

type ErrorLogProps = {
  msg: ReactNode;
}

export function ErrorLog({ msg }: ErrorLogProps) {
  return (
    <Text style={styles.container}>
      {msg}
    </Text>
  );
}