import React from "react";
import styled from "styled-components";
import {
  TouchableOpacity,
  StatusBar,
  Linking,
  ScrollView,
  Dimensions
} from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import HTML from "react-native-render-html";

class SectionScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmounth() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");
    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Wrapper>
            <Logo source={section.logo} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{ position: "absolute", top: 20, right: 20 }}
        >
          <CloseView>
            <Ionicons
              name="ios-close"
              size={36}
              color="#546cfb"
              style={{ marginTop: -2 }}
            />
          </CloseView>
        </TouchableOpacity>
        <Content>
          <ScrollView style={{ flex: 1 }}>
            <HTML
              html={htmlContent}
              imagesMaxWidth={Dimensions.get("window").width}
              style={htmlStyles}
            />
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default SectionScreen;

const htmlStyles = `
h2{
  color: pink
}

`;
const htmlContent = `
    <h2>Why React Native keeps changing packages name?</h2>
    <p>I spend 3 hours reading documentation, code, delete and code</p>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

const Content = styled.View`
  height: 1000px;
  padding: 20px;
  background: white;
`;

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

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 5px;
  text-transform: uppercase;
`;
