import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Button,Text,TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from "./styles";
import  MapView,{ Marker,Callout }  from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

function CalloutMap_2(props) {

  const [CalloutVisible,setVisible] = useState(true); 
    
  
    return(

      <Marker  coordinate={{ latitude:parseFloat(props.data.latitude),longitude: parseFloat(props.data.longitude) }} >
        <Image style={styles(props).avatar} source={require("../../../assets/main/event_2.png")}/>
          <Callout tooltip={true} onPress={()=>{ props.navigation.navigate("CommunityHouse_More",{

              information:props.data.information,
              images:props.data.images

             })}}>
             <View style={styles(props).callout}>
              <View style={ styles(props).headercallout }>
                <Text style={styles(props).devname}>Casinha Comunitária</Text>
              </View> 
              <View style={ styles(props).body }>
                  <Text style={ styles(props).textArea }>
                    {props.data.information}
                  </Text>
                  
                  <TouchableOpacity style={ styles(props).btnMore }>
                      <Icon  name="arrow-right" size={20} color={props.color}/>
                  </TouchableOpacity>
              </View>
            </View>

          </Callout>
      </Marker>
            
    );
}
export default CalloutMap_2;