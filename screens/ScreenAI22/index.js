import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from "react-native";

const AdminScreen = () => {
  const [products, setProducts] = useState([{
    id: "1",
    name: "Product 1",
    image: "https://tinyurl.com/42evm3m3",
    code: "",
    verified: false
  }, {
    id: "2",
    name: "Product 2",
    image: "https://tinyurl.com/42evm3m3",
    code: "",
    verified: false
  } // Add more products as needed
  ]);

  const generateCode = id => {
    let newProducts = [...products];
    let product = newProducts.find(product => product.id === id);
    product.code = Math.random().toString(36).substring(7);
    setProducts(newProducts);
  };

  const verifyProduct = id => {
    let newProducts = [...products];
    let product = newProducts.find(product => product.id === id);
    product.verified = true;
    setProducts(newProducts);
  };

  const renderProduct = ({
    item
  }) => <View style={styles.productContainer}>
      <Image source={{
      uri: item.image
    }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Button title="Generate Code" onPress={() => generateCode(item.id)} />
        {item.code && <Text style={styles.code}>Code: {item.code}</Text>}
        <Button title="Verify Product" onPress={() => verifyProduct(item.id)} />
      </View>
    </View>;

  const verifiedProducts = products.filter(product => product.verified);
  const unverifiedProducts = products.filter(product => !product.verified);
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Admin Panel</Text>
      <Text style={styles.subtitle}>Verified Products</Text>
      <FlatList data={verifiedProducts} renderItem={renderProduct} keyExtractor={item => item.id} />
      <Text style={styles.subtitle}>Unverified Products</Text>
      <FlatList data={unverifiedProducts} renderItem={renderProduct} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  productInfo: {
    flex: 1
  },
  productName: {
    fontSize: 18,
    marginBottom: 10
  },
  code: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10
  }
});
export default AdminScreen;