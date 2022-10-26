import React from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native'
import { styles } from './styles';
import { 
  Poppins_400Regular, 
  useFonts 
} from '@expo-google-fonts/poppins';
import { theme } from '@themes/colors';

type ContentTextProps = {
  title?: string;
  description?: string | string[];
};

export function ContentText({ title, description }: ContentTextProps) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" color={theme.colors.brand} />
      </SafeAreaView>
    )
  };

  return (
    <>
      <Text style={[styles.title]}>{title}</Text>
      <Text style={styles.text}>{description}</Text>      
    </>
  );
}