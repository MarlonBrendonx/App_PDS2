import React, { useState, useEffect,useRef } from 'react';
import { Plataform } from 'react-native';
import  MapView,{ Marker,Callout }  from 'react-native-maps';
import { Image,View,Button,Text,TextInput,TouchableOpacity, Touchable } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import Icon from 'react-native-vector-icons/FontAwesome';
import  styles from './styles';
import { Avatar, Badge, withBadge } from 'react-native-elements'
import { Fontisto } from '@expo/vector-icons';
import Filters from "../FiltersMain";
import Notification  from "../Notifications";
import ModalEvents   from '../ModalEvents';
import CalloutMap from "../../../components/Callouts/CalloutLostPet";
import CalloutMap_2 from '../../../components/Callouts/CalloutCommunityHouse';
import CalloutMap_3 from '../../../components/Callouts/CalloutComplaint';

function MapScreen({ navigation }) {

    const [currentRegion,setCurrentRegion] = useState(null); 
    const [coords,setCoords] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalNotificationVisible, setModalNotificationVisible] = useState(false);
    const [isModalEventsVisible,setModalEventsVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleModalNotification = () => {
        setModalNotificationVisible(!isModalNotificationVisible);
    };

    const toggleModalEvents = () => {
        setModalEventsVisible(!isModalEventsVisible);
    };

    const ClickMap = (region) => {
        
    }

    const handleLocationFinder = async () =>{

        const { granted } = await requestForegroundPermissionsAsync();

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

        console.log(currentRegion);

    }



    useEffect( ()=>{

        async function loadInitialPosition(){

                const { granted } = await requestForegroundPermissionsAsync();

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
        <ModalEvents isVisible={isModalEventsVisible} onClose={()=> toggleModalEvents()} navigation={navigation} />
        <Notification isVisible={isModalNotificationVisible} onClose={()=> toggleModalNotification()}/>
        <MapView initialRegion={currentRegion} style={ styles.map } 
        onPress={toggleModalEvents}
        >
        <CalloutMap 	type=""  color="#FAAB64" coordinate={{ latitude:-18.727707,longitude: -47.500065 }} />
				<CalloutMap_2 type=""  color="#5cc5c0" coordinate={{ latitude:-18.724089,longitude:  -47.490387 }} />
				<CalloutMap_3 type=""  color="red" coordinate={{ latitude:-18.735917,longitude:  -47.486853 }} />
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
        	<TouchableOpacity style={styles.btnMylocation}  onPress={handleLocationFinder} >
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