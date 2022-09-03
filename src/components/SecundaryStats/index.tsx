import React from "react";
import { View, Text, ViewProps } from "react-native";

import { theme } from "@themes/colors";
import { styles } from "./styles";

type SecundaryStatsProps = {
  title: string;
  valueData: string;
  colorData?: string | undefined;
} & ViewProps;

export function SecundaryStats({
  title,
  valueData,
  colorData = theme.colors.text,
  children,
}: SecundaryStatsProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.contentIcon}>
        <Text>{children}</Text>
      </View>
      <View style={styles.infoData}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.valueData, { color: colorData }]}>
          {valueData}
        </Text>
      </View>
    </View>
  );
}
