import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function CountrySelectionScreen({ navigation }) {
  const handleCountrySelection = (country) => {
    console.log(`Selected country: ${country}`);
    // Adicione a lógica desejada ao selecionar um país
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./logo.png')} // Substitua pelo caminho da imagem do país produtor
          style={styles.image}
        />
        <Text style={styles.description}>Pais produtor</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleCountrySelection('Brasil')}>
          <Text style={styles.buttonText}>Brasil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCountrySelection('Chile')}>
          <Text style={styles.buttonText}>Chile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCountrySelection('Argentina')}>
          <Text style={styles.buttonText}>Argentina</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCountrySelection('Uruguai')}>
          <Text style={styles.buttonText}>Uruguai</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200, // Tamanho da imagem
    height: 200,
    borderRadius: 20, // Cantos arredondados
  },
  description: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    width: 200,
  },
  button: {
    backgroundColor: '#950000', // Cor de fundo do botão
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Alinhamento ao centro
  },
});
