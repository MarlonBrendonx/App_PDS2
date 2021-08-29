import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Button,Text,TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from "./styles";
import Header from '../../../components/Header';
import Modal from 'react-native-modal';
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native';  
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyEventsContainer from '../../../components/MyEvents';
import MyEventsCommunity from '../../../components/MyEvents/CommunityHose';
import MyEventsComplaint from '../../../components/MyEvents/Complaint';

function MyEvents({navigation}) {
 
    return(
        
        <View style={ styles.container }>
            <Header navigation={navigation} title="Meus eventos" />    
            <View style={ styles.containerBody }>
            <View style={styles.form}>
            <View style={styles.searchSection}>    
                <TouchableOpacity style={styles.btnSettings}>
                <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                </TouchableOpacity>
                
                <TextInput
                    style={styles.input}
                    placeholder="Buscar"
                    underlineColorAndroid="transparent"
                />
                <TouchableOpacity style={styles.btnSettings}  >
                    <Icon style={styles.searchIcon2} name="sliders" size={20} color="#000"/>
                </TouchableOpacity>
            </View>
            </View>
            <View style={ styles.list }>
             
                <MyEventsContainer />
                <MyEventsCommunity />
                <MyEventsComplaint />
             
            </View>    
             
            </View>
        </View>
              
    );
}
export default MyEvents;