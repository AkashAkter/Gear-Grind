import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const handleLogin = () => {
    // Logic for handling login
  };

  const handleRegister = () => {
    // Navigation logic to navigate to the register page
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        {/* Banner content */}
        <Text style={styles.bannerText}>Welcome to Our App</Text>
      </View>

      <View style={styles.inputContainer}>
        {/* Email Input */}
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {/* Password Input */}
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registerContainer}>
        {/* Register Button */}
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>Don't have an account? Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
  },
  banner: {
    marginBottom: 20,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  inputContainer: {
    width: '100%', // Make the input container full width
    marginBottom: 20,
  },
  input: {
    width: '100%', // Make the input boxes full width
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  registerContainer: {
    marginTop: 20,
  },
  registerText: {
    color: '#007bff',
  },
});

export default Login;
