import React from "React";
import { createStackNavigator } from "react-navigation-stack";
import { createButtomTabNavigator } from "react-navigation/bottom-tabs";

import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen
});

const CoursesStack = createStackNavigator({
  Courses: SectionScreen
});

const ProjectsStack = createStackNavigator({
  Projects: SectionScreen
});

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,
  ProjectsStack
});

export default TabNavigator;
