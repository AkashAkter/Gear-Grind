import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";

const Register = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+880"); // Default country code

  const generateCountryCodes = () => {
    const countryCodes = [
      { code: "+93", country: "Afghanistan" },
      { code: "+355", country: "Albania" },
      { code: "+213", country: "Algeria" },
      { code: "+376", country: "Andorra" },
      { code: "+244", country: "Angola" },
      { code: "+1-268", country: "Antigua and Barbuda" },
      { code: "+54", country: "Argentina" },
      { code: "+374", country: "Armenia" },
      { code: "+61", country: "Australia" },
      { code: "+43", country: "Austria" },
      { code: "+994", country: "Azerbaijan" },
      { code: "+1-242", country: "Bahamas" },
      { code: "+973", country: "Bahrain" },
      { code: "+880", country: "Bangladesh" },
      { code: "+1-246", country: "Barbados" },
      { code: "+375", country: "Belarus" },
      { code: "+32", country: "Belgium" },
      { code: "+501", country: "Belize" },
      { code: "+229", country: "Benin" },
      { code: "+975", country: "Bhutan" },
      { code: "+591", country: "Bolivia" },
      { code: "+387", country: "Bosnia and Herzegovina" },
      { code: "+267", country: "Botswana" },
      { code: "+55", country: "Brazil" },
      { code: "+673", country: "Brunei" },
      { code: "+359", country: "Bulgaria" },
      { code: "+226", country: "Burkina Faso" },
      { code: "+257", country: "Burundi" },
      { code: "+238", country: "Cabo Verde" },
      { code: "+855", country: "Cambodia" },
      { code: "+237", country: "Cameroon" },
      { code: "+1", country: "Canada" },
      { code: "+236", country: "Central African Republic" },
      { code: "+235", country: "Chad" },
      { code: "+56", country: "Chile" },
      { code: "+86", country: "China" },
      { code: "+57", country: "Colombia" },
      { code: "+269", country: "Comoros" },
      { code: "+242", country: "Congo (Congo-Brazzaville)" },
      { code: "+506", country: "Costa Rica" },
      { code: "+385", country: "Croatia" },
      { code: "+53", country: "Cuba" },
      { code: "+357", country: "Cyprus" },
      { code: "+420", country: "Czechia (Czech Republic)" },
      { code: "+243", country: "Democratic Republic of the Congo" },
      { code: "+45", country: "Denmark" },
      { code: "+253", country: "Djibouti" },
      { code: "+1-767", country: "Dominica" },
      { code: "+1-809", country: "Dominican Republic" },
      // Add more country codes as needed
    ];

    return countryCodes;
  };

  // Usage
  const countryCodes = generateCountryCodes();
  // console.log(countryCodes);

  const handleRegister = () => {
    // Logic for handling registration
  };

  const handleLogin = () => {
    // Navigation logic to navigate to the login page
    navigation.navigate("Login");
  };

  const renderCountryCodeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryCodeItem}
      onPress={() => {
        setSelectedCountryCode(item.code);
        setShowModal(false);
      }}
    >
      <Text>
        {item.country} ({item.code})
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        {/* Banner content */}
        <Text style={styles.bannerText}>Register for Our App</Text>
      </View>

      <View style={styles.inputContainer}>
        {/* First Name Input */}
        <TextInput
          placeholder="First Name"
          style={styles.input}
          autoCapitalize="words"
        />

        {/* Last Name Input */}
        <TextInput
          placeholder="Last Name"
          style={styles.input}
          autoCapitalize="words"
        />

        {/* Phone Number Input */}
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity
            style={styles.countryCodeButton}
            onPress={() => setShowModal(true)}
          >
            <Text>{selectedCountryCode}</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Phone Number"
            style={[styles.input, { flex: 1 }]}
            keyboardType="phone-pad"
          />
        </View>

        {/* Email Input */}
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {/* Password Input */}
        <TextInput
          placeholder="Password (Minimum 6 characters)"
          style={styles.input}
          secureTextEntry={true}
          minLength={6}
        />

        {/* Register Button */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginContainer}>
        {/* Login Button */}
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>

      {/* Country Code Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={countryCodes}
              renderItem={renderCountryCodeItem}
              keyExtractor={(item) => item.code}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  banner: {
    marginBottom: 20,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  inputContainer: {
    width: "100%", // Make the input container full width
    paddingHorizontal: 10, // Add horizontal padding
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryCodeButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 10,
  },

  registerButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  loginContainer: {
    marginTop: 20,
  },
  loginText: {
    color: "#007bff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "#ffffff",
    width: "80%",
    borderRadius: 10,
    padding: 20,
  },
  countryCodeItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default Register;
