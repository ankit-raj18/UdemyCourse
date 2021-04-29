import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen'
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from './src/screens/CounterScreen';
import CounterScreenReducer from './src/screens/CounterScreenReducer';
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreenReducer from "./src/screens/SquareScreenReducer";
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List : ListScreen,
    Image: ImageScreen,
    Counter : CounterScreen,
    CounterReducer : CounterScreenReducer,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareReducer : SquareScreenReducer,
    Text :TextScreen,
    Box : BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
