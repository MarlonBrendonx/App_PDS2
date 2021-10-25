import React, { useState, useEffect,useContext } from 'react';
import { Image,View,BackHandler,Text,TouchableOpacity, TextInput } from 'react-native';
import RNExitApp, { exitApp } from 'react-native-exit-app';
import styles from "../NoInternet/styles";
import { AsyncStorage } from "react-native";
import {UserContext} from '../../context/UserContext';

 

function LogoutApp({route,navigation }) {


    const {dispatch:userDispatch} =useContext(UserContext);

    const removeItemValue = async () => {

        try {

            await AsyncStorage.removeItem('token');

            //let token=await AsyncStorage.getItem('token');
         
            navigation.navigate("Preloading",{
                refresh:true
            });
            
        }
        catch(exception) {
            return "Erro remove cache";
        }

    }



    return(
            <> 
            <View style={ styles.container } >
                
                <View style={ styles.Titles }>

                    <Text style={styles.txtTitle}>Já vai ?</Text>
                    <Text>
                    </Text>

                </View>

                <View style={ styles.imagegif }>
                    <Image style={{ height:250,width:250 }}source={ require("../../assets/catsad.png") } />
                </View>

                <View style={ styles.Buttons } >
                    <>
                        
                        <TouchableOpacity style={styles.btnExit} onPress={removeItemValue}>
                                <Text style={styles.textExit}>Sair do aplicativo</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnExit} onPress={() => navigation.goBack()} >
                                <Text style={styles.textExit}>Voltar</Text> 
                        </TouchableOpacity>
                    </>
                </View>

            </View>
        </>   
    );
}
export default LogoutApp;