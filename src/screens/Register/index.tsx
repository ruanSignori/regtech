import { useAuth } from '@hooks/useAuth';
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Lottie from "lottie-react-native";
import RegisterAnimation from '../../assets/animations/register.json';

import { styles } from './styles';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { ButtonSubmit } from '@components/ButtonSubmit';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import { theme } from '@themes/colors';

export function Register() {
  const { registerWithEmail } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("")
  const navigation = useNavigation();

  const handleRegisterAccount = async () => {
    setIsLoading(true);
    setErrorMsg("");

    try {
      await registerWithEmail(email, password);
    } catch (e) {
      const { message }: any = e;
      setErrorMsg(message as string);
    }

    setIsLoading(false);
  };

  const handleOpenScreen = () => {
    navigation.navigate("signIn");
  };

  
  return (
    <View style={styles.container}>
      <Lottie
        style={styles.animation}
        source={RegisterAnimation}
        autoPlay
        loop
        resizeMode="contain"
      />
      <Text style={styles.heading}>Registrar</Text>
      <View style={styles.form}>
        <Input
          errorEvent={errorMsg.length > 0}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          errorEvent={errorMsg.length > 0}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errorMsg.length > 1 && (
          <Text style={styles.errorMessage}>{errorMsg}</Text>
        )}
      </View>
      <ButtonSubmit
        title="Criar conta"
        isLoading={isLoading}
        onPress={() => handleRegisterAccount()}
        disabled={isLoading}
      />
      <TouchableOpacity
        onPress={() => handleOpenScreen()}
        style={styles.backScreen}
      >
        <AntDesign name="arrowleft" size={24} color={theme.colors.brand} />
        <Text style={styles.textButton}>Eu já tenho uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}

