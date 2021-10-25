import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Button,Text,TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from "./styles";
import  MapView,{ Marker,Callout }  from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

function CalloutMap(props) {

    const base64Image=props.data.images[0];
  
    return(

      <Marker  coordinate={{ latitude:parseFloat(props.data.latitude),longitude: parseFloat(props.data.longitude) }} >
      <Image style={styles(props).avatar} source={require("../../../assets/main/event_1.png")}/>
          <Callout tooltip={true} onPress={()=>{props.navigation.navigate("LostPet_More",{

              StateInsertList:props.StateInsertList,
              dataEvent:props.data,
              images:props.data.images,
              status:props.data.status,
              type:props.data.type,
              state:false
              
            
          })}}>
             <View style={styles(props).callout}>
              <View style={ styles(props).headercallout }>
                <Text style={styles(props).devname}>Animal Perdido</Text>
              </View> 
              <View style={ styles(props).body }>
                <View style={{flexDirection:'row'}}>
                    <Image style={styles(props).avatar} source={{ uri: `data:image/jpg;base64,${base64Image}` }} />
                    <View>
                      <Text style={styles(props).devbio}>Nome: {props.data.name}</Text>
                      <Text style={styles(props).devtest}>Raça: Vira-Lata</Text>
                      <View style={{flexDirection:'row',paddingTop:10}}>
                        <Text >Status: </Text>
                        <Text style={{ fontWeight:'bold',color:'black' }}>{props.data.status}</Text>
                      </View> 
                      
                    </View>
                </View>
                <View>
                      <TouchableOpacity style={ styles(props).btnMore }  >
                          <Icon  name="arrow-right" size={20} color={props.color}/>
                      </TouchableOpacity>
                </View>
                
              </View>
            </View>

          </Callout>
      </Marker>
            
    );
}
export default CalloutMap;