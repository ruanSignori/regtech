import { Slider } from '@components/Slider';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Gallery() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confira algumas imagens</Text>
      <Text style={styles.description}>Inicialmente, os sensores eram utilizados na horta da escola. Depois, foi criado uma maquete, para ter mais portabilidade.</Text>
      <Slider />
    </View>
    
  );
}