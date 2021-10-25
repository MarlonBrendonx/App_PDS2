import React, { useState,useContext} from 'react';
import { View,Button,TextInput,TouchableOpacity,Image,Alert,ScrollView } from 'react-native';
import styles from './styles';
import { Input,Text  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../../../../components/Header";
import Api from "../../../Apis/User/Api";
import {UserContext} from '../../../../context/UserContext';
import { AsyncStorage } from "react-native";

function ProfileRemove({navigation}){

        const [hidePass,  setHidePass] = useState(true);
        const [passwd, setPasswd] = useState(""); 
        const {state:person} = useContext(UserContext);   

        const ButtonClick = () =>{
            
            if( passwd != null  ){

                Alert.alert(
                    "Realmente deseja remover seu usuário ? ",
                    "*Todos os dados serão removidos permanentemente!",
                    [
                    {
                        text: "Cancelar",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => removeAccount() }
                    
                    ]
                );

            }else{
                    
                Alert.alert(
                    "Campos inválidos ! ",
                    "",
                    [
                    {
                        text: "Ok",
                        onPress: () =>  null,
                        style: "OK"
                    },
                    ]
                );
            }
        }

        const removeAccount = async ()=>{

            if( passwd != ''  ){

                let json= await Api.Remove(passwd,person.email);
                
                if( json.status ){
                    
                    await AsyncStorage.removeItem('token');

                    Alert.alert(
                        "Conta removida !",
                        "",
                        [
                        {
                            text: "Ok",
                            onPress: () =>  navigation.navigate("Preloading",{refresh:true}),
                            style: "OK"
                        },
                        ]
                    );
                    
                }else{

                    alert(json.msg); 
                    
                }

            }else{

                alert("O campo de senha está vazio!");
            }
            

        }

            

        return (
            <View style={ styles.container }>
                <Header navigation={navigation} title="Remover Conta" />

                    <ScrollView vertical={true} style={{ flex:1 }}>
                        <View style={ styles.body }>

                            <View style={styles.titleHeader}>
                                <Text style={styles.title}>Ah não !</Text>
                            </View>
                            <View style={ styles.imagegif }>
                                <Image style={{ height:230,width:200 }}source={ require("../../../../assets/remove-acc.png") } />
                            </View>
                            <View style={styles.footer}>
                                <TextInput
                                    style={ styles.inputText }
                                    placeholder="Informe a senha"
                                    underlineColorAndroid="transparent"
                                    secureTextEntry={hidePass ? true : false}
                                    onChangeText={ passwd => setPasswd(passwd) }
                                />
                                <TouchableOpacity style={ styles.btnChange } onPress={ButtonClick}>
                                    <Text style={{  color:"#FFF" }}> Excluir conta</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
            </View>
        );


}

export default ProfileRemove;