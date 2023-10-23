import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Image, Text } from 'react-native';

const ProductAddVerificationScreen = () => {
  const [code, setCode] = useState('');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Product Add Verification</Text>
      <TextInput style={styles.input} onChangeText={setCode} value={code} placeholder="Enter Verification Code" keyboardType="numeric" />
      <Button title="Submit" onPress={() => console.log('Verification code submitted')} />
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
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20
  }
});
export default ProductAddVerificationScreen;