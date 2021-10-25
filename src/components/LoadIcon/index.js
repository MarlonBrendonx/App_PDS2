import React from "react";
import { Image,View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const LoadingNotifications = (props) => {


  return (
    <View style={{
          height:'100%',width:'100%',alignSelf:'center',marginTop:20,position:'absolute',bottom:10
         ,justifyContent:'center',alignItems:'center',backgroundColor: 'rgba(240, 240, 240, 0.8)' }}>
        <Image
          style={{width:150,height:200}}
          source={require('../../assets/paws_g.gif')}
        />
    </View>
  );
};

export default LoadingNotifications;
