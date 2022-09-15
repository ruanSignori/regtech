import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Text, View, Animated } from "react-native";

import { styles } from "./styles";

type ContentDataProps = {
  colorsGradient: string[];
  dataValue: string;
  boxShadow: string;
  subString?: string;
};

export function ContentData({
  colorsGradient,
  dataValue,
  subString,
  boxShadow
}: ContentDataProps) {
  const size = 100;
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(0.2)).current;

  useEffect(() => {
    Animated.spring(progress, { toValue: 1, useNativeDriver: true }).start()
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start()
  }, []);

  return (
    <Animated.View 
      style={[
        styles.container, { 
          opacity: progress, 
          transform: [{ scale }],
          borderRadius: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [size / 4, size / 2],
          }),
        }
      ]} 
    >
      <LinearGradient
        style={[
          styles.gradientContainer, {
            shadowColor: boxShadow,
          }
        ]}
        colors={colorsGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.content}>
          <Text style={styles.text}>{dataValue}</Text>
          {subString && 
            <Text style={styles.subString}>{subString}</Text>}
        </View>
      </LinearGradient>
    </Animated.View>
  );
}
