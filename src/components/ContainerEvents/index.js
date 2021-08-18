import React from "react";
import { TouchableOpacity,View, Text,Image } from "react-native";
import styles from "./styles";

const Button = (props) => {
  
  return (
    <>
        <View style={{  width:'100%',height:55,flexDirection:'row',alignItems:'center' }}>
            <TouchableOpacity style={ styles(props).containerElement }>
            <View >
               
            </View>
            </TouchableOpacity>
            <Text style={{ color:'white',left:20,fontWeight:'bold' }}>{props.title}</Text>
        </View>
    </>
  );
};

export default Button;
