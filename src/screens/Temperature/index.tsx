import { database, onValue, ref } from '@services/firebase';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type DataFirebase = {
  humidity: number | null;
  temperature: number | null;
};

export function Temperature() {

  const [temperature, setTemperature] = useState<number | null>(null)

  useEffect(() => {
    const statsGardenRef = ref(database, "/stats_garden");

    onValue(statsGardenRef, (value) => {
      const { temperature }: DataFirebase = value.val();
      setTemperature(temperature);
    });

    return () => {
      setTemperature(null);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text>{temperature}</Text>
    </View>
  );
}