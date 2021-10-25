import React, { useState,useEffect} from 'react';
import { View,Button,TextInput,TouchableOpacity,Alert} from 'react-native';
import styles from './styles';
import { Input,Text  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../../../../components/Header";
import Api from '../../../Apis/User/Api';

function ProfileRemove({props,navigation}){

        const [hidePass,  setHidePass] = useState(true);
        const [passwd,  setPass] = useState(null);
        const [newpasswd,  setNewPass] = useState(null);

        const handleButtonClick = async() =>{

            if( passwd != null && newpasswd != null ){

            
                let json= await Api.redfinePass(passwd,newpasswd);
			
				if( json.status ){
                    
                    Alert.alert(
                        json.msg,
                        "",
                        [
                        
                        { text: "OK", onPress: () => null }
                        
                        ]
                    );
                    

                }else{

                    Alert.alert(
                        json.msg,
                        "",
                        [
                        
                        { text: "OK", onPress: () => null }
                        
                        ]
                    );

                }


            }else{

                Alert.alert(
                    "Campos inválidos! ",
                    "",
                    [
                    
                    { text: "OK", onPress: () => null }
                    
                    ]
                );


            }
			

        }

            
        return (
            <View style={ styles.container }>
                <Header navigation={navigation} title="Alterar Senha" />
                <View style={ styles.body }>
                <TextInput
                    style={styles.inputText }
                    placeholder="Senha atual"
                    underlineColorAndroid="transparent"
                    secureTextEntry={hidePass ? true : false}
                    onChangeText={t=>setPass(t)}
                    disabled={true}
                />
                <TextInput
                    style={styles.inputText }
                    placeholder="Nova senha"
                    underlineColorAndroid="transparent"
                    secureTextEntry={hidePass ? true : false}
                    onChangeText={t=>setNewPass(t)}
                    disabled={true}
                />
                <TouchableOpacity style={ styles.btnChange } disabled={true} onPress={handleButtonClick}>
                    <Text style={{  color:"#FFF" }}> Definir nova senha </Text>
                </TouchableOpacity>
                </View>
            </View>
        );


}

export default ProfileRemove;