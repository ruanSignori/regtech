import { 
  Poppins_300Light, 
  Poppins_400Regular, 
  Poppins_700Bold, 
  useFonts 
} from '@expo-google-fonts/poppins';
import { theme } from '@themes/colors';
import React from 'react';
import { ScrollView, View, Text, SafeAreaView, ActivityIndicator } from 'react-native';


import { styles } from './styles';

export function Home() {

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

  const toolsUsed = [
    { key: "Placa heltec wi-fi lora 32" },
    { key: "Arduino IDE" },
    { key: "Motor vc" },
    { key: "Impressora 3D" },
    { key: "Sensor de umidade" },
    { key: "Sensor de temperatura" },
    { key: "Firebase" },
    { key: "React Native" },
  ];

  const students = [
    { name: "Ana Maria Zart" },
    { name: "Carolina da Silva Pereira" },
    { name: "David Martins" },
    { name: "Emerson Soares Maciel" },
    { name: "Éricka Caroliny Roque" },
    { name: "Fabiola Wunsch" },
    { name: "Gislaine Schmitz" },
    { name: "Hellen Borges de Vargas" },
    { name: "Jadi Maristane Weber" },
    { name: "Julia Prado Marques" },
    { name: "Jusseli Amanda Magedanz" },
    { name: "Kailane Silvestre da Luz" },
    { name: "Ketlin Daniele Freisleben" },
    { name: "Latifa Plas de Oliveira" },
    { name: "Luana Olinda Kuhn" },
    { name: "Luiza Eduarda Nicoletti"}
  ];

  return (
    <ScrollView style={styles.container} >
      <View style={styles.content}>
          <Text style={styles.title}>RegTech</Text>
          <Text style={styles.subTitle}>Como surgiu?</Text>
          <Text style={styles.text}>
            A turma 301, da Escola Estadual de Educação Básica Padre Fernando com o professor Igor dos Santos, no componente curricular de Linguagem Matemática e
            Tecnológica, em conjunto com a professora Ana Maria Sandri Ribas do Amaral na
            matéria Monitoramento Ambiental. Foi desenvolvido em Aula o Projeto REGTECH. O aplicativo foi desenvolvido pelo aluno Ruan Signori, da turma 303
          </Text>
          <Text style={styles.subTitle}>Objetivos do projeto</Text>
          <Text style={styles.text}>
            Essa pesquisa tem como objetivo apresentar um protótipo de uma estufa
            automatizada de baixo custo com uso de Internet das Coisas (IoT), para controle,
            informação e visualização de dados. Essa pesquisa foi desenvolvida com uso de
            microcontrolador com conexão Wi-Fi, além de sensores e atuadores responsáveis
            por mensurar e manter a estufa em seu funcionamento ideal para o cultivo de
            plantas. Neste projeto, utiliza-se um banco de dados em tempo real oferecido pelo
            aplicativo REGTECH para armazenar os dados coletados, acompanhar o
            funcionamento de todos os sensores e atuadores. Com isso, é possível controlar a
            umidade do solo, temperatura e luminosidade do ambiente, através do protótipo, o
            qual foi utilizado para controle e visualização das variáveis do nosso sistema em
            tempo real visando comodidade e praticidade para o usuário
          </Text>
          <Text style={styles.subTitle}>Materiais que foram utilizados</Text>
          <View>
          {toolsUsed.map((item, index) => (
            <Text style={[styles.text, { marginBottom: 8 }]} key={index}>{`\u2022 ${item.key}`}</Text>
          ))}
          </View>
          <Text style={[styles.subTitle, { marginBottom: 30 }]}>
            Em aula foram abordados os estudos de lógica de programação e tipos de solo com
            a participação dos Alunos
          </Text>
          <View style={styles.credits}>
            {students.map((item, index) => (
              <Text style={[styles.text, {textAlign: 'center', marginBottom: 8}]} key={index}>{item.name}</Text>
            ))}
          </View>
        </View>
    </ScrollView>    
  );
}