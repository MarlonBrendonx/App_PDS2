import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Button,Text,TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from "./styles";
import Modal from 'react-native-modal';
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native';  
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';


function EventBody(props) {

   
    const [selectedImage, setSelectedImage] = useState([]);

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
        console.log(selectedImage.length);

      }
    const [selectedValue, setSelectedValue] = useState("java");
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
                    
                      <TouchableOpacity style={ styles(props).btnAddEvent }  >
                        <Text style={{ color:'white' }}>Adicionar evento</Text> 
                        <Image style={ styles(props).iconButtonsubmit } source={require("../../assets/login/paw.png")} />
                      </TouchableOpacity>
                      
                  </View>
                </View>
              </BackgroundImage>
             
              
    );
}
export default EventBody;