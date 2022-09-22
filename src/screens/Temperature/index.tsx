import BottomSheetData from '@components/BottomSheetData';
import { ContentData } from '@components/ContentData';
import { SecundaryStats } from '@components/SecundaryStats';
import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { database, onValue, ref } from '@services/firebase';
import { theme } from '@themes/colors';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';

import { styles } from './styles';

type TemperatureTypes = {
  celsius: number | null;
  fahrenheit: number | null;
};


export function Temperature() {
  const [temperature, setTemperature] = useState<TemperatureTypes | null>(null);

  const handleLevelTemperature = useMemo(() => {
    if (typeof temperature?.celsius !== "number") return;

    const value = temperature.celsius <= 33 ? "Baixo" : "Alto";
    return value;
  }, [temperature?.celsius]);

  const handleColorOfValue = useMemo(() => {
    if (typeof handleLevelTemperature !== 'string') return;

    switch (handleLevelTemperature) {
      case "Baixo":       
        return theme.colors.brand
      case "Alto":
        return theme.colors.red_third
      default:
        return theme.colors.text
    }
  }, [handleLevelTemperature])

  const formatValue = useCallback((data: number | null) => {
    if (data === null) return;

    const fixedNumber = data.toFixed();
    return fixedNumber.toString();
  }, [temperature]);

  useEffect(() => {
    const statsGardenRef = ref(database, "/stats_garden");

    onValue(statsGardenRef, (dataFirebase) => {
      const data = dataFirebase.val();
      const { temperature_in_celsius, temperature_in_fahrenheit } = data;
      
      setTemperature({
        celsius: temperature_in_celsius || null,
        fahrenheit: temperature_in_fahrenheit || null
      });
    });

    return () => {
      setTemperature(null);
    };
  }, []);

  return (
    <>
      {temperature === null ? (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" color={theme.colors.brand} />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.content}>
          <Text style={styles.title}>Temperatura ambiente</Text>
          <View style={styles.parentContent}>
            <ContentData
              colorsGradient={['#2B32B2','#eb0a86']}
              dataValue={formatValue(temperature.celsius) as string}
              subString="°C"
              boxShadow='#eb0a86'
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
              title='Temperatura em fahrenheit'
              valueData={`${temperature.fahrenheit} °F`}
              colorData={theme.colors.brand}
            >
              <MaterialCommunityIcons 
                name="car-brake-temperature" 
                size={24} 
                color={theme.colors.night_blue} 
              />
            </SecundaryStats>
            <SecundaryStats
              title='Nível da temperatura'
              valueData={handleLevelTemperature as string}
              colorData={handleColorOfValue as string}
            >
              <FontAwesome5 
                name="temperature-high" 
                size={24} 
                color={theme.colors.night_blue}
              />
            </SecundaryStats>
          </BottomSheetData>
        </SafeAreaView>
      )}
    </>
  );
}