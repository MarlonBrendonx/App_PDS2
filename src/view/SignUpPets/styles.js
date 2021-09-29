import React from 'react';
import { StyleSheet,Image,View,Text,TextInput,TouchableOpacity, Touchable } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({

    
    container:{

        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFF',
        
    },

    textTitle:{
        
        fontSize:30,
        marginVertical:5,


    },

    image:{

        width:400,
        height:190,
        marginVertical:5,

    },

    containerInputs:{
        
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'93%',
        

    },

    input:{
         
        backgroundColor:'#FFF',
        marginBottom:1,
        color:'#B33BF6',
        fontSize:17,
        borderRadius:7,
        padding:9,
          
    },

    btnSubmit:{

        flexDirection:'row',
        backgroundColor:'#B33BF6',
        width:'89%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:26,
      
    },

    submitText:{
          
        color:'#FFF',
        fontSize:18,
        marginLeft:10,
    },
    btnSubmit1:{

        flexDirection:'row',
        backgroundColor:'#B33BF6',
        width:'55%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginBottom:10,
      
    },

    submitText:{
          
        color:'#FFF',
        fontSize:18,
        marginLeft:10,
    },
   
    txt1:{
        color:'grey',
    },
    
    btnRegister:{

        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginBottom:10,

    },

    txt2:{
      
        marginTop:1,
        marginBottom:1,
    },
    
    txtLogin:{

        color:'#B33BF6',
        marginBottom:2
    },

    iconButtonsubmit:{

        height:30,
        width:30,
        marginLeft:11,
    },
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
      }


});

export default styles;