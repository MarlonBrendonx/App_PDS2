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
import Preloading from "./src/view/Preloading";
import NoInternet  from "./src/view/NoInternet";
import LostPet from "./src/view/Index/LostPet";
import CommunityHouse from "./src/view/Index/CommunityHouse";
import Complaint from "./src/view/Index/Complaint";
import MyEvents from "./src/view/Index/MyEvents";
import NoLocation from "./src/view/NoLocation";
import LostPet_More from "./src/view/Index/SeeMore/LostPetMore";
import CommunityHouse_More from "./src/view/Index/SeeMore/CommunityHouseMore";
import Complaint_More from "./src/view/Index/SeeMore/ComplaintMore";
import {LogBox} from 'react-native';
import SignUpPets from "./src/view/SignUpPets";
import Donation from "./src/view/Donation";
import Pets from "./src/view/Index/Pets";
import DonationView from "./src/view/Index/DonationView";
import ModalDonation from "./src/view/Index/ModalDonation";
import PetsView from "./src/view/PetsView";
import Adoption from "./src/view/Index/Adoption";
import AdoptionView from "./src/view/AdoptionView";

LogBox.ignoreLogs(['Warning: ...']);
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
        
        <Stack.Screen name="Preloading" component={Preloading} options={optionsHeader} />
        <Stack.Screen name="Donation" component={Donation} options={optionsHeader} />
        <Stack.Screen name="Pets" component={Pets} options={optionsHeader} />
        <Stack.Screen name="SignUpPets" component={SignUpPets} options={optionsHeader} />
        <Stack.Screen name="DonationView" component={DonationView} options={optionsHeader} />
        <Stack.Screen name="ModalDonation" component={ModalDonation} options={optionsHeader} />
        <Stack.Screen name="PetsView" component={PetsView} options={optionsHeader} />
        <Stack.Screen name="Adoption" component={Adoption} options={optionsHeader} />
        <Stack.Screen name="AdoptionView" component={AdoptionView} options={optionsHeader} />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={optionsHeader}
         
        />    


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
          options={{ 
            headerShown: false, headerTitleAlign: "center" }}
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
          name="NoLocation"
          component={NoLocation}
          options={optionsHeader}
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
        <Stack.Screen
          name="MyEvents"
          component={MyEvents}
          options={optionsHeader}
        />
        <Stack.Screen
          name="LostPet_More"
          component={LostPet_More}
          options={optionsHeader}
        />
        <Stack.Screen
          name="CommunityHouse_More"
          component={CommunityHouse_More}
          options={optionsHeader}
        />
        <Stack.Screen
          name="Complaint_More"
          component={Complaint_More}
          options={optionsHeader}
        />
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
