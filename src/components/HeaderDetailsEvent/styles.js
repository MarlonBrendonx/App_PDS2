import React from 'react';
import { StyleSheet  } from 'react-native';

const styles = StyleSheet.create({

   
    header:{
        
        height:80,
        backgroundColor:'transparent',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingTop:10,
        position:'absolute',
        zIndex:150
    
        
    },
    titleHeader:{
        color:'#000',
        fontWeight:'bold',
        fontSize:18
    },
    buttonBack:{
        
        left:20,
        borderWidth:1,
        paddingRight:10,
        paddingLeft:10,
        borderRadius:24,
        borderColor:'white'
    }
    
});

export default styles;