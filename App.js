import React from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import Logo from "./components/Logo";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <Avatar source={require("./assets/avatar.jpg")} />
              <Title>Welcome back,</Title>
              <Name>Mae</Name>
            </TitleBar>

            <ScrollView
              style={{
                flexDirection: "row",
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30
              }}
              horizontal={true}
            >
              <Logo
                image={require("./assets/logo-framerx.png")}
                text="Fremer X"
              />
              <Logo image={require("./assets/logo-figma.png")} text="Figma" />
            </ScrollView>
            <Sub>Continue Learning</Sub>
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

              <Card
                title="Props and Children"
                image={require("./assets/background5.jpg")}
                caption="React JS"
                logo={require("./assets/logo-react.png")}
                subtitle="10 of 12 sections"
              />
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
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

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
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

const Sub = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  padding-left: 18px;
  text-transform: uppercase;
`;
