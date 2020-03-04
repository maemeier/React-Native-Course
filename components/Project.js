import React from "react";
import styled from "styled-components";
import { Animated, TouchableWithoutFeedback } from "react-native";

class Project extends React.Component {
  state = {
    cardWidth: new Animated.Value(315),
    cardHeight: new Animated.Value(460)
  };

  openCard = () => {
    Animated.spring(this.state.cardWidth, { toValue: 375 }).start();
    Animated.spring(this.state.cardHeight, { toValue: 812 }).start();
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.openCard}>
        <AnimatedContainer
          style={{
            width: this.state.cardWidth,
            height: this.state.cardHeight
          }}
        >
          <Cover>
            <Image source={this.props.image} />
            <Title>{this.props.title}</Title>
            <Author>{this.props.author}</Author>
          </Cover>
          <Text>{this.props.text}</Text>
        </AnimatedContainer>
      </TouchableWithoutFeedback>
    );
  }
}

export default Project;

const Container = styled.View`
  width: 315px;
  height: 460px;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Head = styled.Text``;
const Cover = styled.View`
  height: 290px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 290px;
`;
const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 24px;
  width: 300px;
  font-weight: 600;
`;
const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  text-transform: uppercase;
`;
const Text = styled.Text`
  font-size: 17px;
  margin: 20px;
  line-height: 24px;
  color: #3c4560;
`;
