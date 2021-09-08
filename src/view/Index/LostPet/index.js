import React, { useState, useEffect,useContext } from 'react';
import { Image,View,Button,Text,TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from "./styles";
import Modal from 'react-native-modal';
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native';
import Header from "../../../components/Header";
import { SvgUri } from 'react-native-svg';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import {UserContext} from "../../../context/UserContext";
import Api from "../../Apis/Map/Api";


function LostPet({ route,navigation }) {

   
    const [selectedImage, setSelectedImage] = useState([]);

    const [status, setSelectedValue] = useState(null);
    const { coordinate,type }= route.params;
    const [information,setInformation] = useState(null);
    const [photos,setPhotos] = useState(null);
    const [animal_id,setAnimal_ID] = useState(null);


    const { state:person }=useContext(UserContext);

  
    let openImagePickerAsync = async () => {

        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("É necessário dar permissão para acessar a galeria");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }
        const count="localUri"+selectedImage.length;

        setSelectedImage((selectedImage)=>[...selectedImage,{ count: pickerResult.uri }]);
     

    }
    
    const handleRegisterButtonClick = async() =>{

        setAnimal_ID(1);
      
   
        if( animal_id != '' && status != null && information != '' && coordinate != null  && person.id != '' ){

            
            let json = await Api.registerEvent(

                type,
                status,
                coordinate.latitude,
                coordinate.longitude,
                information,
                1,
                person.id
                
            );
            
            if( json.status ){
                
                alert("Evento cadastrado!");

            }else{

                alert("Houve algum erro!");
            }
            
        }else{

            alert("[*] Campos vazios!");
        }

    }



    return(
      
            <View style={ styles.container }>
              <ScrollView style={{ flex:1 }}>
                <Header navigation={navigation} title="Animal Perdido" />
                <BackgroundImage source={ require("../../../assets/LostPet/walpaper2.png") } style={ styles.wlpBackground }>
                    <View style={{  backgroundColor: 'rgba(255, 255, 255, 0.90)',flex:1 }}>   
                        <View style={ styles.titles }>
                            <Text style={ styles.txtTitle }>Preencha as informações do</Text>
                            <Text style={ styles.txtTitle2 }>Evento!</Text>
                        </View>
                        <View style={ styles.body }>
                            
                            <View style={ styles.containerOptions } >
                            <TouchableOpacity>
                                <View style={ styles.optionsEvent }>
                                        
                                        <Text style={ styles.Optiontitle }>Meu Pet</Text>
                                        <Ionicons name="open-outline" size={24} color="black" /> 
                                </View>
                            </TouchableOpacity>
                            <View style={ styles.containerOptions }>
                                <Text style={ styles.txtOption }>Infome o status</Text>
                                <Picker
                                    selectedValue={status}
                                    style={ styles.pickerField }
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                   
                                    >
                                    <Picker.Item color="red" label="Não Resolvido" value="Não Resolvido" />
                                    <Picker.Item color="green" label="Resolvido" value="Resolvido" />
                                    <Picker.Item color="orange" label="Em Andamento" value="Em Andamento" />

                                </Picker>
                            </View>
                            <View style={ styles.containerOptions }>
                                <Text style={ styles.txtOption }>Informações</Text>
                                <TextInput
                                    style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    placeholder="Informe alguns detalhes "
                                    placeholderTextColor="grey"
                                    numberOfLines={10}
                                    multiline={true}
                                    onChangeText={t=>setInformation(t)}
                                    />
                            </View>
    
                            </View>
                            <View >
                                <TouchableOpacity style={ styles.btnAddPhoto } onPress={openImagePickerAsync} >
                                   <Image 

                                        style={{ height:24,width:24}}
                                        source={ require("../../../assets/Events/camera.png") }
                                   
                                   />
                                </TouchableOpacity>
                                <View style={styles.containerImage}>
                                    <ScrollView horizontal={true}>
                                        
                                            {

                                            selectedImage.map( localUri =>   
                                            <Image
                                                style={ styles.imgsContainer }
                                                key={ localUri.count }
                                                source={{ uri:localUri.count }}
                                                />
                                            )}
                                        
                                    </ScrollView>  
                                </View>
                             </View>
                             <View style={{ width:'95%',paddingTop:10  }}>
                                <TouchableOpacity style={ styles.btnAddEvent } onPress={handleRegisterButtonClick}  >
                                    <Text style={{ color:'white' }}>Adicionar evento</Text> 
                                    <Image style={ styles.iconButtonsubmit } source={require("../../../assets/login/paw.png")} />
                                </TouchableOpacity>
                             </View>
                        </View>
                    </View>
                </BackgroundImage>
                </ScrollView>
           </View>

    );
}
export default LostPet;