import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  Foundation,
  MaterialCommunityIcons
} from "@expo/vector-icons";

import CustomTabBar from "./components/CustomTabBar";

import Home from "./screens/Home";
import Search from "./screens/Search";
import Libary from "./screens/Libary";
import Premium from "./screens/Premium";

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "#141414",
    background: "#121212",
    card: "#141414",
    text: "#FFF",
    border: "#000"
  }
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        backBehavior="initialRoute"
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#f3f3f3",
          inactiveTintColor: "#acacac"
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
