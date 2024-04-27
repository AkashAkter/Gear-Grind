/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Collection = () => {
  return (
    <View>
      <View style={styles.categoryFlex}>
        <Text style={styles.heading}>SHOP BY COLLECTION</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllButtonText}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image
              source={require('./collection.png')} // Replace with your image source
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Lorem Ipsum 1</Text>
              <View style={styles.underline} />
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require('./collection.png')} // Replace with your image source
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Lorem Ipsum 2</Text>
              <View style={styles.underline} />
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image
              source={require('./collection.png')} // Replace with your image source
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Lorem Ipsum 3</Text>
              <View style={styles.underline} />
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require('./collection.png')} // Replace with your image source
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Lorem Ipsum 4</Text>
              <View style={styles.underline} />
            </View>
          </View>
        </View>
      </View>
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
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200, // Adjust as needed
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  underline: {
    height: 2,
    backgroundColor: 'red',
    marginTop: 5,
    width: 50, // Adjust width as needed
  },
});

export default Collection;
