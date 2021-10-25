import React, { useState, useEffect,useContext  } from 'react';
import { Image,View,Text,TouchableOpacity, TextInput,Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from "./styles";
import Modal from 'react-native-modal';
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native';  
import { BackgroundImage } from 'react-native-elements/dist/config';
import * as ImagePicker from 'expo-image-picker';
import { UserContext } from "../../context/UserContext";
import Api from '../../view/Apis/Map/Api';

function EventBody(props) {

   
    const [selectedImage, setSelectedImage] = useState([]);
    const [selectedImageEdit, setSelectedImageEdit] = useState([]); 
    const [information,setInformation] = useState("");
    const { state:person }=useContext(UserContext);
    const [imagesArray,setImagesArray] = useState([{}]);
    const [stateError,setStateError] = useState(false);
    const [stateEdit, setStateEdit] = useState(false);  
    const [selected,setSelectedValue]=useState("");
    const [remove,setRemove]=useState(false);

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

  const handleUpdateButtonClick = async() =>{

      if( props.item.type ==  1 ){

          let json = await Api.UpdateEvent(

            information,
            null,
            props.item.id_event,
            props.item.type
          
          );

          if( json.status ){

            alert(json.msg);
            
            props.navigation.navigate("MyEvents",{refresh:true});

          }else{

            alert(json.msg);
            
          }


      }else{

        if( information != '' &&  selected){
            
       
            let json = await Api.UpdateEvent(

                information,
                selected,
                props.item.id_event,
                props.item.type
                
            );

            if( json.status ){

                alert(json.msg);
                props.navigation.navigate("MyEvents",{refresh:true});

            }else{

                alert(json.msg);
            }
            
        }
      }

  }

      
    useEffect( ()=>{

          if( props.item != null ){

            setStateEdit(true);
            setSelectedImageEdit(props.item.images);
            setSelectedValue(props.item.status);
            setInformation(props.item.information);
          
          }

    }, []);

    useEffect( ()=>{

      if( remove ){
        setSelectedImageEdit(selectedImageEdit);
        setRemove(false);
      }
      

    }, [selectedImageEdit]);
    
    
    let openImagePickerAsync = async () => {
        
        let result = await ImagePicker.launchImageLibraryAsync({

          mediaTypes: ImagePicker.MediaTypeOptions.All,
          aspect: [4, 3],
          quality: 1,

        });
        
        const count="localUri"+selectedImage.length;

        if ( ! result.cancelled ) {

          const data = new FormData();

          if( stateEdit ){

            setSelectedImageEdit((selectedImageEdit)=>[...selectedImageEdit,{ count: result.uri }]);
          
          }else{

            setSelectedImage((selectedImage)=>[...selectedImage,{ count: result.uri }]);  
                
          }
        }
  
      }

     const removeImage = async (index_params) =>{


      selectedImageEdit.map( (localUri,index) =>  

          { if(localUri.count === index_params ){
               selectedImageEdit.pop();
          } }
      )  
      setRemove(true);

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
                      placeholder={stateEdit ? props.item.information : "Informe alguns detalhes "}
                      placeholderTextColor="grey"
                      numberOfLines={10}
                      multiline={true}
                      onChangeText={  t=>setInformation(t) }
                    />
                     <Text style={stateEdit && ( props.item.type == 2 || props.item.type == 0 )  ? { marginTop:10,left:10 }: {display:'none'}}>Status:</Text>
                     <Picker
                      selectedValue={selected}
                      style={ stateEdit && ( props.item.type == 2 || props.item.type == 0 )  ? { height: 50, width: 190 }: { display:'none' }  }
                      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                     >
                        <Picker.Item label="Não resolvido" value="Não resolvido" />
                        <Picker.Item label="Em andamento" value="Em andamento" />
                        <Picker.Item label="Resolvido" value="Resolvido" />
                    </Picker>
                    <TouchableOpacity style={ stateEdit ? { display:'none' }  : styles(props).btnAddPhoto } onPress={openImagePickerAsync} >
                      <Image 

                        style={{ height:24,width:24}}
                        source={ require("../../assets/Events/camera.png") }
                                   
                      />
                    </TouchableOpacity>
                    <View style={styles(props).containerImage}>
                          <ScrollView horizontal={true}>
                                        
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
                      <TouchableOpacity style={ styles(props).btnAddEvent } onPress={ stateEdit ? handleUpdateButtonClick : handleRegisterButtonClick }>
                        <Text style={{ color:'white' }}>{ stateEdit ? "Salvar Alteração" : "Adicionar evento" } </Text> 
                        <Image style={ styles(props).iconButtonsubmit } source={require("../../assets/login/paw.png")} />
                      </TouchableOpacity>
                  </View>
                </View>
              </BackgroundImage>
             
    );
}
export default EventBody;