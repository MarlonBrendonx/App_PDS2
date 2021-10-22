import React from 'react';
import { StyleSheet,Image,View,Text,TextInput,TouchableOpacity, Touchable } from 'react-native';
import { color } from 'react-native-reanimated';
import Navigation from "./Main";
const styles = StyleSheet.create({

    
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        flexDirection: "row",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 15,
        right:90,
      },
      image2:{
    
        resizeMode: "contain",
        height:100,
        width: 200,
        right:50,
        },
      textTitle:{
        marginTop:30,
        fontSize:20,
        marginVertical:5,
        left:130,
      },
      btnSubmit:{
    
        backgroundColor:'#B33BF6',
        width:'70%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:26,
        left:60,
      },
      submitText:{
          
        color:'#FFF',
        fontSize:18,
      },
    
    });

export default styles;