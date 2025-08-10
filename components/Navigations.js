import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DetailsScreen";
import ProfileScreen from "../pages/ProfileScreen";
import CountScreen from "../pages/CountScreen";

const stack = createStackNavigator();

export default function navigation() {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={HomeScreen} />
      <stack.Screen name="Details" component={DetailsScreen} />
      <stack.Screen name="Profile" component={ProfileScreen} />
      <stack.Screen name="Count" component={CountScreen} />
    </stack.Navigator>
  );
}
