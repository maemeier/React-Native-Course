import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";

// stack navigator

const screens = {
  HomeScreen: {
    screen: HomeScreen
  }
};
const AppNavigator = createStackNavigator(screens);

export default createAppContainer(AppNavigator);
