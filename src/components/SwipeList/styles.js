import React from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';


export const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius:30
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {

        alignItems: 'center',
        backgroundColor: '#FFF',
        borderBottomColor: '#A9A8A8',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 80,
        
        
    },
    rowBack: {

        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    
        
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
     
        
    },
    backRightBtnLeft: {
        backgroundColor: '#5cc5c0',
        right: 75,
        borderRadius:2
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
       
    },
    trash: {
        height: 20,
        width: 20,
    },
});
