import { ScrollView, View } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import Header from "../components/Header";
import Banner from "../components/Home/Banner/Banner";
import Category from "../components/Home/Category/Category";
import Collection from "../components/Home/Collection/Collection";
import UsedParts from "../components/Home/UsedParts/UsedParts";
import FeaturedProduct from "../components/Home/FeaturedProduct/FeaturedProduct";
import Brands from "../components/Home/Brands/Brands";
import SocialMedia from "../components/Home/SocialMedia/SocialMedia";
import Sale from "../components/Home/Sale/Sale";

const Home = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, marginBottom:50 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Header title="GearGrind" onPress={() => refRBSheet.current.open()} />
        <ScrollView>
        <Banner />
        <Category />
        <Collection />
        <UsedParts />
        <FeaturedProduct />
        <Brands /> 
        <Sale />
        <SocialMedia />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
