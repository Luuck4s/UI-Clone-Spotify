import React from "react";

import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  DownloadMessager,
  SubMessage,
  ContainerButton,
  TextButton
} from "./styles";

export default function Downloads() {
  return (
    <Container>
      <DownloadMessager>No downloads yet</DownloadMessager>
      <SubMessage>
        Tap {<AntDesign name="download" size={12} />} on an episodie to listen
        without a connection.
      </SubMessage>
      <ContainerButton>
        <TextButton>BROWSE PODCAST</TextButton>
      </ContainerButton>
    </Container>
  );
}
