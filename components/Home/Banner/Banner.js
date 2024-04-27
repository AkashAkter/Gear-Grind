/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Banner = () => {
  return (
    <View>
      <View style={styles.banner}>
        <Image
          source={require('./banner.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>FIND BEST CAR PARTS</Text>
        </View>
      </View>

      <View style={cardStyles.container}>
        <Card />
        <Card />
      </View>
    </View>
  );
};

const Card = () => {
  return (
    <View style={cardStyles.card}>
      <Image source={require('./card.jpg')} style={cardStyles.image} />
      <View style={cardStyles.textContainer}>
        <Text style={cardStyles.text}>Description</Text>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  card: {
    width: '45%', // Adjust as needed for spacing
    aspectRatio: 4 / 2, // 2:4 aspect ratio
    backgroundColor: '#f0f0f0',
    margin: 5, // Adjust as needed for spacing
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    aspectRatio: 4 / 2,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
});

export default Banner;
