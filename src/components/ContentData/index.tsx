/* eslint-disable react/require-default-props */
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

import { styles } from "./styles";

type ContentDataProps = {
  colorsGradient: string[];
  dataValue: string;
  subString?: string;
};

export function ContentData({
  colorsGradient,
  dataValue,
  subString,
}: ContentDataProps) {
  return (
    <LinearGradient
      style={styles.container}
      colors={colorsGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <Text style={styles.text}>{dataValue}</Text>
        {subString && <Text style={styles.subString}>{subString}</Text>}
      </View>
    </LinearGradient>
  );
}
