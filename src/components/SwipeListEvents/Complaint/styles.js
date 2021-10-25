import React from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = (props)=> StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius:30,
        
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {

        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 120,
        marginBottom:10
 
        
    },
    rowBack: {

        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        marginBottom:10
        
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
        backgroundColor: props.color,
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
    //////////////

    containerEvent:{
        
        marginTop:10,
        height:113,
        width:'93%',
        backgroundColor: '#fff',
        borderRadius:15,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:2,
            height:4,
        },
        elevation:10,
        flexDirection:'row',
        borderLeftWidth:4,
        borderColor: props.color,
        marginBottom:15,

    },
    img:{

        width:90,
        height:90,
        borderRadius:25,
        marginTop:10,
        marginLeft:5
    },
    imgicon:{
        width:100,
        height:100,
    },
    data:{
        paddingLeft:20,
       
    },
    txt:{

        paddingTop:5,
        height:80,
        width:200
    }

});

export default styles;