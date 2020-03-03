import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";

const MoreNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    header: null,
    mode: "modal"
  },
  Section: {
    screen: SectionScreen,
    header: null
  }
});

export default createBottomTabNavigator(MoreNavigator);
