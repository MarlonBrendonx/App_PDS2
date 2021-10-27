import React, { useState,useEffect} from 'react';
import { View,Button,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles';
import { Input,Text  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../../components/Header";


function Admin({props,navigation}){

        const [url,setURL]=useState("");

        const handleLinkButtonClick = () =>{
            
            if( url != "" ){

                BASE_API=url+'/api';
                alert("Url inserida!");
                navigation.navigate("SignIn");

            }else{

                alert("Informe a URL!");
            }


        };
            
        return (
            <View style={ styles.container }>
            
                <Header navigation={navigation} title="Admin" />

                <View style={ styles.body }>

                <TextInput
                    style={styles.inputText }
                    placeholder="URL"
                    underlineColorAndroid="transparent"
                    onChangeText={ t => setURL(t) }
                    
                    
                />
                
                <TouchableOpacity style={ styles.btnChange } onPress={handleLinkButtonClick}>
                    <Text style={{  color:"#FFF" }}> Inserir link </Text>
                </TouchableOpacity>
               
                </View>

            </View>
        );


}

export default Admin;