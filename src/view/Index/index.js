import React from "react";
import { View, Image, Alert, Text,Button } from "react-native";

import { AntDesign,Ionicons } from "@expo/vector-icons";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";


import styles from "./styles";
import Navigation from "./Main";
import ProfileUser from "../../components/Profile";
import iconadocoes from "../../assets/drawer/adocoes.png";
import icondoacoes from "../../assets/drawer/doacoes.png";
import iconlist from "../../assets/drawer/list.png";
import iconmap from "../../assets/drawer/map.png";
import iconpets from "../../assets/drawer/pets.png";
import iconprofile from "../..//assets/drawer/person.png";

const Drawer = createDrawerNavigator();

const HeaderDrawer = () => {
  return (
    <View style={styles.drawer_header}>
      <View style={styles.user}>
        <ProfileUser />
        <Text>Olá Marlon</Text>
      </View>
      <View style={styles.viewEmail}>
        <Text style={styles.text}>marlonbrendo2013@gmail.com</Text>
      </View>
    </View>
  );
};

const FooterDrawer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text_secundary}>
         <Text style={styles.text_primary}>--</Text>
      </Text>
    </View>
  );
};

const DrawerContent = ({ navigation }) => {
  const listMenuDrawer = [



    {
      id: 1,
      name: "Perfil",
      action: "Profile",
      icon: <Image source={iconprofile} style={{ width:24,height:24 }} />,
    
    },
    
    {
      id: 2,
      name: "Meus eventos",
      action: "List",
      icon: <Image source={iconlist} style={{ width:23,height:23 }} />,
    },
    {
      id: 3,
      name: "Meus pets",
      action: "List",
      icon: <Image source={iconpets} style={{ width:24,height:24 }} />,
    },
    {
      id: 4,
      name: "Adoções",
      action: "List",
      icon: <Image source={iconadocoes} style={{ width:24,height:24 }} />
    },
    {
      id: 5,
      name: "Doações",
      action: "Main",
      icon: <Image source={icondoacoes} style={{ width:24,height:24 }} />
    },

  ];

  return (
    <View style={styles.drawer_content}>
      <HeaderDrawer />
      <View style={styles.drawer_body}>
        <DrawerContentScrollView>
          {listMenuDrawer.map((menu) => (
            <DrawerItem
              label={menu.name}
              key={menu.id}
              icon={() => menu.icon}
              
              onPress={() => navigation.navigate(menu.action)}
            />
          ))}
        </DrawerContentScrollView>
      </View>
      <FooterDrawer />
    </View>
  );
};

const optionsHeader = () => ({
  
  headerTintColor:'#FFFFFF',
  headerStyle: {
   backgroundColor: "#B33BF6",
   elevation: 0,
   
  }

});


const Index = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name=" " component={Navigation} options={optionsHeader}/>
     
    </Drawer.Navigator>
  );
};

export default Index;
