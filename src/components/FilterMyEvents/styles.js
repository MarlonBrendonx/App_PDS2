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
    },
    RadioButton:{
        flexDirection:'row',
        width:'auto'
    },
    bodyRadioButton:{
        width:'auto',
        height:'auto',
        marginTop:10,
        paddingTop:30,
        paddingLeft:10
    },
    header:{
        borderBottomWidth:1,
        paddingBottom:1,
        borderBottomColor:'grey',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        paddingBottom:10,
        paddingTop:4
    },
    
    btnClose:{
  
        width:'55%',
        
    },
    btnsave:{

        borderWidth:1,
        borderColor:'#B33BF6',
        height:30,
        width:200,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25
    },
    containerbtnSave:{

        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
    
});

export default styles;