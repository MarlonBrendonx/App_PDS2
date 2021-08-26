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

function CalloutMap_2(props) {

  const [CalloutVisible,setVisible] = useState(true); 
    
  
    return(

      <Marker  coordinate={ props.coordinate } >
      <Image style={styles(props).avatar} source={require("../../../assets/main/event_2.png")}/>
          <Callout tooltip={true}  onPress={CalloutVisible => setVisible(false)}>
             <View style={styles(props).callout}>
              <View style={ styles(props).headercallout }>
                <Text style={styles(props).devname}>Casinha Comunitária</Text>
              </View> 
              <View style={ styles(props).body }>
                
              </View>
            </View>

          </Callout>
      </Marker>
            
    );
}
export default CalloutMap_2;