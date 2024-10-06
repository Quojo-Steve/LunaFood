import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginPage from "../screens/LoginPage";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Ensure AsyncStorage is imported
import SignupPage from "../screens/SignupPage";
import OtpPage from "../screens/OtpPage";
import ForgotPassword from "../screens/ForgotPassword";
import ChangePassword from "../screens/ChangePassword";
import Confetti from "../screens/Confetti";
import HomePage from "../screens/BottomNavPages/HomePage";
import Tabs from "./Tabs";

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
        name="loginPage"
        component={LoginPage}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="signupPage" component={SignupPage} />
      <Stack.Screen name="otpPage" component={OtpPage} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="changePassword" component={ChangePassword} />
      <Stack.Screen name="confetti" component={Confetti} />
      <Stack.Screen
        name="homePage"
        component={Tabs}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
