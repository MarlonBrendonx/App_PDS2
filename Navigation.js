import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components

import SignIn from  "./src/view/SignIn";
import SignUp from "./src/view/SignUp";
import RedfinePass from "./src/view/RedfinePass";
import Index from "./src/view/Index";
import Profile from "./src/view/Index/Profile";

const Stack = createStackNavigator();

const optionsHeader = () => ({
  headerShown: false
  //headerTitleAlign: "center",
 // headerStyle: {
  //  backgroundColor: "#ffe600",
  //  elevation: 0,
  //},
});

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={optionsHeader} />
        
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={optionsHeader}
         
        />
        <Stack.Screen
          name="RedefinePass"
          component={RedfinePass}
          options={optionsHeader}
        />
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false, headerTitleAlign: "center" }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
