import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./navigation/StackNav";
// import { AuthContextProvider } from "./context/AuthContext";
// import { vexo } from 'vexo-analytics';
// vexo("b2670318-fdba-497a-83ee-3b6b327c8c1d")

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
