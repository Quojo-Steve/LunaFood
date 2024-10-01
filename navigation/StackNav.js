import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import Carousel from "../screens/Carousel";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Ensure AsyncStorage is imported

const Stack = createNativeStackNavigator();

const StackNav = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  // React.useEffect(() => {
  //   // Define an async function inside the effect
  //   const checkFirstLaunch = async () => {
  //     try {
  //       const appData = await AsyncStorage.getItem("isAppFirstLaunched");
  //       if (appData == null) {
  //         setIsAppFirstLaunched(true);
  //         await AsyncStorage.setItem("isAppFirstLaunched", "false");
  //       } else {
  //         setIsAppFirstLaunched(false);
  //       }
  //     } catch (error) {
  //       console.error("Error checking first launch status", error);
  //     }
  //   };

  //   // Call the async function
  //   checkFirstLaunch();
  // }, []); // The empty array means this effect runs only once on component mount

  return (
    // isAppFirstLaunched !== null && (
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     {isAppFirstLaunched && (
    //       <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    //     )}
    //     <Stack.Screen name="caro" component={Carousel} />
    //   </Stack.Navigator>
    // )
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="caro"
        component={Carousel}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
