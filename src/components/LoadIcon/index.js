import React from "react";
import { Image,View } from "react-native";
import ImageModal from 'react-native-image-modal';
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const LoadIcon = (props) => {


  return (
    <View style={{
        height:'100%',width:'100%',alignSelf:'center',marginTop:20,position:'absolute',bottom:10
         ,justifyContent:'center',alignItems:'center',backgroundColor: 'rgba(240, 240, 240, 0.8)' }}>
        <Image
        style={{width:250,height:200}}
        source={require('../../assets/paws_g.gif')}
        
        />
    </View>
  
  );
};

export default LoadIcon;
