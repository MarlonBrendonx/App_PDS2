import React, { useState,useEffect} from 'react';
import { View,Button,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles';
import { Input,Text  } from 'react-native-elements';
import { AntDesign,Ionicons } from "@expo/vector-icons";
import Header from "../../../components/Header"
import { Image } from 'react-native';

function ProfileField({route,navigation}){

        const { title, type } = route.params;
        console.log(title);
        return (
            <View style={ styles.container }>
            
                <Header navigation={navigation} title={title} />

                <View style={ styles.body }>

                <TextInput
                    style={styles.inputText }
                    placeholder="Nome"
                    underlineColorAndroid="transparent"
                />
                
                <TouchableOpacity style={ styles.btnChange }>
                    <Text style={{  color:"#FFF" }}> Alterar </Text>
                </TouchableOpacity>
               
                </View>

            </View>
        );


}

export default ProfileField;