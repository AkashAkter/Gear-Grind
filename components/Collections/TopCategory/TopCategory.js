import React from "react";
import { View, Image, StyleSheet, ScrollView, Text } from "react-native";
import { images } from "../../../constants";

const TopCategory = () => {
  // Image source
  const imageSource = images.engineComponent;

  return (
    <View>
      <Text style={styles.text}>Top Categories</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {Array.from({ length: 16 }).map((_, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                source={imageSource}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.productName}>Name</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  card: {
    width: "20%", // Adjust the width as needed for 4 cards per row
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    elevation: 3,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1, // Ensure the image container is square
    borderRadius: 50, // Half of the width/height to make it circular
    overflow: "hidden", // Clip the image to the rounded border
    borderWidth: 2, // Add border width
    borderColor: "gray", // Add border color
  },
  image: {
    width: "100%",
    height: "100%", // Ensure the image fills the container
    borderRadius: 50, // Apply border radius to make it circular
  },
  textContainer: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  text:{
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20
  },
});

export default TopCategory;
