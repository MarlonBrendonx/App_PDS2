import React, { useState, useEffect,useContext } from 'react';
import { Image,View,Button,Text,TextInput,TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import styles from "./styles";
import Modal from 'react-native-modal';
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native';
import {UserContext} from '../../../../context/UserContext';


function ModalPets({ isVisible, onClose,navigation }) {
   
    const [listnotf,setListNotf] = useState([]);
    const [state,setState]=useState(false);
    const [stateRemoveNotf,setRemoveNotf]=useState(false);
    const [loadingnotf,setLoadingnotf]=useState(false);
    const {state:person} =useContext(UserContext);
  
    return(
      <>
      <Modal animationIn="slideInUp" isVisible={isVisible}>
            <View style={ styles.Container }>

                <View style={ styles.header }>
                    <TouchableOpacity onPress={onClose} style={ styles.btnclose }>
                        <Entypo name="cross" size={35} color="#B33BF6" />
                    </TouchableOpacity>
                </View>
              
                <ScrollView style={ styles.notificationItems }>   
                </ScrollView>
            </View>
            
      </Modal>
     </>
    );
}
export default ModalPets;