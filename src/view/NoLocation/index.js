import React, { useState, useEffect,useContext } from 'react';
import { Image,View,BackHandler,Text,TouchableOpacity, TextInput } from 'react-native';
import styles from "../NoInternet/styles";
import RNExitApp, { exitApp } from 'react-native-exit-app';
import  {AsyncStorage}  from 'react-native';


function NoLocation({route,navigation }) {

    const exitApplication = async () =>{
        
        await AsyncStorage.removeItem('token');
        BackHandler.exitApp();

    }

    return(
            <> 
            <View style={ styles.container } >
                
                <View style={ styles.Titles }>

                    <Text style={styles.txtTitle}>Oops!</Text>
                    <Text>Não foi possível obter a localização atual, ative a localização do seu dispositivo 
                        e atualize
                    </Text>

                </View>

                <View style={ styles.imagegif }>
                    <Image style={{ height:300,width:300 }}source={ require("../../assets/NoInternet/noconection.png") } />
                </View>

                <View style={ styles.Buttons } >
                    <>
                        
                        <TouchableOpacity style={styles.btnExit} onPress={exitApplication} >
                                <Text style={styles.textExit}>Sair do aplicativo</Text>
                        </TouchableOpacity>
                    </>
                </View>

            </View>
        </>   
    );
}
export default NoLocation;