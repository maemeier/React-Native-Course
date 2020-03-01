import React from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import Logo from "./components/Logo";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TitleBar>
          <Avatar source={require("./assets/avatar.jpg")} />
          <Title>Welcome back,</Title>
          <Name>Mae</Name>

          <Subtitle>Continue Learning</Subtitle>
        </TitleBar>
        <Logo image={require("./assets/logo-framerx.png")} text="Fremer X" />
        <SafeAreaView>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            <Card
              title="Styled Components"
              image={require("./assets/background13.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 sections"
            />
            <Card
              title="Props and Children"
              image={require("./assets/background14.jpg")}
              caption="React JS"
              logo={require("./assets/logo-react.png")}
              subtitle="10 of 12 sections"
            />
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;
