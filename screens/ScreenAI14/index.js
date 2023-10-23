import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

const SellerProfileScreen = () => {
  const sellerData = {
    name: "John Doe",
    location: "New York, USA",
    phone: "+1 1234567890",
    rating: 4.5,
    itemsSold: 200,
    profileImage: "https://tinyurl.com/42evm3m3"
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{
        uri: sellerData.profileImage
      }} style={styles.profileImage} />
        <Text style={styles.nameText}>{sellerData.name}</Text>
        <Text style={styles.locationText}>{sellerData.location}</Text>
        <Text style={styles.phoneText}>{sellerData.phone}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Rating: {sellerData.rating}</Text>
        <Text style={styles.infoText}>Items Sold: {sellerData.itemsSold}</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10
  },
  locationText: {
    fontSize: 16,
    color: "#888",
    marginTop: 5
  },
  phoneText: {
    fontSize: 16,
    color: "#888",
    marginTop: 5
  },
  infoContainer: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10
  }
});
export default SellerProfileScreen;