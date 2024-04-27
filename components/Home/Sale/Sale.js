/* eslint-disable prettier/prettier */
import { Image, Text, View, StyleSheet } from 'react-native';
import React from 'react';

const Sale = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./sale.png')} style={styles.image} resizeMode="contain" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 40,
    },
    image: {
        width: '100%', // Take up the full width of the container
        height: undefined, // Let the height be calculated automatically to maintain aspect ratio
        aspectRatio: 1, // Ensures the aspect ratio remains square
    },
});

export default Sale;
