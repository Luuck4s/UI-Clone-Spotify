import React, { useState, useEffect } from "react";
import { FlatList, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

import api from "../../services/api";

import Player from "../../components/Player";
import AlbunsList from "../../components/AlbunsList";

import { Container, Title } from "./styles";

export default function Home() {
  const [recently, setRecently] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [madeForYou, setMadeForYou] = useState([]);
  const [popularPlaylists, setPopularPlaylists] = useState([]);
  const [yourPlaylists, setYourPlaylists] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get("/db");

      setRecently(response.data.Recently.Playlists);
      setPodcasts(response.data.PodCasts.Shows);
      setMadeForYou(response.data.Playlists.MadeForYou);
      setPopularPlaylists(response.data.Playlists.PopularPlaylists);
      setYourPlaylists(response.data.Recently.YourPlaylists);
    }

    getData();
  }, []);

  return (
    <Container>
      <ScrollView>
        <Entypo
          name="cog"
          size={25}
          color="#acacac"
          style={{ alignSelf: "flex-end", marginTop: 35, marginRight: 10 }}
        />
        <Title>Recently played</Title>
        <FlatList
          data={recently}
          keyExtractor={item => `${item.id}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AlbunsList
              name={item.name}
              photoAlbum={item.photoAlbum}
              recentPlayed
            />
          )}
        />
        <Title>Your top podcasts</Title>
        <FlatList
          data={podcasts}
          keyExtractor={item => `${item.id}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AlbunsList name={item.name} photoAlbum={item.photoAlbum} podcast />
          )}
        />
        <Title>Made for you</Title>
        <FlatList
          data={madeForYou}
          keyExtractor={item => `${item.id}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AlbunsList name={item.name} photoAlbum={item.photoAlbum} />
          )}
        />
        <Title>Popular playlists</Title>
        <FlatList
          data={popularPlaylists}
          keyExtractor={item => `${item.id}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AlbunsList name={item.name} photoAlbum={item.photoAlbum} />
          )}
        />
        <Title>Your playlists</Title>
        <FlatList
          data={yourPlaylists}
          keyExtractor={item => `${item.id}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AlbunsList name={item.name} photoAlbum={item.photoAlbum} />
          )}
        />
      </ScrollView>
    </Container>
  );
}
