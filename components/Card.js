import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CardScreen({ navigation }) {

  const handleCardPress = (cardNumber) => {
    console.log(`Card ${cardNumber} Pressed`);
    // Adicione a lógica desejada ao pressionar um card
    
  };

  const handleEntrarPress = () => {
    console.log('Entrar Pressed');
    // Adicione a lógica desejada ao pressionar o botão "Entrar"
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Pais')}>
        <Image
          source={require('./logo.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>Selecione por Pais</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => handleCardPress(2)}>
        <Image
          source={require('./logo.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>Selecione por tipo de uva</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => handleCardPress(3)}>
        <Image
          source={require('./logo.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>Selecione por Harmonização</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleEntrarPress}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    padding: 20,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
    marginTop: 10,
  },
  footer: {
    backgroundColor: '#950000',
    padding: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#950000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
