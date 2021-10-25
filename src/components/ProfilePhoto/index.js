import React,{useState,useContext} from "react";
import { View, Image,TouchableOpacity} from "react-native";
import styles from "./styles";
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert, StyleSheet, Text, Pressable} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-community/picker';
import {UserContext} from "../../context/UserContext";
import * as FileSystem from 'expo-file-system';
import Api  from '../../view/Apis/User/Api';

const ProfilePhoto = (props) => {

  const [selectedImage, setSelectedImage] = useState([]);
  const { state:person }=useContext(UserContext);
  const {dispatch:userDispatch} =useContext(UserContext);
  const fileReader = new FileReader();
  
  const uploadImages = async()=>{

      const formData =new FormData();

      formData.append('image', {
          uri: selectedImage[0].count,
          type: "image/jpeg",
          name: selectedImage[0].count
      })

      formData.append('user_id',person.id);

      let json = await Api.UploadImagePerfil(formData);
      
      
      if( json.status ){

        const base64 = await FileSystem.readAsStringAsync(selectedImage[0].count, { encoding: 'base64' });

        userDispatch({

          type:'setAvatar',
          payload:{
              avatar:base64
          },
          
        });
        Alert.alert(
          "Foto do perfil atualizada !",
          "",
          [
            { text: "OK", onPress: () =>  null}
          ]
        );
        
      }else{

        Alert.alert(
          "Opss!",
          "Houve algum erro ao atualizar a foto",
          [
            { text: "OK", onPress: () =>  null}
          ]
        );

      }

  }

  const handdleButtonclick = () =>{
      
    Alert.alert(
      "Deseja alterar a foto do perfil?",
      "",
      [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "OK", onPress: () => uploadImages() }
      ]
    );
  

  }


  let openImagePickerAsync = async () => {


    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
        allowsEditing: true,
      });
      
      setSelectedImage([]);
      const count="localUri"+selectedImage.length;
      
      if ( ! result.cancelled ) {
  
        setSelectedImage((selectedImage)=>[...selectedImage,{ count: result.uri }]);
      
      }
      
    
  }

  return (
 
      
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={props.isVisible}
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <TouchableOpacity onPress={props.onClose} style={{ alignSelf:"flex-end",bottom:15}}>
                    <Icon  name="times" size={25} color="red"/>
              </TouchableOpacity>
              <View>
                {
                
                selectedImage[0]?
                selectedImage && selectedImage.map( localUri =>   
                  <Image
                      style={ styles.photo }
                      key={ localUri.count }
                      source={{ uri:localUri.count }}
                      />
                  )

                  :
                    <Image

                        style={ styles.photo }
                        source={ 

                          person.avatar ?  {  uri: `data:image/jpg;base64,${person.avatar}` } 
                          : require("../../assets/avatar.jpg")

                        }
                        
                       
                     />
                    
                }
                
                <TouchableOpacity  style={styles.chooseImage} onPress={openImagePickerAsync}>
                        <Icon  name="camera-retro" size={24} color="#B33BF6"/>
                </TouchableOpacity>
              </View>
              <View style={{ width:'90%',alignItems:'center'}} >
                <TouchableOpacity style={styles.footerbtn} onPress={handdleButtonclick}>
                      <Text style={{ fontWeight:'bold',color:'#B33BF6' }}>Salvar</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </Modal>
  );

};

export default ProfilePhoto;
