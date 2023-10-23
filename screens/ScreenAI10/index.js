import React, { useState } from "react";
import { SafeAreaView, View, Image, Button, StyleSheet, TextInput, FlatList, Text } from "react-native";

const App = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([{
    id: '1',
    name: 'Product 1'
  }, {
    id: '2',
    name: 'Product 2'
  }, {
    id: '3',
    name: 'Product 3'
  } // Add more products as needed
  ]);
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Stores" onPress={() => console.log("Stores button pressed")} />
        <Button title="View by Item" onPress={() => console.log("View by Item button pressed")} />
        <Button title="Sign-up/Sign-in" onPress={() => console.log("Sign-up/Sign-in button pressed")} />
      </View>
      <TextInput style={styles.input} placeholder="Search Products..." value={search} onChangeText={text => setSearch(text)} />
      <FlatList data={filteredProducts} keyExtractor={item => item.id} renderItem={({
      item
    }) => <Text>{item.name}</Text>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    width: 150,
    height: 150
  },
  buttonContainer: {
    flex: 1,
    width: "80%",
    justifyContent: "space-around"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    padding: 10
  }
});
export default App;