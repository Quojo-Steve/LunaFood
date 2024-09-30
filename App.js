import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./navigation/StackNav";
import FirstScreen from "./screens/SplashScreen";

export default function App() {
  const [isSplashScreen, setIsSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 3000);
  });

  return (
    <>
      {isSplashScreen ? (
        <FirstScreen />
      ) : (
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      )}
    </>
  );
}
