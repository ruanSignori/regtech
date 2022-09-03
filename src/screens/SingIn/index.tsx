import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Lottie from "lottie-react-native";
import WelcomeAnimation from '../../assets/animations/welcome.json'
import { styles } from './styles';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Input } from '@components/Input';
import { useNavigation } from "@react-navigation/native";
import { ButtonSubmit } from '@components/Button';
import { BoxSingIn } from '@components/BoxSingIn';
import { theme } from '@themes/colors';
import { useAuth } from '@hooks/useAuth';
import { ErrorLog } from '@components/ErrorLog';

export function SingIn() {
  const { signInWithEmail, signInAnonymous, resetPassword } = useAuth()
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("")

  const navigation = useNavigation();

  const handleOpenScreen = () => {
    navigation.navigate("register");
  };

  const handleSignIn = async () => {
    setIsLoading(true)
    try {
      await signInWithEmail(email, password)
    } catch(error) {
      const { message }: any = error;
      setErrorMsg(message as string)
    }

    setIsLoading(false)
  }
  const handleSignInAnonymous = async () => {
    setIsLoading(true)
    await signInAnonymous()
    setIsLoading(false)
  }

  const handleForgotPassword = async () => {
    await resetPassword(email);
  }

  return (
    <View style={styles.container}>
      <Lottie
        source={WelcomeAnimation}
        style={styles.animation}
        autoPlay
        loop
        resizeMode="contain"
      />
      <Text style={styles.heading}>Entrar</Text>
      <Input placeholder='E-mail' value={email} onChangeText={setEmail} />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {errorMsg.length > 1 && (
        <ErrorLog msg={errorMsg} />
      )}

      <ButtonSubmit title='Entrar' onPress={() => handleSignIn()} isLoading={isLoading}/>
      <Text style={styles.text}>ou, entre com...</Text>
      
      <View style={styles.signInWith}>
        <BoxSingIn
          disabled={isLoading}
          onPress={() => handleSignInAnonymous()}
        >
          <FontAwesome name="user-secret" size={32} color={theme.colors.text} />
        </BoxSingIn>
      </View>

      <View style={styles.others}>
        <TouchableOpacity
          style={styles.otherIcons}
          onPress={() => handleOpenScreen()}
        >
          <MaterialCommunityIcons
            name="account-plus"
            size={24}
            color={theme.colors.text}
            style={styles.icons}
          />
          <Text>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.otherIcons}
          onPress={() => handleForgotPassword()}
        >
          <Ionicons
            name="mail"
            size={24}
            color={theme.colors.text}
            style={styles.icons}
          />
          <Text>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}