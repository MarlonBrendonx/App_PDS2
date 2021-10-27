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
import ApiPet from "../../Apis/Pets/Api";
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
    const [listPets,setListPets]=useState([]);
    const [nameAnimal,setnameAnimal]=useState("Meu Pet");
   

    const { state:person }=useContext(UserContext);

    const { item,Edit } = route.params;

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

        let json = await ApiPet.getPetsById(person.id);

        if( json.status ){

            setListPets(json.msg);
            
        }else{

            alert("Erro ao buscar os pets");
        }

    }

    useEffect( ()=>{

        getAnimals();

        if( Edit ){
            setnameAnimal(item.name);
            setAnimal_ID(item.id_animal);
            setSelectedValue(item.status);
            setInformation(item.information);
        }

    },[]);

    const setAnimalId = (id_animal,name) =>{

        setAnimal_ID(id_animal);
        setnameAnimal(name);
       

    }

    const toggleModal = () => {
        setisModalVisible(!isModalVisible);
    };
    
    const handleRegisterButtonClick = async() =>{

        
        if( selectedImage.length !=0 && animal_id != null && information != '' && coordinate != null  && person.id != null ){


            let json = await Api.registerEvent(

                type,
                "Não resolvido",
                "images/" + person.id,
                coordinate.latitude,
                coordinate.longitude,
                information,
                animal_id,
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

    const handleUpdateButtonClick = async() =>{

        if( status != null && animal_id != null && information != '' && item != null  && person.id != null ){
            
            let json = await Api.UpdateEvent(
  
              information,
              status,
              item.id_event,
              item.type,
              animal_id
            
            );
  
            if( json.status ){
  
              alert(json.msg);
              
              navigation.navigate("MyEvents",{refresh:true});
  
            }else{
  
              alert(json.msg);
              
            }
          
            
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
                            <ModalPets isVisible={isModalVisible} onClose={toggleModal} list={listPets} AnimalId={setAnimalId} />
                            <TouchableOpacity onPress={toggleModal}>
                                <View style={ styles.optionsEvent }>
                                        <Text style={ styles.Optiontitle }>{nameAnimal}</Text>
                                        <Ionicons name="open-outline" size={24} color="black" /> 
                                </View>
                            </TouchableOpacity>
                            <View style={ styles.containerOptions }>
                                <Text style={ styles.txtOption }>Informações</Text>
                                <TextInput
                                    style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    placeholder={ Edit && item ? item.information : "Informe alguns detalhes " }
                                    placeholderTextColor="grey"
                                    numberOfLines={10}
                                    multiline={true}
                                    onChangeText={t=>setInformation(t)}
                                    />
                            </View>
                            </View>
                            <View >
                                <TouchableOpacity style={ Edit && item ? { display:'none'}: styles.btnAddPhoto } onPress={openImagePickerAsync} >
                                   <Image 

                                        style={{ height:24,width:24 }}
                                        source={ require("../../../assets/Events/camera.png") }
                                   
                                   />
                                </TouchableOpacity>
                                <Text style={ Edit && item ? { marginTop:10,left:10 }: {display:'none'}}>Status:</Text>
                                <Picker
                                    selectedValue={status}
                                    style={ Edit && item   ? { height: 50, width: 190 }: { display:'none' }  }
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Não resolvido" value="Não resolvido" />
                                    <Picker.Item label="Em andamento" value="Em andamento" />
                                    <Picker.Item label="Resolvido" value="Resolvido" />
                                </Picker>
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
                                <TouchableOpacity style={ styles.btnAddEvent } onPress={ Edit && item ? handleUpdateButtonClick : handleRegisterButtonClick}  >
                                    <Text style={{ color:'white' }}>{ Edit && item ? "Salvar Alteração"  : "Adicionar evento" }</Text> 
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