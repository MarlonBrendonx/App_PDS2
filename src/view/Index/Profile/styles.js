import React from 'react';
import { StyleSheet  } from 'react-native';

const styles = StyleSheet.create({

    
    container:{

        flex:1,
        backgroundColor:'#FFF',
        
    },
    
    btnsContainer: {

        width:'95%',
        height:75,
        left:10,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#DCDBDB',
    },
    btnOptions:{
        height:75,
        width:'95%',
        flexDirection:'row'
    },
    btnText:{
        alignSelf:'center',
        left:40
    },
    icon:{
        width:20,
        height:20,
        alignSelf:'center',
        left:10
    },
    iconArrow:{
        transform: [{ rotate: '180deg'}],
        width: 13,
        height: 13
    },
    btnArrow:{
        right:10,
        alignSelf:'center'
        
    },
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