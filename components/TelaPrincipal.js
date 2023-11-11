import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function MainScreen({ navigation }) {
  const handleEntrarPress = () => {
    // Adicione aqui a lógica para a ação de entrar
    console.log('Botão Entrar Pressionado');
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('./logo.png')} 
          style={styles.image}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleEntrarPress}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400, // Ajuste o tamanho da imagem 
    height: 400,
  },
  footer: {
    backgroundColor: '#950000', // Cor de fundo do rodapé
    padding: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff', // Cor de fundo do botão
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#950000', // Cor do texto do botão
    fontSize: 20,
    fontWeight: 'bold',
  },
});


