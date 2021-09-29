import React, { useState, useEffect,useContext  } from 'react';
import { Image,View,NavigationActions,Text,TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from "./styles";
import Modal from 'react-native-modal';
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native';  
import { BackgroundImage } from 'react-native-elements/dist/config';
import * as ImagePicker from 'expo-image-picker';
import {UserContext} from "../../context/UserContext";
import Api from '../../view/Apis/Map/Api';
import Navigation from '../../../Navigation';

function EventBody(props) {

   
    const [selectedImage, setSelectedImage] = useState([]);
    const [information,setInformation] = useState("");
    const { state:person }=useContext(UserContext);
    const [imagesArray,setImagesArray] = useState([{}]);
    const [stateError,setStateError] = useState(false);


     const uploadImages = async(form)=>{

          let json = await Api.UploadImageEvents(
              form,
          );

          return json.status;
     }

     const handleRegisterButtonClick = async() =>{

        if(  information != '' && props.coordinate != null  && person.id != '' && selectedImage.length ){

          
         
              let json = await Api.registerEvent(

                  props.type,
                  'Não resolvido',
                  "images/" + person.id,
                  props.coordinate.latitude,
                  props.coordinate.longitude,
                  information,
                  null,
                  person.id,
                  
              );
              
              if( json.status ){

                  props.StateInsertList();
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
                      props.navigation.goBack();

                  }
                  
                  setStateError(false);
  

              }else{
                  alert("Houve algum erro!");
              }
              
        }else{

          alert("[*] Campos vazios!");

        }

  }
       

    let openImagePickerAsync = async () => {
        

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          aspect: [4, 3],
          quality: 1,
        });
        
        const count="localUri"+selectedImage.length;

        if ( ! result.cancelled ) {


          const data = new FormData();

          setSelectedImage((selectedImage)=>[...selectedImage,{ count: result.uri }]);

        
        }
    
         

      }
  
    return(
  
              <BackgroundImage source={ require("../../assets/LostPet/walpaper2.png") } style={ styles(props).wlpBackground }>
                <View style={{  backgroundColor: 'rgba(255, 255, 255, 0.90)',flex:1 }}>
                  <View style={ styles(props).titles }>
                    <Text style={ styles(props).txtTitle }>Preencha as informações do</Text>
                    <Text style={ styles(props).txtTitle2 }>Evento!</Text>
                  </View>
                  <View style={styles(props).body }>
                    <Text style={ styles(props).txtOption }>Informações</Text>
                    <TextInput
                      style={ styles(props).textArea }
                      underlineColorAndroid="transparent"
                      placeholder="Informe alguns detalhes "
                      placeholderTextColor="grey"
                      numberOfLines={10}
                      multiline={true}
                      onChangeText={t=>setInformation(t)}
                      
                    />
                    <TouchableOpacity style={ styles(props).btnAddPhoto } onPress={openImagePickerAsync} >
                      <Image 

                        style={{ height:24,width:24}}
                        source={ require("../../assets/Events/camera.png") }
                                   
                      />
                    </TouchableOpacity>
                    <View style={styles(props).containerImage}>
                      <ScrollView horizontal={true} style={{ width: '94%' }}>
                                          
                      
                      {
                        selectedImage.map( localUri =>   
                        <Image
                          style={ styles(props).imgsContainer }
                          key={ localUri.count }
                          source={{ uri:localUri.count }}
                        />
                      )}                  
                      </ScrollView>  
                    </View>
                      <TouchableOpacity style={ styles(props).btnAddEvent } onPress={ handleRegisterButtonClick}>
                        <Text style={{ color:'white' }}>Adicionar evento</Text> 
                        <Image style={ styles(props).iconButtonsubmit } source={require("../../assets/login/paw.png")} />
                      </TouchableOpacity>
                  </View>
                </View>
              </BackgroundImage>
             
              
    );
}
export default EventBody;