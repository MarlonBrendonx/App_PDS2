import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Button,Text,TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from "./styles";
import Modal from 'react-native-modal';
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native';
import EventBody from '../../../components/EventBody';
import Header from "../../../components/Header"; 
import Sv from '../../../assets/avatar.jpg';          // SVG File
import { SvgUri } from 'react-native-svg';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';


function CommunityHouse({ navigation }) {

   
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
      
            <View style={ styles.container }>
              <Header navigation={navigation} title="Casinhas comunitárias" />
              <ScrollView >
                <EventBody color="#5cc5c0"/>
              </ScrollView>        
           </View>         
    );
}
export default CommunityHouse;