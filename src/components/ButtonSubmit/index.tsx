import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator } from "react-native";

import { theme } from "@themes/colors";
import { styles } from "./styles";

type ButtonSubmitProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function ButtonSubmit({
  title,
  isLoading = false,
  ...rest
}: ButtonSubmitProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
