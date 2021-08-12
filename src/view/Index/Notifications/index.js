import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Button,Text,TextInput,TouchableOpacity, Touchable } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import styles from "./styles";
import Modal from 'react-native-modal';

function Notifications({ isVisible, onClose }) {
   
    return(
      <>
      <Modal animationIn="slideInUp" isVisible={isVisible}>
            <View style={ styles.Container }>

                <TouchableOpacity onPress={onClose}>
                    <Text style={{ color:'red', fontWeight:'bold' }}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
     </>
    );
}
export default Notifications;