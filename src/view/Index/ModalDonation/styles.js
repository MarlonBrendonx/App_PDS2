import React from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({

    Container:{
        height:'50%',
        width:'90%',
        borderRadius:50,
        flexDirection:'column',
        
    },

    modalBody:{

        height:'90%',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',        
        
    },

    header:{
        position:'absolute',
        right:0,
        
    }

});

export default styles;