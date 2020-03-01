import React from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import Logo from "./components/Logo";
import Course from "./components/Course";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <Avatar source={require("./assets/avatar.jpg")} />
              <Title>Welcome back,</Title>
              <Name>Mae Meier</Name>
            </TitleBar>

            <ScrollView
              style={{
                flexDirection: "row",
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {logos.map((logo, index) => (
                <Logo key={index} image={logo.image} text={logo.text} />
              ))}
            </ScrollView>
            <Sub>Continue Learning</Sub>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  image={card.image}
                  caption={card.caption}
                  logo={card.logo}
                  subtitle={card.subtitle}
                />
              ))}
            </ScrollView>
            <Sub>Popular Courses</Sub>

            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
            <Course />
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

const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Framerx"
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("./assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const cards = [
  {
    title: "React Native for Designer",
    image: require("./assets/background13.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "ReactJS for Designer",
    image: require("./assets/background2.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Swift IOS",
    image: require("./assets/background3.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Basic Android",
    image: require("./assets/background4.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Javasript",
    image: require("./assets/background5.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Angular for designer",
    image: require("./assets/background6.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png")
  }
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-figma.png"),
    author: "Mae Meier",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("./assets/background8.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "Mae Meier",
    avatar: require("./assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-framerx.png"),
    author: "Mae Meier",
    avatar: require("./assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app"
  }
];
