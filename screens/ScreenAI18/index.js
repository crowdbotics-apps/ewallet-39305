import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';
const products = [{
  id: '1',
  name: 'Product 1'
}, {
  id: '2',
  name: 'Product 2'
}, {
  id: '3',
  name: 'Product 3'
} // Add more products as needed
];
const pendingApprovals = [{
  id: '1',
  name: 'Approval 1'
}, {
  id: '2',
  name: 'Approval 2'
}, {
  id: '3',
  name: 'Approval 3'
} // Add more approvals as needed
];

const SellerDashboard = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Seller Dashboard</Text>
        <Button title="Add Product" onPress={() => {}} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Products</Text>
        <FlatList data={products} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={styles.listItem}>
              <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
              <Text style={styles.listItemText}>{item.name}</Text>
            </View>} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pending Approvals</Text>
        <FlatList data={pendingApprovals} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.name}</Text>
            </View>} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  section: {
    flex: 1
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  listItemText: {
    fontSize: 16
  }
});
export default SellerDashboard;