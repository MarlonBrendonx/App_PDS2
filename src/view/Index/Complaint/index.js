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


function Complaint({route,navigation}) {

   const { coordinate,type,StateInsertList,item } = route.params;
    
    return(
      
            <View style={ styles.container }>
              <Header navigation={navigation} title="DenĂșncias" />
              <ScrollView >
                <EventBody 
                  color="red"  
                  navigation={navigation} 
                  coordinate={coordinate} 
                  type={type} 
                  StateInsertList={StateInsertList}
                  item={item}
                />
              </ScrollView>        
           </View>         
    );
}
export default Complaint;