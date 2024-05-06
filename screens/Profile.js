import { View } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./Login";
import { COLORS } from "../constants";
import Header from "../components/Header";

const Profile = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, marginBottom: 50 }}
    >
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Header title="Profile" onPress={() => refRBSheet.current.open()} />
        <Login />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
