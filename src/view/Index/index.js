import React,{ useContext,useEffect,useState } from "react";
import { View, Image,ImageBackground, Alert, Text,Button } from "react-native";
import {UserContext} from "../../context/UserContext";

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
  
  const [user,setUser] = useState({});
  
  const { state:person }=useContext(UserContext);

  const name=person.name.split(" ");
  
  return (
    
    <View style={styles.drawer_header}>
      <ImageBackground source={ require("../../assets/walp1.jpg") }
       style={ styles.backgroundImg }
       resizeMode="cover" imageStyle={{opacity: 0.45}}
        >
      <View style={styles.user}>
        <ProfileUser />
        <Text style={{  color:'#FFF',fontWeight:'bold' }}>Olá {name[0]}</Text>
      </View>
      
      <View style={styles.viewEmail}>
        <Text style={styles.text}>{person.email}</Text>
      </View>
      
      </ImageBackground>
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
      action: "MyEvents",
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
   backgroundColor: "#FFF",
   shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:2,
            height:4,
        },
        elevation:10
   
  },

  headerTintColor: '#B33BF6',
});


const Index = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name=" " component={Navigation} options={optionsHeader}/>
     
    </Drawer.Navigator>
  );
};

export default Index;
