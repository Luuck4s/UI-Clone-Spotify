import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Container, SearchText } from "./styles";

export default function SearchBar() {
  return (
    <Container>
      <Ionicons name="ios-search" color={"#000"} size={26} />
      <SearchText>Artist, songs, or podcasts</SearchText>
    </Container>
  );
}
