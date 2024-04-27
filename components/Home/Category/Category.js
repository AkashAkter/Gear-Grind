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

const Category = () => {
  return (
    <View>
      <View style={styles.categoryFlex}>
        <Text style={styles.heading}>POPULAR CATEGORY</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllButtonText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        {[...Array(10)].map((_, index) => (
          <View key={index} style={styles.category}>
            <View style={styles.imageContainer}>
              <Image
                source={require('./parts.png')} // Replace with your image source
                style={styles.image}
              />
            </View>
            <Text style={styles.categoryName}>Category {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryFlex: {
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
  category: {
    marginRight: 10,
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  categoryName: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Category;

