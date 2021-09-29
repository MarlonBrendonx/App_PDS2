import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Button,Text,TouchableOpacity, TextInput, ProgressBarAndroidBase } from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from "./styles";
import Modal from 'react-native-modal';

import  MapView,{ Marker,Callout }  from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

function CalloutMap_3(props) {
    
    const [CalloutVisible,setVisible] = useState(true); 
    
    
    return(

      <Marker  coordinate={{ latitude:parseFloat(props.data.latitude),longitude: parseFloat(props.data.longitude) }} >
      <Image style={styles(props).avatar} source={require("../../../assets/main/event_3.png")} />
          <Callout visible={CalloutVisible} tooltip={true} onPress={()=>{ props.navigation.navigate("Complaint_More",{

             id_event:props.data.id_event,
             status:props.data.status, 
             information:props.data.information,
             images:props.data.images

             })}}>
             <View style={styles(props).callout}>
              <View style={ styles(props).headercallout }>
                <Text style={styles(props).devname}>Denúncia</Text>
              </View> 
              <View style={ styles(props).body }>
                  <Text style={ styles(props).textArea }>
                    {props.data.information}
                  </Text>
                  <View style={{ flexDirection:'row',paddingTop:10 }}>
                    <Text>Status:</Text>
                    <Text style={{ color: props.color }}>{props.data.status}</Text>
                  </View>
                  <TouchableOpacity style={ styles(props).btnMore }>
                    <Icon  name="arrow-right" size={20} color={props.color}/>
                  </TouchableOpacity>
              </View>
              
            </View>

          </Callout>
      </Marker>
            
    );
}
export default CalloutMap_3;