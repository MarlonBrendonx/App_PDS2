import React, { useState, useEffect,useRef } from 'react';
import  MapView,{ Marker,Callout }  from 'react-native-maps';
import { Image,View,Button,Text,TextInput,TouchableOpacity, Touchable } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import Icon from 'react-native-vector-icons/FontAwesome';
import  styles from './styles';
import { Avatar, Badge, withBadge } from 'react-native-elements'
import { Fontisto } from '@expo/vector-icons';
import Filters from "../FiltersMain";
import Notification  from "../Notifications";

function MapScreen({ navigation }) {

    const [currentRegion,setCurrentRegion] = useState(null); 

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalNotificationVisible, setModalNotificationVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleModalNotification = () => {
        setModalNotificationVisible(!isModalNotificationVisible);
    };

    
    useEffect( ()=>{

        async function loadInitialPosition(){

                const { granted } = await requestPermissionsAsync();

                if( granted ){
                    const { coords } = await getCurrentPositionAsync({
                        enableHighAccuracy: true,
                    });

                    const { latitude, longitude  } = coords;
                    setCurrentRegion({

                        latitude,
                        longitude,
                        latitudeDelta:0.04,
                        longitudeDelta:0.04,

                    })
                }

        }
        
        

        loadInitialPosition();

    }, []);
    return (
        <>
            <Notification isVisible={isModalNotificationVisible} onClose={()=> toggleModalNotification()}/>
            <MapView initialRegion={currentRegion} style={ styles.map } >
            <Marker coordinate={{ latitude:-18.7254139,longitude:-47.5238353 }} >
                <Image style={styles.avatar} />
                    <Callout onPress={()=>{
                        //
                        navigation.navigate('Profile',{ github_username: 'debmarlon' });

                    }}>
                        <View style={styles.callout}>
                            <Text style={styles.devname}>Marlon</Text>
                            <Text style={styles.devbio}>tese do teste</Text>
                            <Text style={styles.devtest}>Linux,C,python,Shell</Text>
                        </View>
                    </Callout>
            </Marker>
        </MapView>
        <View style={styles.topSection}>

          <TouchableOpacity style={styles.btnBell} onPress={toggleModalNotification}>
            <Fontisto name="bell-alt" size={30} color="#858585" />
          </TouchableOpacity>
          <Badge
            status="error"
            value="1"
            containerStyle={{ position: 'absolute', top: -4, right: 0 }}
          />  
                
        </View>
        
       
        <View style={styles.locationSection}>
                <TouchableOpacity style={styles.btnMylocation}>
                    <Icon  name="crosshairs" size={20} color="#B33BF6"/>
                </TouchableOpacity>
        </View>
        
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
            <TouchableOpacity style={styles.btnSettings} onPress={toggleModal} >
                <Icon style={styles.searchIcon2} name="sliders" size={20} color="#000"/>
            </TouchableOpacity>


        </View>
     
        <Filters isVisible={isModalVisible} onClose={()=> toggleModal()}/>
            

        </View>
    </>
    );
  }

// <Button title="Hide modal" onPress={toggleModal} />
export default MapScreen;