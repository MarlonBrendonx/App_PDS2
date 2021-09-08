import React, { useState, useEffect,useContext } from 'react';
import { Image,View,Button,Text,TouchableOpacity, TextInput } from 'react-native';
import styles from "../NoInternet/styles";
import { ScrollView } from 'react-native';

function NoLocation({route,navigation }) {

    return(
            <> 
            <View style={ styles.container }>
                
                <View style={ styles.Titles }>

                    <Text style={styles.txtTitle}>Oops!</Text>
                    <Text>Você está off-line,Verifique sua conexão </Text>

                </View>

                <View style={ styles.imagegif }>
                    <Image source={ require("../../assets/NoInternet/gif2.gif") } />
                </View>

                <View style={ styles.Buttons } >
                    <>
                        <TouchableOpacity style={styles.btnUpdate}>
                                <Text style={styles.submitTextUpdate}>Atualizar</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.btnExit}  >
                                <Text style={styles.textExit}>Sair do aplicativo</Text>
                        </TouchableOpacity>
                    </>
                </View>

            </View>
        </>   
    );
}
export default NoLocation;