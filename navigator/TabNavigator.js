import React from "React";
import {
  createButtomTabNavigator,
  createStackNavigator
} from "react-navigation-stack";

import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";

const screen1 = {
  Home: {
    screen: HomeScreen,
    header: null
  },
  CourseStack: {
    screen: SectionScreen
  }
};

const TabNavigator = createStackNavigator(screen1);
export default createAppContainer(TabNavigator);
