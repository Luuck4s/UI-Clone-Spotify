import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  Foundation,
  MaterialCommunityIcons
} from "@expo/vector-icons";

import Home from "./screens/Home";
import Search from "./screens/Search";
import Libary from "./screens/Libary";
import Premium from "./screens/Premium";

const MyTheme = {
  dark: false,
  colors: {
    primary: "rgba(25, 20, 20, 0.9)",
    background: "rgba(25, 20, 20, 1)",
    card: "rgba(25, 20, 20, 0.9)",
    text: "rgba(255, 255, 255, 1)",
    border: "rgba(25, 20, 20, 0.9)"
  }
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        backBehavior="initialRoute"
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#FFF",
          inactiveTintColor: "#B6B6B6"
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Foundation name="home" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-search" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Libary"
          component={Libary}
          options={{
            tabBarLabel: "Your Libary",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-parallel"
                color={color}
                size={30}
              />
            )
          }}
        />
        <Tab.Screen
          name="Premium"
          component={Premium}
          options={{
            tabBarLabel: "Premium",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="spotify" color={color} size={30} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
