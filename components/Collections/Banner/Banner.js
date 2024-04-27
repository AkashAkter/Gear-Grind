import React from "react";
import { View, ImageBackground, Text, StyleSheet, ScrollView, Image } from "react-native";
import { images } from "../../../constants";

const Banner = () => {
  return (
    <View>
      <ImageBackground
        source={images.performanceParts}
        style={styles.bannerBackground}
        imageStyle={styles.bannerImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.bannerText}>PERFORMANCE PARTS</Text>
        </View>
      </ImageBackground>
      <Text style={styles.text}> Top Trending Product</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {/* Card 1 */}
      <View style={styles.card}>
        <Image
          source={images.product}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.cardText}>Product Name</Text>
        <Text style={styles.cardText}>$10</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={images.product}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.cardText}>Product Name</Text>
        <Text style={styles.cardText}>$10</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={images.product}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.cardText}>Product Name</Text>
        <Text style={styles.cardText}>$10</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={images.product}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.cardText}>Product Name</Text>
        <Text style={styles.cardText}>$10</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={images.product}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.cardText}>Product Name</Text>
        <Text style={styles.cardText}>$10</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={images.product}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.cardText}>Product Name</Text>
        <Text style={styles.cardText}>$10</Text>
      </View>
    </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  bannerBackground: {
    width: "100%",
    height: 200, // Adjust the height as needed
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust opacity as needed
    justifyContent: "center",
    alignItems: "center",
  },
  bannerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    width: 150,
    height: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensure the image doesn't overflow the card
  },
  image: {
    width: '80%',
    height: '60%', // Adjust the height as needed
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20
  },

});

export default Banner;
