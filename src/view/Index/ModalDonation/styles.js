import React from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({

    Container:{
        height:'80%',
        backgroundColor:'white',
        borderRadius:30
    },
    header:{
     
        height:30,
        width:'100%',
        borderRadius:30
        
    },
    btnclose:{

        position:'absolute',
        top:10,
        right:10
    },
    notificationItems:{
        
        marginTop:10,
        width:'100%',
       
    }
});

export default styles;