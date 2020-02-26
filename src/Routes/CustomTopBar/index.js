import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Dimensions } from "react-native";
import Playlists from "../../screens/Libary/Music/Playlists";
import Artists from "../../screens/Libary/Music/Artists";
import Albums from "../../screens/Libary/Music/Albums";

import Episodes from "../../screens/Libary/Podcasts/Episodes";
import Downloads from "../../screens/Libary/Podcasts/Downloads";
import Shows from "../../screens/Libary/Podcasts/Shows";

const stylesSubTabs = StyleSheet.create({
  topbarIndicator: {
    position: "absolute",
    top: 42,
    bottom: 0,
    left: Dimensions.get("window").width / 11.4,
    right: 0,
    height: 2,
    width: Dimensions.get("window").width / 6.5,
    backgroundColor: "#1DB954",
    borderRadius: 5
  },
  topbarText: {
    fontSize: 12,
    textTransform: "capitalize"
  },
  topbarContainer: {
    backgroundColor: "#14141400",
    elevation: 0,
    marginTop: -10
  }
});

const SubTabsNavigatorMusic = createMaterialTopTabNavigator();

const SubTabsMusic = () => {
  return (
    <SubTabsNavigatorMusic.Navigator
      tabBarPosition="top"
      initialRouteName="Playlists"
      backBehavior="initialRoute"
      tabBarOptions={{
        indicatorStyle: stylesSubTabs.topbarIndicator,
        labelStyle: stylesSubTabs.topbarText,
        style: stylesSubTabs.topbarContainer,

        tabStyle: {}
      }}
    >
      <SubTabsNavigatorMusic.Screen name="Playlists" component={Playlists} />
      <SubTabsNavigatorMusic.Screen name="Artists" component={Artists} />
      <SubTabsNavigatorMusic.Screen name="Albums" component={Albums} />
    </SubTabsNavigatorMusic.Navigator>
  );
};

const SubTabsNavigatorPodcast = createMaterialTopTabNavigator();

const SubTabsPodcast = () => {
  return (
    <SubTabsNavigatorPodcast.Navigator
      initialRouteName="Episodes"
      backBehavior="initialRoute"
      tabBarOptions={{
        indicatorStyle: stylesSubTabs.topbarIndicator,
        labelStyle: stylesSubTabs.topbarText,
        style: stylesSubTabs.topbarContainer
      }}
    >
      <SubTabsNavigatorPodcast.Screen name="Episodes" component={Episodes} />
      <SubTabsNavigatorPodcast.Screen name="Downloads" component={Downloads} />
      <SubTabsNavigatorPodcast.Screen name="Shows" component={Shows} />
    </SubTabsNavigatorPodcast.Navigator>
  );
};

const stylesTopBar = StyleSheet.create({
  topBarlabelStyle: {
    fontSize: 27,
    fontWeight: "bold",
    fontStyle: "normal",
    textTransform: "capitalize"
  },
  topBarContainer: {
    backgroundColor: "#14141400",
    paddingTop: Dimensions.get("window").width / 9,
    elevation: 0
  }
});

const LibaryTopBar = createMaterialTopTabNavigator();

export default function App() {
  return (
    <LibaryTopBar.Navigator
      initialRouteName="Music"
      backBehavior="initialRoute"
      tabBarPosition="top"
      style={{
        backgroundColor: "#14141400"
      }}
      tabBarOptions={{
        labelStyle: stylesTopBar.topBarlabelStyle,
        style: stylesTopBar.topBarContainer,
        renderIndicator: () => null
      }}
    >
      <LibaryTopBar.Screen name="Music" component={SubTabsMusic} />
      <LibaryTopBar.Screen name="Podcasts" component={SubTabsPodcast} />
    </LibaryTopBar.Navigator>
  );
}
