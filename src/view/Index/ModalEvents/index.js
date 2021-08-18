import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Button,Text,TextInput,TouchableOpacity, ScrollView } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import styles from "./styles";
import Modal from 'react-native-modal';
import { Entypo } from "@expo/vector-icons";
import ContainerEvent from "../../../components/ContainerEvents";
import iconevent_1 from "../../../assets/main/event_1.png"
import iconevent_2 from "../../../assets/main/event_2.png";
import iconevent_3 from "../../../assets/main/event_3.png";


function ModalEvents({ isVisible, onClose }) {
   
    return(
      <>
      <Modal swipeDirection="down" isVisible={isVisible}>
            <View style={ styles.Container }>

                <View style={ styles.header }>
                    <TouchableOpacity onPress={onClose} style={ styles.btnclose }>
                        <Entypo name="cross" size={35} color="#fff" />
                    </TouchableOpacity>
                </View>
                
                <View style={ styles.modalBody }>
                    <ContainerEvent title="Animal Perdido"  iconevent={ iconevent_1 } screen="Screen_LostPet" color="#faab64"     />
                    <ContainerEvent title="Casinha comunitária" iconevent={ iconevent_2 } screen="Screen_CommunityHouse" color="#5cc5c0"   />
                    <ContainerEvent title="Denúncia" iconevent={ iconevent_3 } screen="Screen_Complaint" color="red" />
                </View>
               
            </View>
      </Modal>
     </>
    );
}
export default ModalEvents;