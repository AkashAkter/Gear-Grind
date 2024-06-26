import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { COLORS, images } from "../constants";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import BottomTabNavigation from "./BottomTabNavigation";
import {
  Address,
  Favourite,
  Notifications,
  Orders,
  PaymentMethod,
  Register,
  Search,
} from "../screens";
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.white,
              }}
            >
              <Image
                source={images.avatar}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                  marginBottom: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: COLORS.black,
                  marginBottom: 6,
                }}
              >
                Sign in / Sign up
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.white,
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerShown: false,
        headerTintColor: COLORS.black,
        drawerLabelStyle: {
          color: COLORS.black,
          fontSize: 14,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Homes",
          title: "Home",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        name="Orders"
        options={{
          drawerLabel: "Orders",
          title: "Orders",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="gift-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Orders}
      />
      <Drawer.Screen
        name="Search"
        options={{
          drawerLabel: "Search",
          title: "Search",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="search-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Search}
      />
      <Drawer.Screen
        name="Favourite"
        options={{
          drawerLabel: "Favourite",
          title: "Favourite",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="heart-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Favourite}
      />
      <Drawer.Screen
        name="Delivery Address"
        options={{
          drawerLabel: "Delivery Address",
          title: "Delivery Address",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="location-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Address}
      />
      <Drawer.Screen
        name="Payment Methods"
        options={{
          drawerLabel: "Payment Methods",
          title: "Payment Methods",
          headerShadowVisible: false,
          drawerIcon: () => (
            <AntDesign name="creditcard" size={24} color={COLORS.black} />
          ),
        }}
        component={PaymentMethod}
      />
      <Drawer.Screen
        name="Notifications"
        options={{
          drawerLabel: "Notifications",
          title: "Notifications",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="notifications-outline"
              size={24}
              color={COLORS.black}
            />
          ),
        }}
        component={Notifications}
      />
      <Drawer.Screen
        name="Register"
        options={{
          drawerLabel: "Register",
          title: "Register",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Feather name="help-circle" size={24} color={COLORS.black} />
          ),
        }}
        component={Register}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
