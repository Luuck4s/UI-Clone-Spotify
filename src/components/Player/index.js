import React, { useState } from "react";
import {
  Container,
  BarStatus,
  Line,
  PhotoAlbum,
  Music,
  Information,
  InformationAlbum,
  TitleMusic,
  Separator,
  AuthorName,
  InformationController,
  DescriptionDevices,
  Controller
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Player() {
  const [playMusic, setPlayMusic] = useState(false);

  return (
    <Container>
      <BarStatus>
        <Line />
      </BarStatus>
      <PhotoAlbum
        source={{
          uri:
            "https://images.genius.com/269df4057e42cfcc4c3a9b5693042136.1000x1000x1.png"
        }}
      />
      <Music>
        <Information>
          <InformationAlbum>
            <TitleMusic>Luxúria</TitleMusic>
            <Separator> • </Separator>
            <AuthorName>Xamã</AuthorName>
          </InformationAlbum>
          <InformationController>
            <MaterialCommunityIcons
              name="speaker-wireless"
              size={11}
              color={"#FFF"}
            />
            <DescriptionDevices>Devices Available</DescriptionDevices>
          </InformationController>
        </Information>
        <Controller onPress={() => setPlayMusic(!playMusic)}>
          {playMusic && (
            <MaterialCommunityIcons name="pause" size={30} color={"#FFF"} />
          )}
          {!playMusic && (
            <MaterialCommunityIcons name="play" size={30} color={"#FFF"} />
          )}
        </Controller>
      </Music>
    </Container>
  );
}
