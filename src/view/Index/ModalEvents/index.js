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
import Navigation from '../../../../Navigation';


function ModalEvents({ StateInsertList,isVisible, onClose,navigation,coordinate }) {
   
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
                    <ContainerEvent 
                        title="Animal Perdido"  
                        iconevent={ iconevent_1 } 
                        screen="LostPet" 
                        color="#faab64"  
                        onClose={onClose} 
                        navigation={navigation}
                        coordinate={coordinate} 
                        type="0" 
                        StateInsertList={StateInsertList}
                        width={80}
                        height={80}
                        left={10}
                    />
                     
                    <ContainerEvent 
                        title="Casinha comunitária"
                        iconevent={ iconevent_2 } 
                        screen="CommunityHouse"
                        color="#5cc5c0"
                        onClose={onClose}
                        navigation={navigation}
                        coordinate={coordinate}
                        type="1"
                        StateInsertList={StateInsertList} 
                        width={70}
                        height={80}
                    />
                    <ContainerEvent
                        title="Denúncia"
                        iconevent={ iconevent_3 }
                        screen="Complaint"
                        color="red"
                        onClose={onClose}
                        navigation={navigation}
                        coordinate={coordinate}
                        type="2"
                        StateInsertList={StateInsertList} 
                        width={120}
                        height={120}
                    />
                </View>
               
            </View>
      </Modal>
     </>
    );
}
export default ModalEvents;