import React, { useContext, useEffect } from 'react';
import { StyleSheet,Image,View,Text,TextInput,TouchableOpacity,ImageBackground, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  styles from './style';
import {LinearGradient} from 'expo-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { UserContext } from '../../context/UserContext';
import Api from '../../Api.js';

function Preload({ navigation }){

       const{ dispatch: userDispatch } = useContext(UserContext);
       const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Main' })],
        });

       //Assim que a tela abrir ,checar o token de login
        useEffect(()=>{

            const checkToken = async ()=>{

                const token = await AsyncStorage.getItem('token');
                
                
                if( token != null ){
                    
                    let json= await Api.checkToken(token);
                  
                    if( json.status ){

                        await AsyncStorage.setItem('token',json.msg['remember_token']);
						
						navigation.dispatch(resetAction);

                    }else{

                        navigation.navigate('SignIn');
                    }


                }else{

                    navigation.navigate('SignIn');
                }

            }

            checkToken();

        },[]);


        return (
            
            <View style={ styles.container }>
                
                
                    <LinearGradient

                                colors={["#FF00DB","#B33BF6"]}
                                start={{x: 2, y: 1}} 
                                end={{x: 1, y: 1}}
                                style={styles.linearGradient}
                    >

                    <Image
                        style={ styles.logo }
                        source={require('../../assets/run.gif')}
                    />
                    
                   
                    </LinearGradient>
      
                
            </View>

        );
}
export default Preload;
