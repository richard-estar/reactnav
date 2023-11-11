import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ShoppingCartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Produto Exemplo 1',
      price: 99.99,
    },
    {
      id: 2,
      name: 'Produto Exemplo 2',
      price: 79.99,
    },
  ]);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleFinishPurchase = () => {
    // Implemente a lógica para finalizar a compra aqui
    console.log('Compra finalizada');
  };

  return (
    <ScrollView style={styles.container}>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.productItem}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => handleRemoveItem(item.id)}
          >
            <Text style={styles.removeButtonText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalValue}>R$ {calculateTotal()}</Text>
      </View>
      <TouchableOpacity style={styles.finishButton} onPress={handleFinishPurchase}>
        <Text style={styles.finishButtonText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#950000',
    padding: 10,
    borderRadius: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  finishButton: {
    backgroundColor: '#950000',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

