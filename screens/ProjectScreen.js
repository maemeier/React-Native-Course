import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

const ProjectScreen = props => {
  return (
    <Cover>
      <Text> Project components</Text>
    </Cover>
  );
};

export default ProjectScreen;

const Cover = styled.View`
  height: 142px;
  background: pink;
  justify-content: center;
  align-items: center;
`;
