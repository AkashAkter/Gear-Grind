import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { images } from "../../../constants";

const imageSource = images.engineComponent;

const data = [
  { id: 1, name: "Product", image: imageSource },
  { id: 2, name: "Product", image: imageSource },
  { id: 3, name: "Product", image: imageSource },
  { id: 4, name: "Product", image: imageSource },
  { id: 5, name: "Product", image: imageSource },
  { id: 6, name: "Product", image: imageSource },
  { id: 7, name: "Product", image: imageSource },
  { id: 8, name: "Product", image: imageSource },
  { id: 9, name: "Product", image: imageSource },

  // Add more data objects for other products
];

const Card = ({ name, image }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

const TopCategory = () => {
  // Image source

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Top Categories</Text>
      <View style={styles.cardContainer}>
        {data.map((item) => (
          <Card key={item.id} name={item.name} image={item.image} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 20,
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

export default TopCategory;
