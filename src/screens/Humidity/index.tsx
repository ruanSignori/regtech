import BottomSheetData from '@components/BottomSheetData';
import { ContentData } from '@components/ContentData';
import { SecundaryStats } from '@components/SecundaryStats';
import Feather from '@expo/vector-icons/build/Feather';
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import Ionicons from "@expo/vector-icons/Ionicons"
import { onValue, ref, database } from '@services/firebase';
import { theme } from '@themes/colors';
import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native';

import { styles } from './styles';

type DataFirebase = {
  humidity: number | null;
  temperature: number | null;
};

export function Humidity() {
  const [humidity, setHumidity] = useState<number | null>(
    null
  );

  const { green_secundary, green_thir } = theme.colors;

  const handleLevelHumidity = useMemo(() => {
    if (typeof humidity !== 'number') return;

    if (humidity <= 50) return 'Baixo';
    if (humidity <= 70) return 'Razoável';
    else return 'Alto';
      
  }, [humidity]);

  const handleColorOfValue = useMemo(() => {
    if (typeof handleLevelHumidity !== 'string') return;

    switch (handleLevelHumidity) {
      case "Baixo":
        return theme.colors.red_third
      case "Razoável":
        return theme.colors.green_secundary;
      case "Alto":
        return theme.colors.brand;
      default:
        return theme.colors.brand
    }
  }, [handleLevelHumidity]);

  useEffect(() => {
    const statsGardenRef = ref(database, "/stats_garden");

    onValue(statsGardenRef, (value: { val: () => DataFirebase; }) => {
      const { humidity }: DataFirebase = value.val();
      setHumidity(humidity);
    });

    return () => {
      setHumidity(null);
    };
  }, []);

  return (
    <>
      {humidity === null ? (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" color={theme.colors.brand} />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.content}>
          <Text style={styles.title}>Umidade do Solo</Text>
          <View style={styles.parentContent}>
            <ContentData
              colorsGradient={[green_secundary, green_thir]}
              dataValue={humidity.toString()}
              subString="%"
              boxShadow={theme.colors.green_secundary}
            />
          </View>
          <View style={styles.location}>
            <Ionicons
              name="location-sharp"
              size={24}
              color={theme.colors.night_blue}
            />
            <Text style={styles.textLocation}>E. E. E. B. Padre Fernando</Text>
          </View>
          <BottomSheetData>
            <SecundaryStats
              title='Nível da umidade'
              valueData={handleLevelHumidity as string}
              colorData={handleColorOfValue as string}
            >
              <MaterialIcons
                name="waves"
                size={24}
                color={theme.colors.night_blue}
              />
            </SecundaryStats>
            <SecundaryStats
              title="Tempo neste nível"
              valueData="22m"
              colorData={theme.colors.night_blue}
            >
              <Feather name="clock" size={24} color={theme.colors.night_blue} />
            </SecundaryStats>
          </BottomSheetData>
        </SafeAreaView>
      )}
    </>
  );
}