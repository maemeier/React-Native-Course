import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = props => (
  <Container>
    <IconView>
      <Ionicons name={props.icon} size={24} color="#546cfb" />
    </IconView>
    <Content>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </Content>
  </Container>
);

export default MenuItem;

const Container = styled.View``;

const IconView = styled.View``;

const Content = styled.View``;

const Title = styled.Text``;

const Text = styled.Text``;
