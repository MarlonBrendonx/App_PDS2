import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import UserContextProvider from "./src/context/UserContext";
import Navigation from "./Navigation";
import { LogBox } from 'react-native';

export default function App() {
  
// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();
  return (
    <>
      <UserContextProvider>
        <Navigation />
        <StatusBar style="dark" />
      </UserContextProvider>
    </>
  );
}
