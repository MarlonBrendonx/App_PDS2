import React from 'react';
import { StyleSheet,Image,View,Text,TextInput,TouchableOpacity, Touchable } from 'react-native';

const styles = StyleSheet.create({

    
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFF'

    },
    containerLogo:{

        flex:1,  
        //backgroundColor:'blue',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        
    },
    containerInputs:{

        flex:-1,
        //backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        paddingTop:50,
       
        
    },

    containerInputs_2:{

        flex:-1,
        //backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        paddingBottom:10
   
    },

    btnssociaisContainer:{

        flex:-1,
        //backgroundColor:'yellow',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
       
    },
    image:{

    width:450,
    height:200,
    marginVertical:5,
    marginTop:20,
    },

    image2:{

        resizeMode: "contain",
        height:100,
        width: 200,
        right:50,
        },

    input:{
          
        backgroundColor:'#FFF',
        width:'90%',
        marginBottom:1,
        color:'#B33BF6',
        fontSize:17,
        borderRadius:7,
        padding:10,
          
          
      },

    btnSubmit:{

        backgroundColor:'#B33BF6',
        width:'70%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:26
        
    },
    btnSociais:{
        paddingBottom:10
    },
    submitText:{
          
        color:'#FFF',
        fontSize:18,
    },

    btnForget:{
        alignSelf: 'flex-end',
        paddingBottom:20,
        paddingRight:26
    },

    linkEsqueceusenha:{
        color:'blue',
    },

    btnsContainer:{
        flex:1,
        flexDirection:'row',
    },

    txtLoginsocial:{
        color:'grey',
        paddingTop:10
    },
    txt2:{
        color:'grey',
        marginTop:20,
    },
    
    btnRegister:{
      
      flexDirection:'row',
      marginBottom:10,
      
    },

    txtRegisternow:{

      color:'#B33BF6'
    },

    textTitle:{

        fontSize:20,
        marginVertical:5,
        right:80,

    },

    logo:{

      height:230,
      width:270,

    }

});

export default styles;