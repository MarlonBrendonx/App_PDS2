import React, { useContext, useEffect,useState } from 'react';
import { StyleSheet,Image,View,Text,TextInput,TouchableOpacity,ImageBackground, ActivityIndicator } from 'react-native';
import  styles from './style';
import  {AsyncStorage}  from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { UserContext } from '../../context/UserContext';
import Api from "../../view/Apis/SignIn-SignUp/Api";

function Preload({navigation,route}){

       const {dispatch:userDispatch} =useContext(UserContext);

       let refresh= route.params;
   
       const checkToken = async ()=>{

       const token = await AsyncStorage.getItem('token');
 
       if( token === null ){
           
                navigation.navigate('SignIn');

        }else{

                let json= await Api.checkToken(token);
                
                if( json.status ){

                    await AsyncStorage.setItem('token',json.msg['remember_token']);

                    userDispatch({

                        type:'setName',
                        payload:{
                            name:json.msg.name
                        },
                                                    
                    });
                    userDispatch({

                        type:'setEmail',
                        payload:{
                            email:json.msg.email
                        },
                        
                        
                    });

                    userDispatch({

                        type:'setPhone',
                        payload:{
                            phone:json.msg.phone
                        },
                        
                        
                    });

                    userDispatch({

                        type:'setID',
                        payload:{
                            id:json.msg.id
                        },
                        
                        
                    });

                    userDispatch({

                        type:'setAvatar',
                        payload:{
                            avatar:json.msg.photo
                        },
                        
                        
                    });
                    
                    navigation.navigate("Index");

                }else{
                    navigation.navigate("SignIn");
                }


            }


        }


       //Assim que a tela abrir ,checar o token de login
        useEffect(()=>{

            checkToken();
            
        },[]);

        useEffect(()=>{

            checkToken();
            
        },[,refresh]);
    
        return (
            
            <View style={ styles.container }>
            
                    <Image
                        style={ styles.logo }
                        source={require('../../assets/run.gif')}
                    />
                    
                
            </View>

        );
}
export default Preload;
