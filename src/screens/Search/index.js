import React from "react";
import { View, ScrollView, Text } from "react-native";

import Player from "../../components/Player";
import SearchBar from "../../components/SearchBar";
import { Container } from "./styles";

export default function Search() {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
}
