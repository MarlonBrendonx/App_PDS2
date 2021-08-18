import React from 'react';
import { StyleSheet  } from 'react-native';

const styles = StyleSheet.create({

   
    header:{
        height:80,
        backgroundColor:'white',
        borderBottomWidth:0.5,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        top:10
    },
    titleHeader:{
        color:'#000',
        fontWeight:'bold',
        fontSize:18
    },
    buttonBack:{
        position:'absolute',
        left:20
    }
    
});

export default styles;