import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import CourseScreen from "../screens/CourseScreen";

// stack navigator

const screens = {
  Home: {
    screen: HomeScreen,
    header: null,
    mode: "modal"
  },
  Section: {
    screen: SectionScreen,
    header: null
  }
};

const screen1 = {
  screen: SectionScreen
};
const AppNavigator = createStackNavigator(screens);

const TabNav = createBottomTabNavigator({
  Home: AppNavigator,
  Course: CourseScreen
});

export default createAppContainer(TabNav);
