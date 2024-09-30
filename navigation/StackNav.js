import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Carousel from "../screens/Carousel";

export default StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="carousel"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="carousel"
        component={Carousel}
        options={{
          gestureEnabled: false,
          // headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};
