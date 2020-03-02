import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class SectionScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");
    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
          <CloseView>
            <Ionicons
              name="ios-close"
              size={36}
              color="#546cfb"
              style={{ marginTop: -2 }}
            />
          </CloseView>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;
const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;
