import { View, Text, StyleSheet, Image } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, images } from "../constants";
import Header from "../components/Header";

const Favourite = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, marginBottom: 50 }}
    >
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Header title="Favourite" onPress={() => refRBSheet.current.open()} />
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={images.Favourite}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.blackText}>Your Wishlist will live here</Text>
          <Text style={styles.greyText}>
            Explore variety products and add your favourite product to Wishlist
          </Text>
          <Text style={styles.redText}>Start SHopping Now</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
  },
  imageContainer: {
    width: 200, // Adjust the width of the image container as needed
    height: 200, // Adjust the height of the image container as needed
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
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
    textAlign: "center",
  },
  redText: {
    fontSize: 16,
    color: "#FF0000",
    marginBottom: 10,
  },
});

export default Favourite;
