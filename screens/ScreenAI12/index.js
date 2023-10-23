import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const ProductDetails = () => {
  const product = {
    name: 'Product Name',
    description: 'This is a very nice product. It has many features and benefits. You will love using this product.',
    price: '$99.99',
    imageUrl: 'https://tinyurl.com/42evm3m3'
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{
        uri: product.imageUrl
      }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E91E63'
  }
});
export default ProductDetails;