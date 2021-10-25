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
import ModalPets  from './ModalPets';

function LostPet({ route,navigation }) {

   
    const [selectedImage, setSelectedImage] = useState([]);

    const [status, setSelectedValue] = useState("Não resolvido");
    const { coordinate,type,StateInsertList }= route.params;
    const [information,setInformation] = useState("");
    const [photos,setPhotos] = useState(null);
    const [animal_id,setAnimal_ID] = useState(null);
    const [stateError,setStateError] = useState(false);
    const [isModalVisible,setisModalVisible] = useState(false);

    const { state:person }=useContext(UserContext);

    const uploadImages = async(form)=>{

        let json = await Api.UploadImageEvents(
            form,
        );

        return json.status;
   }

    let openImagePickerAsync = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 3],
            quality: 1,
          });
          
          const count="localUri"+selectedImage.length;
  
          if ( ! result.cancelled ) {
  
            setSelectedImage((selectedImage)=>[...selectedImage,{ count: result.uri }]);
          
          }
          
          console.log(selectedImage);
    
    }


    const getAnimals = async () => {

      

    }
    
    const handleRegisterButtonClick = async() =>{

        setAnimal_ID(3);
        
        if( selectedImage.length !=0  && information != '' && coordinate != null  && person.id != null ){


            let json = await Api.registerEvent(

                type,
                "Não resolvido",
                "images/" + person.id,
                coordinate.latitude,
                coordinate.longitude,
                information,
                3,
                person.id
                
            );
            
            if( json.status ){
              
                StateInsertList();
                
                  const formData =new FormData();
          
                  Object.keys(selectedImage).map(function(key,value) {
                  
                      formData.append('image', {
                          uri: selectedImage[value].count,
                          type: "image/jpeg",
                          name: selectedImage[value].count
                       }),
        
                       formData.append('id_user',person.id)
                       formData.append('id_event',json.msg) 
          
                      const  status= uploadImages(formData);
        
                      if( ! status ){
                         setStateError(true);
                         return;
                      }
        
                  });
                
        
                  if( stateError ){

                      alert("Oops! Não conseguimos inserir as imagens :(\n");
                      
                  
                  }else if( !stateError ){
                     
                      alert("Evento cadastrado com sucesso!\n");
                      navigation.goBack();

                  }
                  
                  setStateError(false);
                  
            }else{

                alert("Houve algum erro!");
            }
            
        }else{

            alert("[*] Campos vazios!");
        }
       

    }

    const toggleModal = () => {
        setisModalVisible(!isModalVisible);
    };

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
                            <ModalPets isVisible={isModalVisible} onClose={toggleModal} />
                            <TouchableOpacity onPress={toggleModal}>
                                <View style={ styles.optionsEvent }>
                                        <Text style={ styles.Optiontitle }>Meu Pet</Text>
                                        <Ionicons name="open-outline" size={24} color="black" /> 
                                </View>
                            </TouchableOpacity>
                            
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