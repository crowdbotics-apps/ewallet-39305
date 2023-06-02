import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const TransactionHistoryScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Transaction History</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.transaction}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.cryptoImage} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionDate}>June 1, 2021</Text>
            <Text style={styles.transactionType}>Buy</Text>
          </View>
          <Text style={styles.transactionAmount}>0.5 BTC</Text>
        </View>
        <View style={styles.transaction}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.cryptoImage} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionDate}>May 28, 2021</Text>
            <Text style={styles.transactionType}>Sell</Text>
          </View>
          <Text style={styles.transactionAmount}>1.2 ETH</Text>
        </View>
        <View style={styles.transaction}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.cryptoImage} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionDate}>May 25, 2021</Text>
            <Text style={styles.transactionType}>Buy</Text>
          </View>
          <Text style={styles.transactionAmount}>10.5 ADA</Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 80,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  content: {
    flex: 1,
    padding: 20
  },
  transaction: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  cryptoImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  transactionDetails: {
    flex: 1
  },
  transactionDate: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  transactionType: {
    fontSize: 14,
    color: "#666"
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default TransactionHistoryScreen;