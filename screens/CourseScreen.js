import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

const CourseScreen = props => {
  return (
    <Cover>
      <Text> course components</Text>
    </Cover>
  );
};

export default CourseScreen;

const Cover = styled.View`
  height: 142px;
  background: pink;
  justify-content: center;
  align-items: center;
`;
