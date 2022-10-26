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

export const Description = [
  { 
    title: 'Como surgiu', 
    data: 'A turma 301, da Escola Estadual de Educação Básica Padre Fernando com o professor Igor dos Santos, no componente curricular de Linguagem Matemática e Tecnológica, em conjunto com a professora Ana Maria Sandri Ribas do Amaral na matéria Monitoramento Ambiental. Foi desenvolvido em Aula o Projeto REGTECH. O aplicativo foi desenvolvido pelo aluno Ruan Signori, da turma 303' 
  },
  { 
    title: 'Objetivos do projeto', 
    data: 'Essa pesquisa tem como objetivo apresentar um protótipo de uma estufa automatizada de baixo custo com uso de Internet das Coisas (IoT), para controle, informação e visualização de dados. Essa pesquisa foi desenvolvida com uso de microcontrolador com conexão Wi-Fi, além de sensores e atuadores responsáveis por mensurar e manter a estufa em seu funcionamento ideal para o cultivo de plantas. Neste projeto, utiliza-se um banco de dados em tempo real oferecido pelo aplicativo REGTECH para armazenar os dados coletados, acompanhar o funcionamento de todos os sensores e atuadores. Com isso, é possível controlar a umidade do solo, temperatura e luminosidade do ambiente, através do protótipo, o qual foi utilizado para controle e visualização das variáveis do nosso sistema em tempo real visando comodidade e praticidade para o usuário' 
  },
  {
    title: 'Materiais que foram utilizados',
    data: toolsUsed.map(({ key }) => `\u2022 ${key} \n`)
  },
  {
    title: 'Em aula foram abordados os estudos de lógica de programação e tipos de solo com a participação dos seguintes alunos:',
    data: students.map(({ name }) => `${name} \n`)
  }
]