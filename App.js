import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import UserContextProvider from "./src/context/UserContext";
import Navigation from "./Navigation";

export default function App() {
  console.disableYellowBox = true;
  return (
    <>
      <UserContextProvider>
        <Navigation />
        <StatusBar style="dark" />
      </UserContextProvider>
    </>
  );
}
