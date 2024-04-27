import { View, Image, Text, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, images } from "../constants";
import Header from "../components/Header";

const Orders = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, marginBottom: 50 }}
    >
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Header title="Orders" onPress={() => refRBSheet.current.open()} />
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image
                source={images.cart}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.blackText}>Your Cart is empty</Text>
            <Text style={styles.greyText}>There are no items added in your cart.</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e9f0", // Light grey background color
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 100, // Adjust the width of the image as needed
    height: 100, // Adjust the height of the image as needed
  },
  blackText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  greyText: {
    fontSize: 16,
    color: "#808080",
    marginBottom: 10,
  },
});

export default Orders;
