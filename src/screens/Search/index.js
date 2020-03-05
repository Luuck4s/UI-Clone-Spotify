import React, { useEffect, useState } from "react";
import { ScrollView, FlatList } from "react-native";

import api from "../../services/api";

import SearchBar from "../../components/SearchBar";
import GenreMusic from "../../components/GenreMusic";

import { Container, Title } from "./styles";

import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["VirtualizedLists should never be nested"]);

export default function Search() {
  const [yourTop, setYourTop] = useState([]);
  const [allGenres, setAllGenres] = useState([]);
  const [YOffSet, setYOffSet] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await api.get("/Categories");

      setYourTop(response.data.TopGenres);
      setAllGenres(response.data.All);
    }

    getData();
  }, []);

  const handeScroll = props => {
    const YOffSet = props.nativeEvent.contentOffset.y;
    setYOffSet(YOffSet);
  };

  return (
    <Container>
      <Title YOffSet={YOffSet} search>
        Search
      </Title>
      <SearchBar />
      <ScrollView scrollEventThrottle onScroll={handeScroll}>
        <FlatList
          data={yourTop}
          numColumns={2}
          ListHeaderComponent={<Title>Your top genres</Title>}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <GenreMusic name={item.name} color={item.color} />
          )}
        />
        <FlatList
          data={allGenres}
          numColumns={2}
          ListHeaderComponent={<Title>Browse all</Title>}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <GenreMusic name={item.name} color={item.color} />
          )}
        />
      </ScrollView>
    </Container>
  );
}
