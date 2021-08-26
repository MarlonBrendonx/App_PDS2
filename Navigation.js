import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components

import SignIn from  "./src/view/SignIn";
import SignUp from "./src/view/SignUp";
import RedfinePass from "./src/view/RedfinePass";
import Index from "./src/view/Index";
import Profile from "./src/view/Index/Profile";
import ProfileFields from "./src/view/Index/ProfileFields";
import ProfilePassword from "./src/view/Index/ProfileFields/ProfilePassword";
import NoInternet  from "./src/view/NoInternet";
import LostPet from "./src/view/Index/LostPet";
import CommunityHouse from "./src/view/Index/CommunityHouse";
import Complaint from "./src/view/Index/Complaint";

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
        <Stack.Screen
          name="ProfileFields"
          component={ProfileFields}
          options={{ headerShown: false, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="ProfilePassword"
          component={ProfilePassword}
          options={{ headerShown: false, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="NoInternet"
          component={NoInternet}
          options={{ headerShown: false, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="LostPet"
          component={LostPet}
          options={{ headerShown: false, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="CommunityHouse"
          component={CommunityHouse}
          options={{ headerShown: false, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Complaint"
          component={Complaint}
          options={optionsHeader}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
