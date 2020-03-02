import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";

// stack navigator

const screens = {
  Home: {
    screen: HomeScreen,
    header: null
  },
  Section: {
    screen: SectionScreen
  }
};
const AppNavigator = createStackNavigator(screens);

export default createAppContainer(AppNavigator);
