import styled from "styled-components/native";

export const Container = styled.View`
  width: ${props => (props.recentPlayed ? 125 : 155)}px;
  height: ${props => (props.recentPlayed ? 150 : 180)}px;
  justify-content: center;
  margin: 0px 10px 8px;
`;
export const Image = styled.Image.attrs({
  resizeMode: "contain"
})`
  height: 100%;
  width: 100%;
  align-self: center;
`;
export const AlbumInformation = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 5px 0px;
  margin-top: -15px;
  height: 40px;
`;
export const Title = styled.Text`
  font-size: ${props => (props.podcast ? 13 : 11)}px;
  color: #fff;
  margin-left: ${props => (props.podcast ? 0 : 5)}px;
`;
