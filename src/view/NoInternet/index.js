import React, { useState,useEffect} from 'react';
import { View,KeyboardAvoidingView,Image,TouchableOpacity,Text} from 'react-native';
import styles from '../styles/NoInternet';

function NoInternet(){

        return (
            
            <View style={ styles.container }>
                
                <View style={ styles.Titles }>

                    <Text style={styles.txtTitle}>Oops!</Text>
                    <Text>Você está off-line,Verifique sua conexão </Text>

                </View>

                <View style={ styles.imagegif }>
                    <Image source={ require("../../assets/gif2.gif") } />
                </View>

                <View style={ styles.Buttons } >
                    <>
                        <TouchableOpacity style={styles.btnUpdate}>
                                <Text style={styles.submitTextUpdate}>Atualizar</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.btnExit}>
                                <Text style={styles.textExit}>Sair do aplicativo</Text>
                        </TouchableOpacity>
                    </>
                </View>

            </View>
        );


}

export default NoInternet;