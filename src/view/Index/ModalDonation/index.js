import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Button,Text,TextInput,TouchableOpacity, Touchable } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import styles from "./styles";
import Modal from 'react-native-modal';
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native';
import SwipeList  from "../../../components/SwipeList/swipe_value_based_ui";

function ModalDonation({ isVisible, onClose }) {
   
    return(
      <>
      <Modal animationIn="slideInUp" isVisible={isVisible}>
            <View style={ styles.Container }>

                <View style={ styles.header }>
                    <TouchableOpacity onPress={onClose} style={ styles.btnclose }>
                        <Entypo name="cross" size={35} color="#B33BF6" />
                    </TouchableOpacity>
                </View>
              
                <View style={ styles.notificationItems }>
                        <SwipeList color="#faab64" />
                        <SwipeList color="#5cc5c0" />
                        <SwipeList color="#ED1C34" />
                </View>
            
            </View>
      </Modal>
     </>
    );
}
export default ModalDonation;