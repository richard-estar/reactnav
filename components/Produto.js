import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProductCard({ onBuyPress }) {
  const handleBuyPress = () => {
    onBuyPress();
  };

  const handleBackPress = () => {
    console.log('Botão Voltar Pressionado');
    // Adicione a lógica desejada para a ação de voltar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produto Exemplo</Text>

      <Image
        source={require('./logo.png')} // Substitua pelo caminho da imagem do produto
        style={styles.productImage}
      />

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Descrição do Produto:</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem vel odio
          vestibulum convallis eu ac metus.
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Nome:</Text>
          <Text style={styles.infoValue}>Produto Exemplo</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Preço:</Text>
          <Text style={styles.infoValue}>R$ 99,99</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.buyButton} onPress={handleBuyPress}>
        <Text style={styles.buyButtonText}>Comprar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoItem: {
    flex: 1,
    marginRight: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: '#950000',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: 200,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    width: 200,
  },
  backButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
