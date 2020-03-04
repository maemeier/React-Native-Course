import React from "react";
import Project from "../components/Project";
import styled from "styled-components";
import { PanResponder, Animated } from "react-native";

class ProjectScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    pan: new Animated.ValueXY()
  };

  componentWillMount() {
    this._panresponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPandResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y
        }
      ])
    });
  }
  render() {
    return (
      <Container>
        <Animated.View
          style={{
            transform: [
              { translateX: this.state.pan.x },
              { translateY: this.state.pan.y }
            ]
          }}
        >
          <Project />
        </Animated.View>
      </Container>
    );
  }
}

export default ProjectScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f0f3f5;
`;

const Text = styled.Text``;
