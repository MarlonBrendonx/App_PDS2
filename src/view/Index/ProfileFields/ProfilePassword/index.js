import React, { useState,useEffect} from 'react';
import { View,Button,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles';
import { Input,Text  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../../../../components/Header";


function ProfilePassword({navigation}){

        const [hidePass,  setHidePass] = useState(true);
            
        return (
            <View style={ styles.container }>
            
                <Header navigation={navigation} title="Alterar Senha" />

                <View style={ styles.body }>

                <TextInput
                    style={styles.inputText }
                    placeholder="Senha atual"
                    underlineColorAndroid="transparent"
                    secureTextEntry={hidePass ? true : false}
                    
                    
                />
                
                <TouchableOpacity style={ styles.btnChange }>
                    <Text style={{  color:"#FFF" }}> Definir nova senha </Text>
                </TouchableOpacity>
               
                </View>

            </View>
        );


}

export default ProfilePassword;