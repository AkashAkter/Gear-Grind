import { ScrollView, View } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import Header from "../components/Header";
import Banner from "../components/Collections/Banner/Banner";
import TopCategory from "../components/Collections/TopCategory/TopCategory";
import Interior from "../components/Collections/Interior/Interior";
import Exterior from "../components/Collections/Exterior/Exterior";

const Collection = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, marginBottom: 50 }}
    >
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Header title="Collections" onPress={() => refRBSheet.current.open()} />
        <ScrollView>
          <Banner />
          <TopCategory />
          <Interior />
          <Exterior />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Collection;
