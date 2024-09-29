import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../screens/FirstScreen";

export default StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="firstPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="firstPage"
        component={FirstScreen}
        options={{
          gestureEnabled: false,
          // headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};
