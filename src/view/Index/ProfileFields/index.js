import React, { useState,useEffect,useContext} from 'react';
import { View,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles';
import { Text  } from 'react-native-elements';
import Header from "../../../components/Header"
import { AsyncStorage } from 'react-native';
import Api from "../../Apis/User/Api";
import {UserContext} from '../../../context/UserContext';


function ProfileField({route,navigation}){

        const { title, type, field, plcholder} = route.params;
        const [strfield,setField] = useState(null);

        const {dispatch:userDispatch} =useContext(UserContext);

        const handleLoginButtonClick = async() =>{

            if( field != ''  ){

                  const token= await AsyncStorage.getItem('token');
                  let json= await Api.Update(strfield,field,token);
                  
                  if( json.status ){
                    
                      alert("O campo foi alterado com sucesso!");

                      userDispatch({
                        type:type,
                        payload:{
                            name:strfield
                        },
                        
                      });
                      
                  }else{

                      alert("Erro ao alterar o campo!"); 
                      
                  }

            }else{

                  alert("O campo esta vazio!");
            }
              
         };

        return (
            <View style={ styles.container }>
            
                <Header navigation={navigation} title={title} />

                <View style={ styles.body }>

                <TextInput
                    style={styles.inputText }
                    placeholder={plcholder}
                    underlineColorAndroid="transparent"
                    onChangeText={ t => setField(t) }
                />
                
                <TouchableOpacity style={ styles.btnChange } onPress={handleLoginButtonClick}>
                    <Text style={{  color:"#FFF" }}> Alterar </Text>
                </TouchableOpacity>
               
                </View>

            </View>
        );


}

export default ProfileField;