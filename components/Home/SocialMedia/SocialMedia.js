/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';

const SocialMedia = () => {
    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Follow us on Social Media</Text>
            </View>
        <ScrollView horizontal contentContainerStyle={styles.container}>
            {[...Array(6)].map((_, index) => (
                <View key={index} style={styles.imageContainer}>
                    <Image
                        source={require('./logo.png')} // Replace with your image source
                        style={styles.image}
                    />
                </View>
            ))}
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 20,
        gap: 50,
    },
    textContainer: {
        marginBottom: 10,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imageContainer: {
        width: 40,
        height: 40,
        borderRadius: 10, // Adjust border radius as needed
        overflow: 'hidden',
        marginHorizontal: 5,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
});

export default SocialMedia;
