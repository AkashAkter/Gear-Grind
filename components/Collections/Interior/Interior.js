import React from "react";
import { View, Image, StyleSheet, Text, ImageBackground } from "react-native";
import { images } from "../../../constants";
const imageSource = images.engineComponent;

const data = [
  { id: 1, name: "Product Name", image: imageSource },
  { id: 2, name: "Product Name", image: imageSource },
  { id: 3, name: "Product Name", image: imageSource },
  { id: 4, name: "Product Name", image: imageSource },
  { id: 5, name: "Product Name", image: imageSource },
  { id: 6, name: "Product Name", image: imageSource },
  { id: 7, name: "Product Name", image: imageSource },
  { id: 8, name: "Product Name", image: imageSource },
  { id: 9, name: "Product Name", image: imageSource },
  { id: 10, name: "Product Name", image: imageSource },
  { id: 11, name: "Product Name", image: imageSource },
  { id: 12, name: "Product Name", image: imageSource },

  // Add more data objects for other products
];

const Card = ({ name, image }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

const Interior = () => {
  // Image source

  return (
    <View style={{ marginVertical: 20 }}>
      <View>
        <ImageBackground
          source={images.performanceParts}
          style={styles.bannerBackground}
          imageStyle={styles.bannerImage}
        >
          <View style={styles.overlay}>
            <Text style={styles.bannerText}>INTERIOR</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          {data.map((item) => (
            <Card key={item.id} name={item.name} image={item.image} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerBackground: {
    width: "100%",
    height: 100, // Adjust the height as needed
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
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "24%", // Adjust as per your design
    marginVertical: 5,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // To make it circular
    borderWidth: 1,
    borderColor: "#ccc", // Light border color
  },
  name: {
    marginTop: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Interior;
