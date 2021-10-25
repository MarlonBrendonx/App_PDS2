import React,{useState,useContext} from "react";
import { View, Image,TouchableOpacity,ScrollView} from "react-native";
import styles from "./styles";
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert, StyleSheet, Text, Pressable} from "react-native";
import {UserContext} from "../../context/UserContext";


const InformationResponse = (props) => {

  const [selectedImage, setSelectedImage] = useState([]);
  const { state:person }=useContext(UserContext);
  const {dispatch:userDispatch} =useContext(UserContext);
  var datetime=props.item.created_at.split(" ");
  var date=datetime[0].split("-");
  var time=datetime[1].split(":");

  console.log(time);

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

  return (
 
      
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={props.isVisible}
        
      >
        <View style={styles.centeredView}>
        <Text >Respondido por: </Text>
          <View style={styles.modalView}>
              <TouchableOpacity onPress={props.onClose} style={{ alignSelf:"flex-end",bottom:15}}>
                    <Icon  name="times" size={25} color="red"/>
              </TouchableOpacity>
              
              <View>
             
                    <Image

                        style={ styles.photo }
                        source={ 

                          props.item.photo ?  {  uri: `data:image/jpg;base64,${props.item.photo}` } 
                          : require("../../assets/avatar.jpg")

                        }
                        
                     />
                    
              </View>
              <ScrollView style={ styles.fields } >
                  
                <Text style={styles.field} >Nome: {props.item.name}</Text>
                <Text style={styles.field} >Telefone: {props.item.phone}</Text>
                <Text style={styles.field} >Respondido ás: { time[0] + ':'+ time[1] +  ' - ' + date[2]+'/'+date[1]+'/' + date[0]}</Text>
                
              </ScrollView>
          </View>
        </View>
      </Modal>
  );

};

export default InformationResponse;
