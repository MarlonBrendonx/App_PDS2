import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Button,Text,TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from "./styles";
import Modal from 'react-native-modal';
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Ionicons } from "@expo/vector-icons";
import  MapView,{ Marker,Callout }  from 'react-native-maps';

function CalloutMap(props) {

   
    return(

      <Marker  coordinate={ props.coordinate } >
      <Image style={styles(props).avatar} source={require("../../../assets/main/event_1.png")}/>
          <Callout tooltip={true}  onPress={()=>{
              //
              //navigation.navigate('Profile',{ github_username: 'debmarlon' });

          }}>
             <View style={styles(props).callout}>
              <View style={ styles(props).headercallout }>
                <Text style={styles(props).devname}>Animal Perdido</Text>
              </View> 
              <View style={ styles(props).body }>
                <Text style={styles(props).devbio}>Nome: Bob</Text>
                <Text style={styles(props).devtest}>Raça: Vira-Lata</Text>
                <Text style={styles(props).status}>Status: Não resolvido</Text>
                <View style={ styles(props).containerimgs }>
                </View>
              </View>
            </View>

          </Callout>
      </Marker>
            
    );
}
export default CalloutMap;