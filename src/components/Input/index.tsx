import React from 'react';
import { TextInput, TextInputProps, KeyboardAvoidingView } from "react-native";

import { theme } from "@themes/colors";
import { styles } from "./styles";

type InputProps = {
  errorEvent?: boolean;
} & TextInputProps;

export function Input({ errorEvent = false, ...rest }: InputProps) { 
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={errorEvent ? theme.colors.red_secundary : theme.colors.gray}
        {...rest}
      />
    </KeyboardAvoidingView>
  );
}