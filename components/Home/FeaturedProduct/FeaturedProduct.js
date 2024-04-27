/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const FeaturedProduct = () => {
  return (
    <View>
      <View style={styles.ProductFlex}>
        <Text style={styles.heading}>FEATURED PRODUCT</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllButtonText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        {[...Array(10)].map((_, index) => (
          <View key={index} style={styles.Product}>
            <View style={styles.imageContainer}>
              <Image
                source={require('./FeaturedProduct.png')} // Replace with your image source
                style={styles.image}
              />
            </View>
            <Text style={styles.ProductName}>Used Product {index + 1}</Text>
            <Text style={styles.ProductPrice}>AED1050</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ProductFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  seeAllButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  Product: {
    marginRight: 10,
    alignItems: 'center',
  },
  imageContainer: {
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  ProductName: {
    marginTop: 5,
    textAlign: 'center',
    color: 'black',
  },
  ProductPrice: {
    color:'black',
  },
});

export default FeaturedProduct;

