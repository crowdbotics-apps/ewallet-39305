import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Image, StyleSheet, Text } from 'react-native';

const AddProductScreen = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {// Add product logic here
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Add a new product</Text>
      <TextInput style={styles.input} placeholder="Product Name" value={productName} onChangeText={setProductName} />
      <TextInput style={styles.input} placeholder="Product Description" value={productDescription} onChangeText={setProductDescription} />
      <TextInput style={styles.input} placeholder="Product Price" value={productPrice} onChangeText={setProductPrice} keyboardType="numeric" />
      <Button title="Add Product" onPress={handleAddProduct} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10
  }
});
export default AddProductScreen;