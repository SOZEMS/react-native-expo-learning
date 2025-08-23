import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DetailsScreen";
import ProfileScreen from "../pages/ProfileScreen";
import CountScreen from "../pages/CountScreen";
import FlexScreen from "../pages/FlexScreen";
import LayoutScreen from "../pages/LayoutScreen";

const stack = createStackNavigator();

export default function navigation() {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={HomeScreen} />
      <stack.Screen name="Details" component={DetailsScreen} />
      <stack.Screen name="Profile" component={ProfileScreen} />
      <stack.Screen name="Count" component={CountScreen} />
      <stack.Screen name="Flex" component={FlexScreen} />
      <stack.Screen name="Layout" component={LayoutScreen} />
    </stack.Navigator>
  );
}
